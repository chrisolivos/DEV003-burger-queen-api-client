import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup}from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup|any;
  constructor(){}

  ngOnInit(): void {
  this.login = new FormGroup({
    'fname': new FormControl(),
    'pasword': new FormControl()
  })

}
  logindata(login:FormGroup){
console.log(this.login.value)
 
}
}
