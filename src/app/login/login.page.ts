import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 

  constructor(private router: Router) { }

  email:any;
  password:any;

  ngOnInit() {
  }




  login(email:any,password:any){
    console.log(email, password)

    if(email=="123"){

    this.router.navigate(['/menu']);
    }
  }



}
