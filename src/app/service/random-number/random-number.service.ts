import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

@Injectable()
export class RandomNumberService {
    private static readonly RANDOM_FN_MIN = 1;
    private static readonly RANDOM_FN_MAX = 15000;

    public uniqueRandomNumberSubject: Subject<any> = new Subject<any>();
    public sequentialNumberSubject: Subject<number> = new Subject<number>();

    constructor() { }

    publishRandomNumber(): void {

    }

    publishEmulatedRandomness(): void {
        const timer = TimerObservable.create(0, 2000);

        timer.subscribe((number) => {
            if (number < 10) {
                this.sequentialNumberSubject.next(number);
            }
            else {
                this.sequentialNumberSubject.next(null);
            }
        });
    }
}
