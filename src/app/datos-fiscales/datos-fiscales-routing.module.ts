import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosFiscalesPage } from './datos-fiscales.page';

const routes: Routes = [
  {
    path: '',
    component: DatosFiscalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosFiscalesPageRoutingModule {}
