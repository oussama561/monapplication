import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.css']
})
export class DetailCategoryComponent implements OnInit {
  id=this.activatedrouted.snapshot.params['id']
  constructor(private service:AllservicesService,
    private activatedrouted:ActivatedRoute){}
  oneCategory:any
  ngOnInit(): void {
    this.categorydetailsfunction()
  }

  categorydetailsfunction(){
    this.service.DetailCategory(this.id).subscribe(
      (res)=>{console.log("details category",res);
      this.oneCategory=res},
      (error)=>{console.log(error)}
    )
  }


}
