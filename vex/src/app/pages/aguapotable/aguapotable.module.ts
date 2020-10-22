import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AguapotableRoutingModule } from './aguapotable-routing.module';
import { ViviendasManagerComponent } from './viviendas-manager/viviendas-manager.component';
import { ContribuyentesManagerComponent } from './contribuyentes-manager/contribuyentes-manager.component';
import { ContribuyentesListComponent } from './contribuyentes-manager/contribuyentes-list/contribuyentes-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { VexModule } from '../../../@vex/vex.module';
import { MatTableModule } from '@angular/material/table';
import { AguapotableService } from 'src/app/services/aguapotable.service';



@NgModule({
  declarations: [ViviendasManagerComponent, ContribuyentesManagerComponent, ContribuyentesListComponent],
  imports: [
    CommonModule,
    AguapotableRoutingModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    VexModule,
    FormsModule,
    MatTableModule
  ],
  providers:[AguapotableService]
})
export class AguapotableModule { }
