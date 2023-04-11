import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ]
,
imports:[
  ReactiveFormsModule,
  FormsModule,
  ToastrModule.forRoot(),
  HttpClientTestingModule,
  BrowserModule,
  ToastrModule,
  RouterTestingModule
]    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Debe retornar formulario valido de registrar usuarios',()=>{
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
  
    const form = app.signup;
    const email = form.controls.email;
    const pasword = form.controls.password;
    const rol = form.controls.rol;
    const acces = form.controls.adminaccess;

    email.setValue('admin@gmail.com');
    pasword.setValue('123456')
    rol.setValue('mesero')
    acces.setValue(false)

    expect(form.valid).toBeTrue();
  })
  
});
