import { Injectable } from '@angular/core';

@Injectable()
export class Helper {
    /**
    * Generates random number between the given range.
    *
    * @param {number} min - Starting value of the number range.
    * @param {number} max - End value of the number range.
    *
    * @return {number} - A random number.
    */
    getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
