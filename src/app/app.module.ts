import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TickerComponent } from './ticker/ticker.component';
import { RandomNumberService } from './service/random-number/random-number.service';

@NgModule({
    declarations: [
        AppComponent,
        TickerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        RandomNumberService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

// No AppRoutes included as there is no routing involved.
