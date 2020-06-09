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
    this.forma = new FormGroup({
      nombre: new FormControl(),
      correo: new FormControl(),
      password: new FormControl()
    });
   }

  ngOnInit(): void {
  }

  guardar() {
    console.log(this.forma.value);
    this.datos.guardarDatosPersonales(
      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.password
    );
    this.router.navigate(['/confirmacion']);
  }

}
