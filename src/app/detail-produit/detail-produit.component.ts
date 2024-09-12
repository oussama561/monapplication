import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
  id=this.activatedrouted.snapshot.params['id']
  constructor(private service:AllservicesService,
    private activatedrouted:ActivatedRoute){}
  oneProduit:any
  ngOnInit(): void {
    this.produitdetailsfunction()
  }

  produitdetailsfunction(){
    this.service.DetailProduit(this.id).subscribe(
        (res)=>{console.log("details produit",res);
        this.oneProduit=res},
        (error)=>{console.log(error)}
    )
  }
}
