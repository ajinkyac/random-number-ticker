import { Component, OnInit, OnDestroy } from '@angular/core';
import { RandomNumberService } from './../service/random-number/random-number.service';

@Component({
    selector: 'app-ticker',
    templateUrl: './ticker.component.html',
    styleUrls: ['./ticker.component.scss']
})
export class TickerComponent implements OnInit, OnDestroy {
    private keepSubscriptionAlive = true;
    public randomNumbers: number[];

    constructor(private randomNumberService: RandomNumberService) { }

    ngOnInit() {
    }

    ngOnDestroy(): void {
        this.keepSubscriptionAlive = false;
    }
}
