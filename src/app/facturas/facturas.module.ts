import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacturasPageRoutingModule } from './facturas-routing.module';

import { FacturasPage } from './facturas.page';
import { ComponentsModule } from '../component.module';







@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacturasPageRoutingModule,ComponentsModule
  ],
  declarations: [FacturasPage]
})
export class FacturasPageModule {}
