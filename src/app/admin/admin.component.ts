import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 //ng g c componemnt ===>app.module

//declation injection de dependance
constructor(private myservice:AllservicesService){}
listADM:any


ngOnInit(): void {
  this.listadminfunction()
}

listadminfunction(){
this.myservice.AllAdmin().subscribe(
  (res)=>{console.log("LISTE ADMIN",res);
  this.listADM=res;

  },

  (error)=>{console.log(error)}
)
}

deleteone(id: String) {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085D6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.myservice.DeleteAdmin(id).subscribe(
        (res: any) => {
          console.log("ok");
          this.listadminfunction()
        },
        (error: any) => { console.log("error is", error) }
      )
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
}














}
