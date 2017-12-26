import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { WomensComponent } from './womens/womens.component';
import { MensComponent } from './mens/mens.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ HeroComponent, WomensComponent, MensComponent ],
  exports: [ HeroComponent ]
})
export class HeroModule { }
