import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio02',
  templateUrl: './ejercicio02.page.html',
  styleUrls: ['./ejercicio02.page.scss'],
})
export class Ejercicio02Page implements OnInit {

  name = '';
  buttonMessage = 'Muestra nombre';

  constructor() { }

  ngOnInit() {
  }

  toggleName() {
    if (this.name === '') {
      this.name = 'Luis José Sánchez';
      this.buttonMessage = 'Limpia pantalla';
    } else {
      this.name = '';
      this.buttonMessage = 'Muestra nombre';
    }
  }
}
