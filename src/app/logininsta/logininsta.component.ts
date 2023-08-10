import { Component } from '@angular/core';
import { Validators,FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-logininsta',
  templateUrl: './logininsta.component.html',
  styleUrls: ['./logininsta.component.css']
})
export class LogininstaComponent {

  loginform=new FormGroup({

    "email":new FormControl(null,[Validators.required,Validators.email]),
    "password":new FormControl(null,[Validators.required,Validators.maxLength(32),Validators.minLength(8)])

  })

  submit(){
    console.log(this.loginform.value);
    alert("Successfully Logged in!");
    this.loginform.reset();
  }

  // get Email(){
  //   return this.loginform.get('email');
  // }

  // get Password(){
  //   return this.loginform.get('password');
  // }
}
