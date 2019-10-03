import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionalidadeComponent } from './funcionalidade.component';

const routes: Routes = [{
  path: '',
  component: FuncionalidadeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionalidadeRoutingModule { }
