import { Routes, RouterModule } from "@angular/router";
import { RegistroComponent } from './components/registro/registro.component';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';
import { NgModule } from '@angular/core';
import { DatosPersonalesComponent } from './datos-personales.component';


export const dpRoutes: Routes = [
   {path: 'registro', component: RegistroComponent},
            {path: 'confirmacion', component: ConfirmacionComponent}
];

// @NgModule({
//     imports: [RouterModule.forRoot(dpRoutes)],
//     exports: [RouterModule]
//   })
//   export class DatosPersonalesRoutingModule { }