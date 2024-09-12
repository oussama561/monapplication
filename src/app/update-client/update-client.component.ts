import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  form:FormGroup;
  fileToUpload: Array<File> = [];
  id=this.activatedrouted.snapshot.params['id']
  constructor(private myservice:AllservicesService, private formbuilder:FormBuilder,
    private activatedrouted:ActivatedRoute, private router:Router){}
  oneClient:any
  ngOnInit(): void {
    this.clientdetailsfunction()
  }

  clientdetailsfunction(){
    this.myservice.DetailClient(this.id).subscribe(
      (res)=>{console.log("details client",res);
      this.oneClient=res},
      (error)=>{console.log(error)}
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
