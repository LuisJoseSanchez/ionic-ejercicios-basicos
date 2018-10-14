import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'Ejercicio01', loadChildren: './ejercicio01/ejercicio01.module#Ejercicio01PageModule' },
  { path: 'Ejercicio02', loadChildren: './ejercicio02/ejercicio02.module#Ejercicio02PageModule' },
  { path: 'Ejercicio03', loadChildren: './ejercicio03/ejercicio03.module#Ejercicio03PageModule' },
  { path: 'Ejercicio04', loadChildren: './ejercicio04/ejercicio04.module#Ejercicio04PageModule' },
  { path: 'Ejercicio05', loadChildren: './ejercicio05/ejercicio05.module#Ejercicio05PageModule' },
  { path: 'Ejercicio06', loadChildren: './ejercicio06/ejercicio06.module#Ejercicio06PageModule' },
  { path: 'Ejercicio07', loadChildren: './ejercicio07/ejercicio07.module#Ejercicio07PageModule' },
  { path: 'Ejercicio08', loadChildren: './ejercicio08/ejercicio08.module#Ejercicio08PageModule' },
  { path: 'Ejercicio09', loadChildren: './ejercicio09/ejercicio09.module#Ejercicio09PageModule' },
  { path: 'Ejercicio10', loadChildren: './ejercicio10/ejercicio10.module#Ejercicio10PageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
