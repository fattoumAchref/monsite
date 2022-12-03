import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsUComponent } from './cars-u.component';

describe('CarsUComponent', () => {
  let component: CarsUComponent;
  let fixture: ComponentFixture<CarsUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
