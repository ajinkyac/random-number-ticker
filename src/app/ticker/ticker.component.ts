import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-ticker',
    templateUrl: './ticker.component.html',
    styleUrls: ['./ticker.component.scss']
})
export class TickerComponent implements OnInit, OnDestroy {
    private keepSubscriptionAlive = true;

    constructor() { }

    ngOnInit() {
    }

    ngOnDestroy(): void {
        this.keepSubscriptionAlive = false;
    }
}
