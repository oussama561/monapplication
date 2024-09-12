import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent  implements OnInit{
  form:FormGroup;
  fileToUpload: Array<File> = [];
  constructor(private myservice:AllservicesService , private formbuilder:FormBuilder , private router:Router )   {}
  ngOnInit(): void {
    this.form=this.formbuilder.group({
      username:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      codeClient:['',Validators.required]
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
    formdata.append("email",this.form.value.email)
    formdata.append("codeClient",this.form.value.codeClient)
    formdata.append("password",this.form.value.password)
    formdata.append("file",this.fileToUpload[0]) 
    formdata.append("role","client")

    console.log("username",this.form.value.username)
    console.log("email",this.form.value.email)
    console.log("codeClient",this.form.value.codeClient)
    console.log("password",this.form.value.password)
    this.myservice.CreateClient(formdata).subscribe(
      (res)=>{console.log("sucess to create")},
      (error)=>{console.log(error)}
    )
    this.router.navigateByUrl("/client")
  }


}
