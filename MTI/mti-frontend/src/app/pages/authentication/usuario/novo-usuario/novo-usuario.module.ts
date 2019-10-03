import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovoUsuarioRoutingModule } from './novo-usuario-routing.module';
import { NovoUsuarioComponent } from './novo-usuario.component';
import { TableModule } from 'primeng/components/table/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { BoxModule } from '../../../../../../core/index';
import { ButtonModule } from 'primeng/components/button/button';
import { PanelModule } from 'primeng/components/panel/panel';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { CardModule } from 'primeng/components/card/card';
import { NovoUsuarioService } from './novo-usuario.service';
import { NotificacaoService } from '../../../../shared/notificacao/notificacao.service';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { RadioButtonModule } from 'primeng/components/radiobutton/radiobutton';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { PerfilAcessoService } from '../../../perfil-acesso/perfil-acesso.service';
import { OperacaoService } from '../../../operacao/operacao.service';
import { MultiSelectModule } from '../../../../../../node_modules/primeng/components/multiselect/multiselect';
import { PickListModule } from '../../../../../../node_modules/primeng/picklist';

@NgModule({
  imports: [
    CommonModule,
    NovoUsuarioRoutingModule,
    TableModule,
    FormsModule,
    DialogModule,
    BoxModule,
    ButtonModule,
    PanelModule,
    ReactiveFormsModule,
    InputTextModule,
    CardModule,
    DropdownModule,
    RadioButtonModule,
    InputMaskModule,
    MultiSelectModule,
    PickListModule
  ],
  exports: [NovoUsuarioComponent],
  providers: [NovoUsuarioService, NotificacaoService, PerfilAcessoService, OperacaoService], 
  declarations: [NovoUsuarioComponent]
})
export class NovoUsuarioModule { }
