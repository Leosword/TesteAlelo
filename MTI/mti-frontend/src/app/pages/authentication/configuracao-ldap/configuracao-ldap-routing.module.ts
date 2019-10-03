import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguracaoLdapComponent } from './configuracao-ldap.component';

const routes: Routes = [{
    path: '',
    component: ConfiguracaoLdapComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracaoLdapRoutingModule { }
