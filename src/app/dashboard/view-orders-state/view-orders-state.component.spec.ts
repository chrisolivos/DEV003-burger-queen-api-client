import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrdersStateComponent } from './view-orders-state.component';

describe('ViewOrdersStateComponent', () => {
  let component: ViewOrdersStateComponent;
  let fixture: ComponentFixture<ViewOrdersStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrdersStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOrdersStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
