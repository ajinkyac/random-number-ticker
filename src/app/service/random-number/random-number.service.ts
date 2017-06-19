import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { Helper } from '../../shared/utils/helper';

@Injectable()
export class RandomNumberService {
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
        const interval = setInterval(() => {
            const randomNumber: number = this.helper.getRandomNumber(RandomNumberService.RANDOM_FN_MIN,
                                                           RandomNumberService.RANDOM_FN_MAX);

            // Keeping numbers in a string is not that expensive and ensures uniqueness.
            if (this.randomNumbers.indexOf(randomNumber.toString()) === -1) {
                this.randomNumbers += randomNumber + ',';
                this.randomNumberBuffer.push(randomNumber);
                this.reset++;
            }

            if (this.reset === RandomNumberService.RANDOM_FN_MAX) {
                // Once the interval is reset, again a '?' will appear on the screen.
                clearInterval(interval);
            }
        }, 1000);
    }

    publishRandomNumber(): void {
        this.getAndStoreRandomNumbers();

        setInterval(() => {
            const number: string[] = this.randomNumberBuffer.length ? this.randomNumberBuffer.pop().toString().split('') : ['0'];
            this.uniqueRandomNumberSubject.next(number);
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
