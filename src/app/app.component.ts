import { Component } from '@angular/core';
import { PruebaService } from './prueba.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modulos';
  constructor(private pruebaService: PruebaService) {
    this.pruebaService.imprimirHola();
  }
}
