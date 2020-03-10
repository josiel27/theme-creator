import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-select-component',
  templateUrl: './select-component.component.html',
  styleUrls: ['./select-component.component.scss']
})
export class SelectComponentComponent {
  @Output()
  componentSelected = 'um';

  components = [
    { name: 'decimal-sort' },
    { name: 'color-hexdecimal' }
  ];

  constructor() { }

  selectComponent(name: string) {
    this.components.forEach((nameEach) => {
      if (nameEach.name === name) {
        this.componentSelected = nameEach.name;
      }
    });
  }



}
