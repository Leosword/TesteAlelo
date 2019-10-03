import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { NotificacaoService } from '../../shared/notificacao/notificacao.service';
import { AutofocusDirective } from '../../shared/autofocus.directive';
import { UsuarioService } from '../authentication/usuario/usuario.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    AutofocusDirective
  ],
  providers: [UsuarioService, NotificacaoService],
  bootstrap: [LoginComponent]
  
})
export class LoginModule { }
