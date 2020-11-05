import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContribuyentesManagerComponent } from './contribuyentes-manager/contribuyentes-manager.component';
import { PagosManagerComponent } from './pagos-manager/pagos-manager.component';
import { ViviendasManagerComponent } from './viviendas-manager/viviendas-manager.component';
import { ReportesManagerComponent } from './reportes-manager/reportes-manager.component';

const routes: Routes = [
  {
    path: 'contribuyentes',
    component:ContribuyentesManagerComponent
  },
  {
    path: 'viviendas',
    component: ViviendasManagerComponent
  },
  {
    path:'pagos',
    component: PagosManagerComponent
  },
  {
    path: 'reportes',
    component: ReportesManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AguapotableRoutingModule { }
