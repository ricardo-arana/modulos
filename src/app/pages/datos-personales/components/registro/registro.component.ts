import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  forma: FormGroup;
  constructor() {
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
  }

}
