import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit{
  form:FormGroup;
  fileToUpload: Array<File> = [];
  constructor(private myservice:AllservicesService , private formbuilder:FormBuilder , private router:Router )   {}
  listCAT:any
  ngOnInit(): void {
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
    this.myservice.CreateProduit(formdata,this.form.value.idcat).subscribe(
      (res)=>{console.log("sucess to create")},
      (error)=>{console.log(error)}
    )
    this.router.navigateByUrl("/produit")
  }


}



