import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Ejercicio10Page } from './ejercicio10.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio10Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Ejercicio10Page]
})
export class Ejercicio10PageModule {}
