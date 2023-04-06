import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';
import { Router,  } from '@angular/router';



describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
imports:[
        ReactiveFormsModule,
        FormsModule,
        ToastrModule.forRoot(),
        HttpClientTestingModule,
        BrowserModule,
        ToastrModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
 

    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Debe retornar formulario valido de registrar usuarios',()=>{
    const fixture = TestBed.createComponent(AdminComponent);
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
