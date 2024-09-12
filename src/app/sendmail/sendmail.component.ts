import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent implements OnInit {
  email = {
    from: '',
    to: '',
    subject: '',
    content: ''
  };
  fileToUpload: Array<File> = [];
  constructor(private myservice: AllservicesService) { }

  ngOnInit(): void {
   
    this.email.from = 'default@example.com';
  }
  handleFileInput(files: any)
  {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload);
  }
  onSubmit() {

    let formdata= new FormData()
    formdata.append("from",this.email.from)
    formdata.append("to",this.email.to)
    formdata.append("subject",this.email.subject)
    formdata.append("content",this.email.content)
    formdata.append("file",this.fileToUpload[0])

    if (this.validateEmail(this.email.from) && this.validateEmail(this.email.to)) {
  
     

      this.myservice.Sendmail(formdata).subscribe(
        (response) => {
          console.log('Email envoyé avec succès', response);
        },
        (error) => {
          console.error('Erreur lors de l\'envoi de l\'email', error);
        }
      );
    } else {
      console.error('Adresse e-mail invalide');
    }
  }

  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
}


