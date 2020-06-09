import { Injectable } from '@angular/core';

@Injectable()
export class DatosPersonalesService {
  nombre: string;
  correo: string;
  password: string;
  constructor() { }


  guardarDatosPersonales(nombre: string, correo: string, password: string) {
    this.nombre = nombre;
    this.correo = correo;
    this.password = password;

  }

  obtenerDatos() {
    return {
      nombre: this.nombre,
      correo: this.correo,
      password: this.password
    }
  }
}
