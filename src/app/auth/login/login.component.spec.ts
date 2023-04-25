import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
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
        RouterModule
        
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

  it('Debe retornar formulario invalido de logearse',()=>{
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
  
    const form = app.login;
    const email = app.email;
    email.setValue('admin@gmail.com');
    expect(form.invalid).toBeTrue();
  })

  it('Debe retornar formulario valido de logearse',()=>{
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
  
    const form = app.login;
    const email = app.email;
    const password = app.password
    email.setValue('admin@gmail.com');
    password.setValue('123456');
    expect(form.invalid).toBeFalse();
  })
  
  it('Debe retornar que existe un error en el email',()=>{
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
  
    // const form = app.login;
    const email = app.email;
    const password = app.password
    email.setValue('admin');
    password.setValue('123456');
    expect(app.email.errors).toEqual({email: true});
  })
});
