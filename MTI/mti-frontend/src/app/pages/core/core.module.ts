import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BoxModule, TabsModule, DropdownModule } from '../../../../core';

import { HeaderInnerComponent } from './header-inner/header-inner.component';
import { SidebarLeftInnerComponent } from './sidebar-left-inner/sidebar-left-inner.component';
import { SidebarRightInnerComponent } from './sidebar-right-inner/sidebar-right-inner.component';
import { AlterarSenhaModule } from '../authentication/usuario/alterar-senha/alterar-senha.module';
import { NotificacaoService } from '../../shared/notificacao/notificacao.service';
import { NovoUsuarioService } from '../authentication/usuario/novo-usuario/novo-usuario.service';
import { UsuarioService } from '../authentication/usuario/usuario.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    DropdownModule,
    TabsModule,
    BoxModule,
    AlterarSenhaModule
  ],
  declarations: [HeaderInnerComponent, SidebarLeftInnerComponent, SidebarRightInnerComponent],
  exports: [BoxModule, TabsModule, HeaderInnerComponent, SidebarLeftInnerComponent, SidebarRightInnerComponent],
  providers: [NovoUsuarioService, NotificacaoService, UsuarioService],
})
export class CoreModule { }
