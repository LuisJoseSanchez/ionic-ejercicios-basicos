import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio06',
  templateUrl: './ejercicio06.page.html',
  styleUrls: ['./ejercicio06.page.scss'],
})
export class Ejercicio06Page implements OnInit {

  position = 1;

  constructor() { }

  ngOnInit() {
  }

  incPosition() {
    this.position++;
  }
}
