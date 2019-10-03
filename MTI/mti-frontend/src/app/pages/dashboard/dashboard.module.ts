import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {ChartModule} from 'primeng/chart';
import { BoxModule } from '../../../../core/index';
import { TableModule } from 'primeng/components/table/table';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { MultiSelectModule } from 'primeng/components/multiselect/multiselect';
import { ButtonModule } from 'primeng/components/button/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/components/panel/panel';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { CardModule } from 'primeng/components/card/card';
import { OverlayPanelModule } from 'primeng/components/overlaypanel/overlaypanel';
import { ListboxModule } from 'primeng/components/listbox/listbox';
import { NotificacaoService } from '../../shared/notificacao/notificacao.service';
import { DashboardService } from './dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartModule,
    BoxModule,
    TableModule,
    DropdownModule,
    DialogModule,
    MultiSelectModule, 
    ButtonModule,
    PanelModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    CardModule,
    OverlayPanelModule,
    ListboxModule,
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  providers: [NotificacaoService, DashboardService]
})
export class DashboardModule { }
