import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ClockService } from './clock.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'diario-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

    private _clockSubscription: Subscription;

    time: string;

    @Output() notificarTempo = new EventEmitter<string>();

    @Input() dataAbertura: Date;

    constructor(private clockService: ClockService) {
    }

    ngOnInit() {
        this._clockSubscription = this.clockService.getClock(this.dataAbertura).subscribe(time => {
            this.time = time;
            this.notificarTempo.emit(this.time);
        });
    }

    ngOnDestroy(): void {
        this._clockSubscription.unsubscribe();
    }

}
