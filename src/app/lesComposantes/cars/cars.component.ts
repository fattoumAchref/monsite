import { Component, Input, OnInit } from '@angular/core';
import { Newcar } from 'src/app/newcar';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor() { }
  @Input()lcars!:Newcar
  ngOnInit(): void {
  }

}
