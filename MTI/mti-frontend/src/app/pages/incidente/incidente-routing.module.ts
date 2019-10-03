import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncidenteComponent } from './incidente.component';

const routes: Routes = [{
  path: '',
  component: IncidenteComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidenteRoutingModule { }
