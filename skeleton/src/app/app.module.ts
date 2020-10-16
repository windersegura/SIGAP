import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { ContribuyentesManagerComponent } from './pages/components/contribuyentes/contribuyentes-manager/contribuyentes-manager.component';
import { ContribuyentesListComponent } from './pages/components/contribuyentes/contribuyentes-manager/contribuyentes-list/contribuyentes-list.component';


@NgModule({
  declarations: [AppComponent, ContribuyentesManagerComponent, ContribuyentesListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // Vex
    VexModule,
    CustomLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
