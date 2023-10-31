
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';


import { IonicModule } from '@ionic/angular';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
      ],
  declarations: [
    HeaderComponent
 
  ],
  exports:[
    HeaderComponent,
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule { }


