import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupoForm!: FormGroup;
  message: string = '';
  isProcess: boolean = false;
  className = 'd-none'

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.signupoForm = this.fb.group({
      'displayName': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
    })
  }

  ngOnInit(): void {

  }
  signup() {
    this.isProcess = true;
    const data = this.signupoForm.value;
    delete data['confirm']
    this.auth.signup(data).subscribe(res => {
      alert("User Register Succesfull")
      // this.signupoForm.reset();
      if (res.Succes) {
        this.isProcess = false;
        this.message = "Account Has Been Created!!";
        this.className = 'alert alert-success'
      } else {    
        this.isProcess = false;
        this.message = res.message;
        this.className = 'alert alert-danger';
      }
    }, err => {
      this.isProcess = false;
      this.message = "Server Error !!";
      this.className = 'alert alert-danger'
    })
  }
}
