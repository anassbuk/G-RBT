import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Take Information from user :
  username : string = '';
  password : string = '';
  role     : string ='';

  roles    : string[];

  constructor(){
    this.roles = [
      'admin',
      'IT',
      'RH'
    ]

  }

  
  ngOnInit(): void{

  }

  login(){
    console.log(this.username+" "+this.password+" "+this.role)
  }

}
