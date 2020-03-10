import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decimal-sort',
  templateUrl: './decimal-sort.component.html',
  styleUrls: ['./decimal-sort.component.scss']
})
export class DecimalSortComponent implements OnInit {
  numberAtual: any = 0;
  maxNumber = 100000000000000000000000000;
  minNumber = 0;
  numberHex = '';
  increment = 1000000000;
  constructor() { }

  ngOnInit() {
    this.numberAtual = this.decimalToHex(this.numberAtual);
  }

  addNumber() {
    (this.numberAtual < this.maxNumber)
      ? this.numberAtual += this.increment
      : this.numberAtual = this.minNumber;

    this.decimalToHex(this.numberAtual);
  }

  rmvNumber() {
    (this.numberAtual > this.minNumber)
      ? this.numberAtual -= this.increment
      : this.numberAtual = this.maxNumber;

    this.decimalToHex(this.numberAtual);
  }

  decimalToHex(numb: number) {
    let hex = numb.toString(16);
    hex = '000000'.substr(0, 6 - hex.length) + hex;
    this.numberHex = '#' + hex.substr(0, 6);
    console.log(hex);
  }

  randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
  }

}
