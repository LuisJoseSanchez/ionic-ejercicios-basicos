import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio03',
  templateUrl: './ejercicio03.page.html',
  styleUrls: ['./ejercicio03.page.scss'],
})
export class Ejercicio03Page implements OnInit {

  n = 0;

  constructor() { }

  ngOnInit() {
  }

  inc() {
    this.n++;
  }

  dec() {
    this.n--;
  }

  reset() {
    this.n = 0;
  }
}
