import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-selected',
  templateUrl: './color-selected.component.html',
  styleUrls: ['./color-selected.component.scss']
})
export class ColorSelectedComponent implements OnInit {
  @Input()
  colorSelected: string;

  constructor() { }

  ngOnInit() {
  }

}
