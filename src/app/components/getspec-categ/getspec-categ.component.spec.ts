import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetspecCategComponent } from './getspec-categ.component';

describe('GetspecCategComponent', () => {
  let component: GetspecCategComponent;
  let fixture: ComponentFixture<GetspecCategComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetspecCategComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetspecCategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
