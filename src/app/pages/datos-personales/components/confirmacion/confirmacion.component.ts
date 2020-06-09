import { Component, OnInit } from '@angular/core';
import { DatosPersonalesService } from '../../datos-personales.service';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.scss']
})
export class ConfirmacionComponent implements OnInit {
  nombre: string;
  correo: string;
  constructor(private datos: DatosPersonalesService) {
    const datosPersonale = this.datos.obtenerDatos();
    this.nombre = datosPersonale.nombre;
    this.correo = datosPersonale.correo;

   }

  ngOnInit(): void {
  }

}
