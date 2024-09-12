import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  id=this.activatedrouted.snapshot.params['id']
  form:FormGroup;
  constructor(private myservice:AllservicesService, private formbuilder:FormBuilder , private router:Router ,private activatedrouted:ActivatedRoute )   {}
  oneCategory:any
  ngOnInit(): void {
    this.categorydetailsfunction()
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
    this.myservice. UpdateCategory(this.id,formdata).subscribe(
      (res)=>{console.log("sucess to update")},
      (error)=>{console.log(error)}
    )
    this.router.navigateByUrl("/categorie")
  }
  categorydetailsfunction(){
    this.myservice.DetailCategory(this.id).subscribe(
      (res)=>{
        console.log("details category",res);
      this.oneCategory=res;
      this.form.patchValue({  
      name:this.oneCategory.name,
      description:this.oneCategory.description
    
    })},

      (error)=>{console.log(error)}
    )
  }
}




