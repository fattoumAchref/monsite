import { Component, Input, OnInit } from '@angular/core';
import { Newcar } from 'src/app/newcar';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  show:boolean = false
  constructor() { }
  @Input()lcars!:Newcar
  afficher(){
    if(this.show == false){
      this.show = true
    }else {
      this.show = false
    }
  }
  ngOnInit(): void {
  }

}
