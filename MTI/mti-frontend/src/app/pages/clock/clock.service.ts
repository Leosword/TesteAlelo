import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ClockService {

    private clock: Observable<Date>;

    constructor() { }

    getClock(dataAbertura: Date): Observable<string> {

        let startTime = new Date(dataAbertura);
        return Observable.interval(1000).map(tick => this.diff(startTime, new Date())).share();
    }

    diff(date1, date2) {
        //Get 1 day in milliseconds
        var one_day = 1000 * 60 * 60 * 24;

        // Convert both dates to milliseconds
        var date1_ms = date1.getTime();
        var date2_ms = date2.getTime();

        // Calculate the difference in milliseconds
        var difference_ms = date2_ms - date1_ms;
        //take out milliseconds
        difference_ms = difference_ms / 1000;
        var seconds = Math.floor(difference_ms % 60);
        difference_ms = difference_ms / 60;
        var minutes = Math.floor(difference_ms % 60);
        difference_ms = difference_ms / 60;
        var hours = Math.floor(difference_ms % 24);
        var days = Math.floor(difference_ms / 24);

        hours += (24 * days);

        return hours + ':' + this.leftPad(minutes, 2) + ':' + this.leftPad(seconds, 2);
    }

    leftPad(value, totalWidth) {
        var length = totalWidth - value.toString().length + 1;
        return Array(length).join('0') + value;
    }
}
