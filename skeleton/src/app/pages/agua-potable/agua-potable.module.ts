import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AguaPotableRoutingModule } from './agua-potable-routing.module';
import { ContribuyentesManagerComponent } from './contribuyentes-manager/contribuyentes-manager.component';


@NgModule({
  declarations: [ContribuyentesManagerComponent],
  imports: [
    CommonModule,
    AguaPotableRoutingModule
  ]
})
export class AguaPotableModule { }
