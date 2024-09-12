import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  constructor(private myservice:AllservicesService){}
  listCAT:any
  ngOnInit(): void {
    this.listcatfunction()
  }

  listcatfunction(){
    this.myservice.AllCategory().subscribe(
      (res)=>{console.log("liste category",res);
      this.listCAT=res
    },(error)=>{console.log(error)}
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
        this.myservice.DeleteCategory(id).subscribe(
          (res: any) => {
            console.log("ok");
            this.listcatfunction()
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
