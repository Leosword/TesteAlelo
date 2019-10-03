import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { TableModule } from 'primeng/components/table/table';
import { BoxModule } from '../../../../../core/index';
import { ButtonModule } from 'primeng/components/button/button';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { NovoUsuarioModule } from './novo-usuario/novo-usuario.module';
import { UsuarioService } from './usuario.service';
import { NotificacaoService } from '../../../shared/notificacao/notificacao.service';
import { TooltipModule } from '../../../../../node_modules/primeng/tooltip';
import { PickListModule } from '../../../../../node_modules/primeng/picklist';
import { AlterarSenhaModule } from './alterar-senha/alterar-senha.module';

@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    TableModule,
    BoxModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    InputTextModule,
    NovoUsuarioModule,
    AlterarSenhaModule,
    TooltipModule,
    PickListModule
  ],
  exports: [UsuarioComponent],
  providers: [UsuarioService, NotificacaoService], 
  declarations: [UsuarioComponent]
})
export class UsuarioModule { }
