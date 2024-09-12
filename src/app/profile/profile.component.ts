import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id:any
  role:String
  
    constructor(private service:AllservicesService, private activatedrouted:ActivatedRoute){}
  oneAdmin:any
  code:any
  oneclient:any
    ngOnInit(): void {
   //appel fonction exter
  
   this.role=localStorage.getItem("role")
   this.detail();
   this.detailClient()  }
  //fonct exter
  
  detail(){
  
  
    
      this.service.Detailadmin(localStorage.getItem("idconnect")).subscribe(
        (res)=>{console.log("profile admin",res);this.oneAdmin=res
      
            
    
        },
    
        (eurror)=>{console.log("eurror")}
      )
    
  
    }
  
  
  
  
  
  
  
  
  
  
  
  detailClient(){
  
    
      this.service.DetailClient(localStorage.getItem("idconnect")).subscribe(
        (res)=>{console.log("profile client",res);this.oneclient=res
      
          
    
        },
    
        (eurror)=>{console.log("eurror")}
      )
    
  
    
  }
  }