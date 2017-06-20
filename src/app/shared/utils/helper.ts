import { Injectable } from '@angular/core';

@Injectable()
export class Helper {
    /**
     * Generates a random number.
     *
     * @param {number} min - Starting value of the number range.
     * @param {number} max - End value of the number range.
     *
     * @return {number} - A random number.
     */
    getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Generates an array of intervals between which the random numbers are to be generated.
     *
     * @param {number} rangeLength - The limit of range.
     * @param {number} max - End value of the number range.
     *
     * @return {string[]} - Array of intervals.
     */
    getRandomNumberGeneratorRanges(rangeLength: number, max: number): string[] {
        const ranges: string[] = [];
        let eachRangeLength = max / rangeLength;

        for (let i = 1; i <= rangeLength; i++) {
            let rangeStr = '';

            if (i === 1) {
                rangeStr += i + '-' + eachRangeLength;
            }
            else {
                rangeStr += ((i - 1) * eachRangeLength + 1) + '-' + (i * eachRangeLength);
            }
            ranges.push(rangeStr);
        }

        return ranges;
    }

    /**
     * Generates an array of random numbers between the given range.
     *
     * @param {number} min - Starting value of the number range.
     * @param {number} max - End value of the number range.
     * @param {number} limit - Number of randoms function could generate.
     *
     * @return {number} - A random number.
     */
    getRandomNumbersBetween(min: number, max: number, limit: number): number[] {
        let randomNumbers: number[] = [];

        while(randomNumbers.length < limit) {
            const number = this.getRandomNumber(min, max);

            // Lodash/underscore could be used for such ops.
            if (randomNumbers.indexOf(number) === -1) {
                randomNumbers.push(number);
            }
        }
        return randomNumbers;
    }
}
