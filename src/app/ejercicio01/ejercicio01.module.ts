import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Ejercicio01Page } from './ejercicio01.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio01Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Ejercicio01Page]
})
export class Ejercicio01PageModule {}
