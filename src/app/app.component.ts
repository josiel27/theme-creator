import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  componentSelected: string;
  showComponent = '';

  activeComponentSelected(componentSelected) {
    console.log('saida ', componentSelected);
    const showComponent = {
      'decimal-sort': 'decimal-sort',
      'colors-hexdecimal': 'colors-hexdecimal'
    }[componentSelected.id];

    this.showComponent = showComponent;
  }
}

