import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimalSortComponent } from './decimal-sort.component';

describe('DecimalSortComponent', () => {
  let component: DecimalSortComponent;
  let fixture: ComponentFixture<DecimalSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecimalSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecimalSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
