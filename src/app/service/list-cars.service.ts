import { Injectable } from '@angular/core';
import { Newcar } from '../newcar';

@Injectable({
  providedIn: 'root'
})
export class ListCarsService {

  private Cars:Newcar[]=[
    new Newcar(1,"passat","assets/images/volkswagen.jpg",new Date(2018,4,15),30000),
    new Newcar(2,"nissan","assets/images/nissan.jpg",new Date(2020,12,8),90000),
    new Newcar(3,"bmw","assets/images/bmw.jpg",new Date(2020,5,10),500000),
    new Newcar(3,"tesla","assets/images/tesla.jpg",new Date(2022,2,15),1000000),
    new Newcar(3,"amarok","assets/images/amarok.jpg",new Date(2021,8,28),700000),
    new Newcar(3,"audi","assets/images/audi.jpg",new Date(2019,9,10),300000),

  ];
  

  constructor() { }
  getCars(){
    return this.Cars
  }
}
