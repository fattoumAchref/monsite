import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreinfoUComponent } from './moreinfo-u.component';

describe('MoreinfoUComponent', () => {
  let component: MoreinfoUComponent;
  let fixture: ComponentFixture<MoreinfoUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreinfoUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreinfoUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
