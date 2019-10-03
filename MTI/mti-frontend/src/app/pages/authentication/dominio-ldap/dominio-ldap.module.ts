import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DominioLdapRoutingModule } from './dominio-ldap-routing.module';
import { DominioLdapComponent } from './dominio-ldap.component';
import { TableModule } from 'primeng/components/table/table';
import { BoxModule } from '../../../../../core/index';
import { ButtonModule } from 'primeng/components/button/button';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { DominioLdapService } from './dominio-ldap.service';
import { NotificacaoService } from '../../../shared/notificacao/notificacao.service';
import { NovoDominioLdapModule } from './novo-dominio-ldap/novo-dominio-ldap.module';

@NgModule({
  imports: [
    CommonModule,
    DominioLdapRoutingModule,
    TableModule,
    BoxModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    InputTextModule,
    NovoDominioLdapModule
  ],
  exports: [DominioLdapComponent],
  providers: [DominioLdapService, NotificacaoService], 
  declarations: [DominioLdapComponent]
})
export class DominioLdapModule { }
