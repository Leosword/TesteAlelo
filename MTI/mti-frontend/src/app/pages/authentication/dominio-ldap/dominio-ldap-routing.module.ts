import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DominioLdapComponent } from './dominio-ldap.component';

const routes: Routes = [{
    path: '',
    component: DominioLdapComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DominioLdapRoutingModule { }
