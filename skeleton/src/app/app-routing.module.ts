import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { HomeComponent } from './pages/components/home/home.component';
import { ContribuyentesManagerComponent } from './pages/components/contribuyentes/contribuyentes-manager/contribuyentes-manager.component';

const routes: Routes = [
  {
    path: '',
    component: CustomLayoutComponent,
    children:[]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
