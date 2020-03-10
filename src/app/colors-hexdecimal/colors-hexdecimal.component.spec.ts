import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsHexdecimalComponent } from './colors-hexdecimal.component';

describe('ColorsHexdecimalComponent', () => {
  let component: ColorsHexdecimalComponent;
  let fixture: ComponentFixture<ColorsHexdecimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorsHexdecimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsHexdecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
