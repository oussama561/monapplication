
import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddcategorieComponent implements OnInit{
  form:FormGroup;
  constructor(private myservice:AllservicesService, private formbuilder:FormBuilder , private router:Router )   {}
  ngOnInit(): void {
    this.form=this.formbuilder.group({
      name:['',Validators.required],
      description:['',Validators.required]
    })
  }
  create(){
    alert("ok");
    let formdata=new FormData();
    formdata.append("name",this.form.value.name)
    formdata.append("description",this.form.value.description)
    console.log("name",this.form.value.name)
    console.log("description",this.form.value.description)
    this.myservice. CreateCategory(formdata).subscribe(
      (res)=>{console.log("sucess to create")},
      (error)=>{console.log(error)}
    )
    this.router.navigateByUrl("/categorie")
  }
}