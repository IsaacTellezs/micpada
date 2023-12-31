import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  base: number;
  altura: number;
  area: number;

  calcularArea() {
   
    this.area = (this.base * this.altura) / 2;
    setTimeout(() => {
      document.getElementById('result-card').classList.add('show-result');
    }, 100);
  }

  constructor() { }

  ngOnInit() {
  }

}
