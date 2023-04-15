import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategSliderComponent } from './categ-slider.component';

describe('CategSliderComponent', () => {
  let component: CategSliderComponent;
  let fixture: ComponentFixture<CategSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
