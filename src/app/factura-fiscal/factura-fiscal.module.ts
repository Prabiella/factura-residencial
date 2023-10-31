import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacturaFiscalPageRoutingModule } from './factura-fiscal-routing.module';

import { FacturaFiscalPage } from './factura-fiscal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacturaFiscalPageRoutingModule
  ],
  declarations: [FacturaFiscalPage]
})
export class FacturaFiscalPageModule {}
