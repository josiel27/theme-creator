import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select-component',
  templateUrl: './select-component.component.html',
  styleUrls: ['./select-component.component.scss']
})
export class SelectComponentComponent {
  @Output()
  componentSelected = new EventEmitter();

  components = [
    { id: 'decimal-sort', name: 'Decimal Sort' },
    { id: 'colors-hexdecimal', name: 'Colors Hexdecimal' },
    { id: 'none', name: 'Clear' }
  ];

  constructor() { }

  selectComponent(name: string) {
    this.components.forEach((nameEach) => {
      if (nameEach.name === name) {
        this.componentSelected.emit(nameEach);
      }
    });
  }



}
