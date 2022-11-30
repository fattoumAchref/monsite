import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopUsedComponent } from './shop-used.component';

describe('ShopUsedComponent', () => {
  let component: ShopUsedComponent;
  let fixture: ComponentFixture<ShopUsedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopUsedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
