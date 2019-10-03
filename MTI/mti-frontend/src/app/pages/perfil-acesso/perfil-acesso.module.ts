import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PerfilAcessoRoutingModule } from './perfil-acesso-routing.module';
import { PerfilAcessoComponent } from './perfil-acesso.component';
import { BoxModule, BoxInfoModule } from '../../../../core';
import { PerfilAcessoService } from './perfil-acesso.service';
import { CoreModule } from '../core/core.module';
import { NovoPerfilAcessoComponent } from './novo-perfil-acesso/novo-perfil-acesso.component';
import { NovoPerfilAcessoService } from './novo-perfil-acesso/novo-perfil-acesso.service';
import { NotificacaoService } from '../../shared/notificacao/notificacao.service';
import { AssociarPermissaoComponent } from './associar-permissao/associar-permissao.component';

import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { RadioButtonModule } from 'primeng/components/radiobutton/radiobutton';
import { ListboxModule } from 'primeng/components/listbox/listbox';
import { MultiSelectModule } from 'primeng/components/multiselect/multiselect';
import { PanelModule } from 'primeng/components/panel/panel';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { DataTableModule } from 'primeng/datatable';
import { CheckboxModule } from 'primeng/checkbox';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TooltipModule } from 'primeng/tooltip';
import { BlockUIModule } from 'primeng/blockui';
import { GrowlModule } from 'primeng/growl';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MessageService } from '../../../../node_modules/primeng/components/common/messageservice';
import { CardModule } from 'primeng/components/card/card';
import {PickListModule} from 'primeng/picklist';


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
  CardModule,
  PickListModule
];

const MTI_MODULES = [
  PerfilAcessoRoutingModule,
  BoxModule,
  BoxInfoModule,
  CoreModule,
];

const MTI_COMPONENTS = [
  PerfilAcessoComponent,
  NovoPerfilAcessoComponent
];

@NgModule({
  imports: [
    ...ANGULAR_MODULES,
    ...PRIME_MODULES,
    ...MTI_MODULES,
  ],
  declarations: [...MTI_COMPONENTS, AssociarPermissaoComponent],
  providers: [PerfilAcessoService, MessageService, NotificacaoService, NovoPerfilAcessoService],
  exports: [...MTI_COMPONENTS],

})
export class PerfilAcessoModule { }
