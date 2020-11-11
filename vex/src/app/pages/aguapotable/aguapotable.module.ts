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
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ContribuyentesEditComponent } from './contribuyentes-manager/contribuyentes-edit/contribuyentes-edit.component';
import { ViviendaListComponent } from './viviendas-manager/vivienda-list/vivienda-list.component';
import { ViviendaEditComponent } from './viviendas-manager/vivienda-edit/vivienda-edit.component';
import { ConfigService } from '../../services/config.service';
import { MatSortModule } from '@angular/material/sort';
import { DialogContribuyentesListComponent } from './viviendas-manager/dialog-contribuyentes-list/dialog-contribuyentes-list.component';
import { PagosManagerComponent } from './pagos-manager/pagos-manager.component';
import { PagosFormComponent } from './pagos-manager/pagos-form/pagos-form.component';
import { ReportesManagerComponent } from './reportes-manager/reportes-manager.component';
import { ViviendaHistorialComponent } from './viviendas-manager/vivienda-historial/vivienda-historial.component';
import { DialogViviendasListComponent } from './pagos-manager/dialog-viviendas-list/dialog-viviendas-list.component';




@NgModule({
  declarations: [ViviendasManagerComponent, ContribuyentesManagerComponent, ContribuyentesListComponent, ContribuyentesEditComponent, ViviendaListComponent, ViviendaEditComponent, DialogContribuyentesListComponent, PagosManagerComponent, PagosFormComponent, ReportesManagerComponent, ViviendaHistorialComponent, DialogViviendasListComponent],
  imports: [
    CommonModule,
    AguapotableRoutingModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    VexModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTooltipModule,
    MatSortModule




  ],
  providers:[AguapotableService, ConfigService]
})
export class AguapotableModule { }
