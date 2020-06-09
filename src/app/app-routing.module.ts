import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './pages/datos-personales/components/registro/registro.component';
import { ConfirmacionComponent } from './pages/datos-personales/components/confirmacion/confirmacion.component';


const routes: Routes = [
  {path: 'registro', component: RegistroComponent},
  {path: 'confirmacion', component: ConfirmacionComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'registro'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
