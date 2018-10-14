import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio05',
  templateUrl: './ejercicio05.page.html',
  styleUrls: ['./ejercicio05.page.scss'],
})
export class Ejercicio05Page implements OnInit {

  a = 0;
  b = 0;
  randomNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  generateNumber() {
    this.randomNumber = +this.a + Math.floor(Math.random() * (this.b - this.a + 1));
  }
}
