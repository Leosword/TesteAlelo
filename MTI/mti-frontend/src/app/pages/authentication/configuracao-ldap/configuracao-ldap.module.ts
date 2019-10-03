import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracaoLdapRoutingModule } from './configuracao-ldap-routing.module';
import { ConfiguracaoLdapComponent } from './configuracao-ldap.component';
import { TableModule } from 'primeng/components/table/table';
import { BoxModule } from '../../../../../core/index';
import { ButtonModule } from 'primeng/components/button/button';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { NovaConfiguracaoLdapModule } from './nova-configuracao-ldap/nova-configuracao-ldap.module';
import { ConfiguracaoLdapService } from './configuracao-ldap.service';
import { NotificacaoService } from '../../../shared/notificacao/notificacao.service';
import { TooltipModule } from '../../../../../node_modules/primeng/tooltip';

@NgModule({
  imports: [
    CommonModule,
    ConfiguracaoLdapRoutingModule,
    TableModule,
    BoxModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    InputTextModule,
    NovaConfiguracaoLdapModule,
    TooltipModule
  ],
  exports: [ConfiguracaoLdapComponent],
  providers: [ConfiguracaoLdapService, NotificacaoService], 
  declarations: [ConfiguracaoLdapComponent]
})
export class ConfiguracaoLdapModule { }
