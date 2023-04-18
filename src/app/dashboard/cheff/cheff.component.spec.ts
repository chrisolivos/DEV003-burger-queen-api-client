import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheffComponent } from './cheff.component';

describe('CheffComponent', () => {
  let component: CheffComponent;
  let fixture: ComponentFixture<CheffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
