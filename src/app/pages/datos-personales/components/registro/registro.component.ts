import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { DatosPersonalesService } from '../../datos-personales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  forma: FormGroup;
  constructor(private datos: DatosPersonalesService,
              private router: Router) {

    const {nombre, correo, password} = this.datos.obtenerDatos();

    this.forma = new FormGroup({
      nombre: new FormControl(nombre),
      correo: new FormControl(correo),
      password: new FormControl(password)
    });
   }

  ngOnInit(): void {
  }

  guardar() {
    //console.log(this.forma.value);
    const {nombre, correo, password} = this.forma.value;
    this.datos.guardarDatosPersonales(
      nombre,
      correo,
      password
    );
    this.router.navigate(['/usuario', 'confirmacion']);
  }

}
