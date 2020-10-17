import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContribuyentesManagerComponent } from './contribuyentes-manager/contribuyentes-manager.component';
import { ViviendasManagerComponent } from './viviendas-manager/viviendas-manager.component';

const routes: Routes = [
  {
    path: 'contribuyentes',
    component:ContribuyentesManagerComponent
  },
  {
    path: 'viviendas',
    component: ViviendasManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AguapotableRoutingModule { }
