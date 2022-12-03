import { Injectable } from '@angular/core';
import { Newcar } from '../newcar';
import { Usedcar } from '../usedcar';

@Injectable({
  providedIn: 'root'
})
export class ListCarsService {
 
  private Cars:Newcar[]=[
    new Newcar(1,"passat","assets/images/volkswagen.jpg",new Date(2018,4,15),30000,7,4,true),
    new Newcar(2,"nissan","assets/images/nissan.jpg",new Date(2020,12,8),90000,10,4,true),
    new Newcar(3,"bmw","assets/images/bmw.jpg",new Date(2020,5,10),500000,16,4,true),
    new Newcar(4,"tesla","assets/images/tesla.jpg",new Date(2022,2,15),1000000,12,2,true),
    new Newcar(5,"amarok","assets/images/amarok.jpg",new Date(2021,8,28),700000,16,4,true),
    new Newcar(6,"audi","assets/images/audi.jpg",new Date(2019,9,10),300000,8,2,true),

  ];
  
  private CarsU:Usedcar[]=[
    new Usedcar(1,"mercedes","assets/images/mercedes.jpg",new Date(2020,4,15),700000,7,4,270000,true),
    new Usedcar(2,"ram","assets/images/ram.jpg",new Date(2021,12,8),900000,10,4,800000,true),
    new Usedcar(3,"range","assets/images/range.jpg",new Date(2017,5,10),120000,16,4,100000,true),
    new Usedcar(4,"ford","assets/images/ford.jpg",new Date(2016,2,15),90000,12,2,60000,true),
    new Usedcar(5,"gmc","assets/images/gmc.jpg",new Date(2015,8,28),550000,16,4,103000,true),
    new Usedcar(6,"honda","assets/images/honda.jpg",new Date(2019,9,10),105000,8,2,20000,true),

  ]

  constructor() { }
  getCars(){
    return this.Cars
  }
  getCarsU(){
    return this.CarsU
  }
}
