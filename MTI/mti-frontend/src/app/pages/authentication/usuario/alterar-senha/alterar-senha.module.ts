import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlterarSenhaComponent } from './alterar-senha.component';
import { TableModule } from 'primeng/components/table/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { BoxModule } from '../../../../../../core/index';
import { ButtonModule } from 'primeng/components/button/button';
import { PanelModule } from 'primeng/components/panel/panel';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { CardModule } from 'primeng/components/card/card';
import { NotificacaoService } from '../../../../shared/notificacao/notificacao.service';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { RadioButtonModule } from 'primeng/components/radiobutton/radiobutton';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { MultiSelectModule } from '../../../../../../node_modules/primeng/components/multiselect/multiselect';
import { PickListModule } from '../../../../../../node_modules/primeng/picklist';
import { AlterarSenhaService } from './alterar-senha.service';
import {PasswordModule} from 'primeng/password';

@NgModule({
  imports: [
    CommonModule,
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
    PickListModule,
    PasswordModule
  ],
  declarations: [AlterarSenhaComponent],
  exports: [AlterarSenhaComponent],
  providers: [AlterarSenhaService, NotificacaoService]
})
export class AlterarSenhaModule { }
