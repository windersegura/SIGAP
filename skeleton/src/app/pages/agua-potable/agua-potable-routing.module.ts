import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContribuyentesManagerComponent } from './contribuyentes-manager/contribuyentes-manager.component';

const routes: Routes = [
  {
    path:'contribuyentes',
    component: ContribuyentesManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AguaPotableRoutingModule { }
