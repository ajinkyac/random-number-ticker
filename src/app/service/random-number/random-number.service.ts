import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { Helper } from '../../shared/utils/helper';

@Injectable()
export class RandomNumberService {
    private static readonly RANDOM_FN_LIMIT = 3;
    private static readonly RANDOM_FN_MIN = 1;
    private static readonly RANDOM_FN_MAX = 15000;
    private randomNumbers = '';
    private randomNumberBuffer: number[] = [];
    private reset = 0;

    public uniqueRandomNumberSubject: Subject<string[]> = new Subject<string[]>();
    public sequentialNumberSubject: Subject<number> = new Subject<number>();

    constructor(private helper: Helper) {
        this.publishRandomNumber();
    }

    /**
     * Stores random numbers in an array that keeps on empting.
     * Maintain a string of the random numbers for uniqueness (less expensive than array operation).
     */
    getAndStoreRandomNumbers(): void {
        const ranges: string[] = this.helper.getRandomNumberGeneratorRanges(RandomNumberService.RANDOM_FN_LIMIT,
                                                                            RandomNumberService.RANDOM_FN_MAX);

        const interval = setInterval(() => {
            let range: string[] = [];

            // Once the interval is reset, again a '?' will appear on the screen.
            if (!ranges.length) {
                clearInterval(interval);
            } else {
                range = ranges.shift().split('-');

                const min = parseInt(range[0], 10),
                      max = parseInt(range[1], 10);

                // The limit of 500 can be increased to any number of numbers between a given range i.e. the diff of max and min.
                const randomNumber: number[] = this.helper.getRandomNumbersBetween(min, max, 5000);
                this.randomNumbers += randomNumber + ',';
                this.randomNumberBuffer = this.randomNumberBuffer.concat(randomNumber);
                this.reset++;
            }
        }, 1000);
    }

    /**
     * Publish latest unique random number.
     */
    publishRandomNumber(): void {
        this.getAndStoreRandomNumbers();

        const interval = setInterval(() => {
            const number: string[] = this.randomNumberBuffer.length ? this.randomNumberBuffer.pop().toString().split('') : null;
            if (number !== null) {
                this.uniqueRandomNumberSubject.next(number);
            } else {
                clearInterval(interval);
            }
        }, 2000);
    }

    /**
     * NOTE: A demo function left as a food for thought if the TimerObservable could be used.
     */
    publishEmulatedRandomness(): void {
        /*
        // This also works well if the numbers are stored, shuffled and displayed to emulate randomness.
        // But TimerObservable is a costly affair w.r.t it's disposal.

        const timer = TimerObservable.create(0, 2000);

        timer.subscribe((number) => {
            if (number < 10) {
                this.sequentialNumberSubject.next(number);
            }
            else {
                this.sequentialNumberSubject.next(null);
            }
        });

        */
    }
}
