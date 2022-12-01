import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from 'express';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 data:any;
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.getProfile();
  }
  getProfile(){
    this.auth.getProfile().subscribe(res=>{
     alert(JSON.stringify(res))
     if(res){
      this.data = res
     }else{
      this.logout();
     }
    }, err =>{

    })
  }
  logout(){
    localStorage.clear()
    // this.router.(['/login'])
  }
}
