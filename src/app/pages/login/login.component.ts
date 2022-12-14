import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from 'express';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup
  constructor(private fb:FormBuilder, private auth:AuthService, private router:Router) {
    this.loginForm= this.fb.group({
      'email':['',Validators.required],
      'password':['',Validators.required],
    })
   }

  ngOnInit(): void {
  }
  login(){
    // alert("Login Success")
    const data = this.loginForm.value;
    this.auth.signin(data).subscribe((res)=>{
      if(res.success){
        localStorage.setItem('token', res.token)
        // this.router.navigate(['/profile']);
      }else{
      alert(res. message)
    }
    },err=>{
      alert("Login faild !!")
    })
  }
}