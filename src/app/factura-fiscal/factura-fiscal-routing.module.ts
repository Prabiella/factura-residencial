import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacturaFiscalPage } from './factura-fiscal.page';

const routes: Routes = [
  {
    path: '',
    component: FacturaFiscalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacturaFiscalPageRoutingModule {}
