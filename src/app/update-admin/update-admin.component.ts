import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit{
  id=this.activatedrouted.snapshot.params['id']
 
   constructor(private service:AllservicesService,
     private   activatedrouted:ActivatedRoute){}
 
   oneAdmin:any
   ngOnInit(): void {
 this.admindetailsfunction()
   }
 
   admindetailsfunction(){
     this.service.Detailadmin(this.id).subscribe(
       (res)=>{console.log("details admin",res);
       this.oneAdmin=res;
     },
     (error)=>{console.log(error)}
     )
   }

}
