import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdadComponent } from '../edad/edad.component';



@NgModule({
  declarations: [
    EdadComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[EdadComponent]
})
export class PruebaModule { }
