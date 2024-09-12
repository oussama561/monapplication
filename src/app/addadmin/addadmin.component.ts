import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit{
  form:FormGroup;
  fileToUpload: Array<File> = [];
  constructor(private myservice:AllservicesService , private formbuilder:FormBuilder , private router:Router )   {}
  ngOnInit(): void {
    this.form=this.formbuilder.group({
      username:['',Validators.required],
      mail:['',Validators.required],
      password:['',Validators.required],
      codeAdmin:['',Validators.required]
    })
  }
  handleFileInput(files: any)
  {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload);
  }
  create(){
    alert("ok");
    let formdata=new FormData();
    formdata.append("username",this.form.value.username)
    formdata.append("mail",this.form.value.mail)
    formdata.append("codeadmin",this.form.value.codeAdmin)
    formdata.append("password",this.form.value.password)
    formdata.append("file",this.fileToUpload[0])
    formdata.append("role","admin")
    console.log("username",this.form.value.username)
    console.log("mail",this.form.value.mail)
    console.log("codeAdmin",this.form.value.codeAdmin)
    console.log("password",this.form.value.password)
    this.myservice.CreateAdmin(formdata).subscribe(
      (res)=>{console.log("sucess to create")},
      (error)=>{console.log(error)}
    )
    this.router.navigateByUrl("/admin")
  }
}