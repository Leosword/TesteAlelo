import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertRoutingModule } from './alert-routing.module';
import { AlertComponent } from './alert.component';
import { BoxModule, AlertModule as MkAlertModule } from '../../../../core';

@NgModule({
  imports: [
    CommonModule,
    AlertRoutingModule,
    MkAlertModule,
    BoxModule
  ],
  declarations: [AlertComponent]
})
export class AlertModule { }
