import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionRoutingModule } from './accordion-routing.module';
import { AccordionComponent } from './accordion.component';
import { BoxModule, AccordionModule as MkAccordionModule } from '../../../../core';
import { PanelModule } from 'primeng/components/panel/panel';
import { TableModule } from 'primeng/components/table/table';


@NgModule({
  imports: [
    CommonModule,
    AccordionRoutingModule,
    MkAccordionModule,
    BoxModule,
    PanelModule,
    TableModule
  ],
  declarations: [AccordionComponent]
})
export class AccordionModule { }
