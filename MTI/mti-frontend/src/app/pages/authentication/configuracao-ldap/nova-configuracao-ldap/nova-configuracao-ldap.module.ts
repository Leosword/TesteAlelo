import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovaConfiguracaoLdapRoutingModule } from './nova-configuracao-ldap-routing.module';
import { NovaConfiguracaoLdapComponent } from './nova-configuracao-ldap.component';
import { TableModule } from 'primeng/components/table/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { BoxModule } from '../../../../../../core/index';
import { ButtonModule } from 'primeng/components/button/button';
import { PanelModule } from 'primeng/components/panel/panel';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { CardModule } from 'primeng/components/card/card';
import { RadioButtonModule } from 'primeng/components/radiobutton/radiobutton';
import { NovaConfiguracaoLdapService } from './nova-configuracao-ldap.service';
import { NotificacaoService } from '../../../../shared/notificacao/notificacao.service';
import { DropdownModule } from 'primeng/dropdown';
import { NovoDominioLdapModule } from '../../dominio-ldap/novo-dominio-ldap/novo-dominio-ldap.module';
import {PasswordModule} from 'primeng/password';

@NgModule({
  imports: [
    CommonModule,
    NovaConfiguracaoLdapRoutingModule,
    TableModule,
    FormsModule,
    DialogModule,
    BoxModule,
    ButtonModule,
    PanelModule,
    ReactiveFormsModule,
    InputTextModule,
    CardModule,
    RadioButtonModule,
    DropdownModule,
    NovoDominioLdapModule,
    PasswordModule
  ],
  exports: [NovaConfiguracaoLdapComponent],
  providers: [NovaConfiguracaoLdapService, NotificacaoService], 
  declarations: [NovaConfiguracaoLdapComponent]
})
export class NovaConfiguracaoLdapModule { }
