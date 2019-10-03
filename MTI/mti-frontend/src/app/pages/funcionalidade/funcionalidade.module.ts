import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '../../../../node_modules/@angular/forms';

import { FuncionalidadeRoutingModule } from './funcionalidade-routing.module';
import { FuncionalidadeComponent } from './funcionalidade.component';

import { ButtonModule } from '../../../../node_modules/primeng/components/button/button';
import { TableModule } from '../../../../node_modules/primeng/table';
import { DialogModule } from '../../../../node_modules/primeng/components/dialog/dialog';
import { InputTextModule } from '../../../../node_modules/primeng/components/inputtext/inputtext';
import { RadioButtonModule } from '../../../../node_modules/primeng/components/radiobutton/radiobutton';
import { ListboxModule } from '../../../../node_modules/primeng/components/listbox/listbox';
import { MultiSelectModule } from '../../../../node_modules/primeng/components/multiselect/multiselect';
import { PanelModule } from '../../../../node_modules/primeng/components/panel/panel';
import { DropdownModule } from '../../../../node_modules/primeng/dropdown';
import { TabViewModule } from '../../../../node_modules/primeng/tabview';
import { DataTableModule } from '../../../../node_modules/primeng/datatable';
import { CheckboxModule } from '../../../../node_modules/primeng/checkbox';
import { SplitButtonModule } from '../../../../node_modules/primeng/splitbutton';
import { TooltipModule } from '../../../../node_modules/primeng/tooltip';
import { BlockUIModule } from '../../../../node_modules/primeng/blockui';
import { GrowlModule } from '../../../../node_modules/primeng/growl';
import { SelectButtonModule } from '../../../../node_modules/primeng/selectbutton';
import { CardModule } from '../../../../node_modules/primeng/components/card/card';
import { BoxModule } from '../../../../core/box/box.module';
import { BoxInfoModule } from '../../../../core/box-info/box-info.module';
import { CoreModule } from '../core/core.module';
import { FuncionalidadeService } from './funcionalidade.service';
import { MessageService } from '../../../../node_modules/primeng/components/common/messageservice';
import { NotificacaoService } from '../../shared/notificacao/notificacao.service';
import { NovaFuncionalidadeComponent } from './nova-funcionalidade/nova-funcionalidade.component';
import { NovaFuncionalidadeService } from './nova-funcionalidade/nova-funcionalidade.service';

const ANGULAR_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

const PRIME_MODULES = [
  ButtonModule,
  TableModule,
  DialogModule,
  InputTextModule,
  RadioButtonModule,
  ListboxModule,
  MultiSelectModule,
  PanelModule,
  DropdownModule,
  TabViewModule,
  DataTableModule,
  CheckboxModule,
  SplitButtonModule,
  TooltipModule,
  BlockUIModule,
  GrowlModule,
  SelectButtonModule,
  CardModule
];

const MTI_MODULES = [
  FuncionalidadeRoutingModule,
  BoxModule,
  BoxInfoModule,
  CoreModule,
];

const MTI_COMPONENTS = [
  FuncionalidadeComponent,
  NovaFuncionalidadeComponent
];
@NgModule({
  imports: [
    ...ANGULAR_MODULES,
    ...PRIME_MODULES,
    ...MTI_MODULES,
  ],
  declarations: [...MTI_COMPONENTS],
  providers: [FuncionalidadeService, MessageService, NotificacaoService, NovaFuncionalidadeService],
  exports: [...MTI_COMPONENTS],
})
export class FuncionalidadeModule { }
