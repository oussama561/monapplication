import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit{

  constructor(private myservice:AllservicesService){}
  listPRD:any
  listCAT:any
  c:number=1
  ngOnInit(): void {
    this.listprodfunction()
    this.listcatfunction()
  }

  listprodfunction(){
    this.myservice.AllProduit().subscribe(
      (res)=>{console.log("liste produits",res);
        this.listPRD=res
      },(error)=>{console.log(error)}
    )
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
        this.myservice.DeleteProduit(id).subscribe(
          (res: any) => {
            console.log("ok");
            this.listprodfunction()
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
