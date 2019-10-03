import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock.component';
import { ClockService } from './clock.service';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [ClockComponent],
    providers: [ClockService],
    declarations: [ClockComponent]
})
export class ClockModule { }
