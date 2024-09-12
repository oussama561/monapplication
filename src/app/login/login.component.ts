import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllservicesService } from '../services/allservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form:FormGroup;
  fileToUpload: Array<File> = [];
  resultatlogin:any;
  constructor(private myservice:AllservicesService , private formbuilder:FormBuilder , private router:Router )   {}
  ngOnInit(): void {
    this.form=this.formbuilder.group({
      username:['',Validators.required],
      
      password:['',Validators.required],
     
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
   
    formdata.append("password",this.form.value.password)
  
    console.log("username",this.form.value.username)

    console.log("password",this.form.value.password)
    let data = {"username":this.form.value.username,"password":this.form.value.password }
    this.myservice.Login(data).subscribe(
      (res)=>{console.log("sucess to login",res);
      this.resultatlogin=res;
localStorage.setItem("token",this.resultatlogin.token)//sauvegarde
localStorage.setItem("idconnect",this.resultatlogin.id)
localStorage.setItem("role",this.resultatlogin.role)
if(this.resultatlogin.role=="admin"){
  this.router.navigateByUrl("/admin")
}
else{
  this.router.navigateByUrl("/client")
}





      },
      (error)=>{console.log(error)}
    )
    // this.router.navigateByUrl("/admin")
  }
}
