import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        FormsModule,
        ToastrModule.forRoot(),
        HttpClientTestingModule,
        BrowserModule,
        ToastrModule
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
