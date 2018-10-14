import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio07',
  templateUrl: './ejercicio07.page.html',
  styleUrls: ['./ejercicio07.page.scss'],
})
export class Ejercicio07Page implements OnInit {

  pts = 0;
  eur = 0;

  constructor() { }

  ngOnInit() {
  }

  updatePts() {
    this.pts = this.eur * 166.386;
  }

  updateEuros() {
    this.eur = this.pts / 166.386;
  }
}
