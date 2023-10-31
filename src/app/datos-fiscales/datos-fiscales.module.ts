import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosFiscalesPageRoutingModule } from './datos-fiscales-routing.module';

import { DatosFiscalesPage } from './datos-fiscales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosFiscalesPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [DatosFiscalesPage]
})
export class DatosFiscalesPageModule {}
