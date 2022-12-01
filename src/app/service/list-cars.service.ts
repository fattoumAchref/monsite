import { Injectable } from '@angular/core';
import { Newcar } from '../newcar';

@Injectable({
  providedIn: 'root'
})
export class ListCarsService {

  private Cars:Newcar[]=[
    new Newcar(1,"passat","assets/images/volkswagen.jpg",new Date(28,10,2008),30000),
    new Newcar(2,"nissan","assets/images/nissan.jpg",new Date(12,8,2020),90000),
    new Newcar(3,"bmw","assets/images/bmw.jpg",new Date(20,10,2022),500000),
    new Newcar(3,"tesla","assets/images/tesla.jpg",new Date(20,10,2022),1000000),
    new Newcar(3,"amarok","assets/images/amarok.jpg",new Date(20,10,2022),700000),
    new Newcar(3,"audi","assets/images/audi.jpg",new Date(20,10,2022),300000),

  ];
  

  constructor() { }
  getCars(){
    return this.Cars
  }
}
