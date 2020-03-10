import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-colors-hexdecimal',
  templateUrl: './colors-hexdecimal.component.html',
  styleUrls: ['./colors-hexdecimal.component.scss']
})
export class ColorsHexdecimalComponent {
  @Output()
  colorSelectedEmitter = new EventEmitter();

  colorSelected = 'nenhuma ainda';

  constructor() { }

  selectColor(event) {
    this.colorSelected = event.target.textContent;
    this.colorSelectedEmitter.emit(this.colorSelected);
  }
}
