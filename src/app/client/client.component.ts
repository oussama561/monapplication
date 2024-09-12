import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{
constructor(private myservice:AllservicesService){}
listCLNT:any
ngOnInit(): void {
  this.listClientFunction()
}

listClientFunction(){
  this.myservice.AllClient().subscribe(
    (res)=>{console.log("liste clients",res);
      this.listCLNT=res;
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
      this.myservice.DeleteClient(id).subscribe(
        (res: any) => {
          console.log("ok");
          this.listClientFunction()
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
