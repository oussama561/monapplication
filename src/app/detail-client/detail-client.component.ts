import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {
  id=this.activatedrouted.snapshot.params['id']
  constructor(private service:AllservicesService,
    private activatedrouted:ActivatedRoute){}
  oneClient:any
  ngOnInit(): void {
    this.clientdetailsfunction()
  }

  clientdetailsfunction(){
    this.service.DetailClient(this.id).subscribe(
      (res)=>{console.log("details client",res);
      this.oneClient=res},
      (error)=>{console.log(error)}
    )
  }

}
