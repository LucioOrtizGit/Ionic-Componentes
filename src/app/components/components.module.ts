import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { ComponenteModalComponent } from './componente-modal/componente-modal.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ComponenteModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    HeaderComponent,
    ComponenteModalComponent,
  ]
})
export class ComponentsModule { }
