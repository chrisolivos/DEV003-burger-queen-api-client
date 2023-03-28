import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
//import { FormsModule, ReactiveFormsModule} from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';
//import { Router } from '@angular/router';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // imports:[
      //   FormsModule, ReactiveFormsModule,
      //   HttpClientModule
      // ],
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

it('Debe retornar formulario invalido',()=>{
  const fixture = TestBed.createComponent(LoginComponent);
  const app = fixture.componentInstance;
  fixture.detectChanges();

  const form = app.login;
  const email = app.email;
  email.setValue('admin@gmail.com');
  expect(form.invalid).toBeTrue();
})

// it('Debe retornar formulario valido',()=>{
//   const fixture = TestBed.createComponent(LoginComponent);
//   const app = fixture.componentInstance;
//   fixture.detectChanges();

//   const form = app.login;
//   const email = app.email;
//  const password =app.password;
//   email.setValue('amin@gmail.com');
//  password.setValue('123456');
//   expect(form.invalid).toBeFalse();
// })

});
