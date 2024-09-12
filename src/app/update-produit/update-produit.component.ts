import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit{
  id=this.activatedrouted.snapshot.params['id']
  form:FormGroup;
  fileToUpload: Array<File> = [];
  constructor(private myservice:AllservicesService , private formbuilder:FormBuilder , private router:Router ,   private activatedrouted:ActivatedRoute)   {}
  oneProduit:any 
  listCAT:any
  ngOnInit(): void {
    this.produitdetailsfunction()
    this.listcatfunction()
    this.form=this.formbuilder.group({
      name:['',Validators.required],
      description:['',Validators.required],
      quantite:['',Validators.required],
      idcat:['',Validators.required],
      
    })
  }
  listcatfunction(){
    this.myservice.AllCategory().subscribe(
      (res)=>{console.log("liste category",res);
      this.listCAT=res
    },(error)=>{console.log(error)}
    )
  }
  handleFileInput(files: any)
  {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload);
  }
  create(){
    alert("ok");
    let formdata=new FormData();
    formdata.append("name",this.form.value.name)
    formdata.append("description",this.form.value.description)
    formdata.append("quantite",this.form.value.quantite)
    formdata.append("idcat",this.form.value.idcat)
    formdata.append("file",this.fileToUpload[0]) 
    

    console.log("name",this.form.value.name)
    console.log("description",this.form.value.description)
    console.log("quantite",this.form.value.quantite)
    console.log("idcat",this.form.value.idcat)
    this.myservice.UpdateProduit(this.id,this.form.value.idcat,formdata).subscribe(
      (res)=>{console.log("sucess to create")},
      (error)=>{console.log(error)}
    )
    this.router.navigateByUrl("/produit")
  }

  produitdetailsfunction(){
    this.myservice.DetailProduit(this.id).subscribe(
        (res)=>{console.log("details produit",res);
        this.oneProduit=res;
        this.form.patchValue({
          name:this.oneProduit.name, 
          description:this.oneProduit.description,
          quantite:this.oneProduit.quantite,
          idcat:this.oneProduit.idcat,
        })
      },
        (error)=>{console.log(error)}
    )
  }

}





