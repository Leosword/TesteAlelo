import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperacaoRoutingModule } from './operacao-routing.module';
import { OperacaoComponent } from './operacao.component';

@NgModule({
  imports: [
    CommonModule,
    OperacaoRoutingModule
  ],
  declarations: [OperacaoComponent]
})
export class OperacaoModule { }
