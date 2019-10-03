import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovoDominioLdapRoutingModule } from './novo-dominio-ldap-routing.module';
import { NovoDominioLdapComponent } from './novo-dominio-ldap.component';
import { TableModule } from 'primeng/components/table/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { BoxModule } from '../../../../../../core/index';
import { ButtonModule } from 'primeng/components/button/button';
import { PanelModule } from 'primeng/components/panel/panel';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { CardModule } from 'primeng/components/card/card';
import { RadioButtonModule } from 'primeng/components/radiobutton/radiobutton';
import { NovoDominioLdapService } from './novo-dominio-ldap.service';
import { NotificacaoService } from '../../../../shared/notificacao/notificacao.service';

@NgModule({
  imports: [
    CommonModule,
    NovoDominioLdapRoutingModule,
    TableModule,
    FormsModule,
    DialogModule,
    BoxModule,
    ButtonModule,
    PanelModule,
    ReactiveFormsModule,
    InputTextModule,
    CardModule,
    RadioButtonModule
  ],
  exports: [NovoDominioLdapComponent],
  providers: [NovoDominioLdapService, NotificacaoService], 
  declarations: [NovoDominioLdapComponent]
})
export class NovoDominioLdapModule { }
