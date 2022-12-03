import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ListCarsService } from 'src/app/service/list-cars.service';
import { Usedcar } from 'src/app/usedcar';

@Component({
  selector: 'app-moreinfo-u',
  templateUrl: './moreinfo-u.component.html',
  styleUrls: ['./moreinfo-u.component.css']
})
export class MoreinfoUComponent implements OnInit {

  constructor(private route:Router,private activateroute:ActivatedRoute,private lsu:ListCarsService) { }
  lCarsU!:Usedcar[]
  idCarU!:number
  nomCarU!:string
  dateCarU!:Date
  prixCarU!:number
  cvCarU!:number
  doorsCarU!:number
  optionCarU!:boolean
  kmCarU!:number
  onBackU(){
    return this.route.navigate(['/ShopUsed'])
  }
  ngOnInit(): void {
    this.idCarU = this.activateroute.snapshot.params["id"]
    this.nomCarU = this.activateroute.snapshot.params['nom']
    this.dateCarU = this.activateroute.snapshot.params['date']
    this.prixCarU = this.activateroute.snapshot.params['prix']
    this.cvCarU = this.activateroute.snapshot.params['cv']
    this.doorsCarU = this.activateroute.snapshot.params['porte']
    this.kmCarU = this.activateroute.snapshot.params['km']
    this.optionCarU = this.activateroute.snapshot.params['toutoption']
    
    this.lCarsU = this.lsu.getCarsU()
  }

}
