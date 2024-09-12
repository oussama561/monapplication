import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  constructor(private myservice:AllservicesService , private router:Router ){}
  id:any
  ngOnInit(): void{
    this.id=localStorage.getItem("idconnect")
  };
   
  gotoprofile(){
    this.router.navigateByUrl("/profile/"+this.id)
   
   
      }
   
  


  logout()
  {
    localStorage.removeItem("idconnect");
    //localStorage.removeItem("token");
    console.log("token",localStorage.getItem("token"))
    this.myservice.logout().subscribe(
      (res)=>{alert("logout");
    },
      (error)=>{console.log("error",error)}
    );

    this.router.navigateByUrl("/")
  }

}
