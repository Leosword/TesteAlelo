import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilAcessoComponent } from './perfil-acesso.component';

const routes: Routes = [{
  path: '',
  component: PerfilAcessoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilAcessoRoutingModule { }
