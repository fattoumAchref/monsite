import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Newcar } from 'src/app/newcar';
import { ListCarsService } from 'src/app/service/list-cars.service';

@Component({
  selector: 'app-moreinfo',
  templateUrl: './moreinfo.component.html',
  styleUrls: ['./moreinfo.component.css']
})
export class MoreinfoComponent implements OnInit {
  lCars!:Newcar[]
  idCar!:number
  nomCar!:string
  dateCar!:Date
  prixCar!:number
  cvCar!:number
  doorsCar!:number
  optionCar!:boolean
  onBack(){
    this.router.navigate(['/ShopNew'])
  }
  constructor(private router:Router,private activateroute:ActivatedRoute,private ls:ListCarsService) { }

  ngOnInit(): void {
    this.idCar = this.activateroute.snapshot.params["id"]
    this.nomCar = this.activateroute.snapshot.params['nom']
    this.dateCar = this.activateroute.snapshot.params['date']
    this.prixCar = this.activateroute.snapshot.params['prix']
    this.cvCar = this.activateroute.snapshot.params['cv']
    this.doorsCar = this.activateroute.snapshot.params['porte']
    this.optionCar = this.activateroute.snapshot.params['toutoption']
    this.lCars = this.ls.getCars()
  }

}
