import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidenteRoutingModule } from './incidente-routing.module';
import { IncidenteComponent } from './incidente.component';
import { IncidenteDetalheComponent } from './incidente-detalhe/incidente-detalhe.component';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/components/table/table';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { RadioButtonModule } from 'primeng/components/radiobutton/radiobutton';
import { ListboxModule } from 'primeng/components/listbox/listbox';
import { BoxModule, BoxInfoModule } from '../../../../core/index';
import { MultiSelectModule } from 'primeng/components/multiselect/multiselect';
import { PanelModule } from 'primeng/components/panel/panel';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { OverlayPanelModule } from 'primeng/components/overlaypanel/overlaypanel';
import { CardModule } from 'primeng/components/card/card';
import { TabViewModule } from 'primeng/tabview';
import { DataTableModule } from 'primeng/datatable';
import { CheckboxModule } from 'primeng/checkbox';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TooltipModule} from 'primeng/tooltip';
import { IncidenteDetalheService } from './incidente-detalhe/incidente-detalhe.service';
import { IncidenteService } from './incidente.service';
import { NotificacaoService } from '../../shared/notificacao/notificacao.service';
import { LogsComponent } from './logs/logs.component';
import { IncidentesRelacionadosComponent } from './incidentes-relacionados/incidentes-relacionados.component';
import {BlockUIModule} from 'primeng/blockui';
import {GrowlModule} from 'primeng/growl';
import { CoreModule } from '../core/core.module';
import { LogsService } from './logs/logs.service';
import { IncidentePropriedadeComponent } from './incidente-propriedade/incidente-propriedade.component';
import { IncidentePropriedadeService } from './incidente-propriedade/incidente-propriedade.service';
import { IncidentesRelacionadosService } from './incidentes-relacionados/incidentes-relacionados.service';
import {MessageService} from 'primeng/components/common/messageservice';
import {SelectButtonModule} from 'primeng/selectbutton';
import { ValidaIncidenteComponent } from './valida-incidente/valida-incidente.component';
import { ValidaIncidenteService } from './valida-incidente/valida-incidente.service';
import {FileUploadModule} from 'primeng/fileupload';
import { ValidaIncidenteEpsComponent } from './valida-incidente-eps/valida-incidente-eps.component';
import { ValidaIncidenteEpsService } from './valida-incidente-eps/valida-incidente-eps.service';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineService } from './timeline/timeline.service';
import {LightboxModule} from 'primeng/lightbox';

@NgModule({
  imports: [
    CommonModule,
    IncidenteRoutingModule,
    ButtonModule,
    TableModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    RadioButtonModule,
    ListboxModule,
    BoxModule,
    MultiSelectModule,
    PanelModule,
    DropdownModule,
    OverlayPanelModule,
    CardModule,
    TabViewModule,
    DataTableModule,
    CheckboxModule,
    SplitButtonModule,
    TooltipModule,
    BoxInfoModule,
    BlockUIModule,
    CoreModule,
    GrowlModule,
    SelectButtonModule,
    FileUploadModule,
    LightboxModule
  ],
  declarations: [IncidenteComponent, IncidenteDetalheComponent, LogsComponent, IncidentesRelacionadosComponent, IncidentePropriedadeComponent, ValidaIncidenteComponent, ValidaIncidenteEpsComponent, TimelineComponent],
  exports: [IncidenteComponent, IncidenteDetalheComponent, LogsComponent, IncidentePropriedadeComponent, ValidaIncidenteComponent, ValidaIncidenteEpsComponent],
  providers: [NotificacaoService, IncidenteService, IncidenteDetalheService, LogsService, IncidentePropriedadeService, IncidentesRelacionadosService, MessageService, ValidaIncidenteService, ValidaIncidenteEpsService, TimelineService]
})
export class IncidenteModule { }
