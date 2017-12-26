import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadboysComponent } from './badboys.component';
import { WomensComponent } from './womens/womens.component';
import { MensComponent } from './mens/mens.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BadboysComponent, WomensComponent, MensComponent]
})
export class BadboysModule { }
