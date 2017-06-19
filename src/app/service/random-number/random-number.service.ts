import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

@Injectable()
export class RandomNumberService {
    private static readonly RANDOM_FN_MIN = 1;
    private static readonly RANDOM_FN_MAX = 15000;

    public uniqueRandomNumberSubject: Subject<number[]> = new Subject<number[]>();
    public sequentialNumberSubject: Subject<number> = new Subject<number>();

    constructor() { }

    publishRandomNumber(): void {

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
