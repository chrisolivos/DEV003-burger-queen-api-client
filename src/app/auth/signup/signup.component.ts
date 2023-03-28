import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
    // signup: FormGroup|any;
  constructor(){}
  
  ngOnInit(): void {
  
  
  }
  signup = new FormGroup({
    'fname': new FormControl(),
    'lname': new FormControl(),
    'email': new FormControl(),
    'password': new FormControl()
    
  });
  signupdata(signup:FormGroup){
    console.log(signup.value)
  }
  
  }