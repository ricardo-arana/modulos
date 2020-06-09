import { Routes, RouterModule } from "@angular/router";
import { RegistroComponent } from './components/registro/registro.component';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';
import { NgModule } from '@angular/core';
import { DatosPersonalesComponent } from './datos-personales.component';


const routes: Routes = [
    {path: 'usuario', component: DatosPersonalesComponent,
children: [{path: 'registro', component: RegistroComponent},
{path: 'confirmacion', component: ConfirmacionComponent}
]}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DatosPersonalesRoutingModule { }