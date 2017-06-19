import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class RandomNumberService {
    private static readonly RANDOM_FN_MIN = 1;
    private static readonly RANDOM_FN_MAX = 15000;

    public uniqueRandomNumberSubject: Subject<any> = new Subject<any>();
    public sequentialNumberSubject: Subject<number> = new Subject<number>();

    constructor() { }

    publishRandomNumber(): void {

    }
}
