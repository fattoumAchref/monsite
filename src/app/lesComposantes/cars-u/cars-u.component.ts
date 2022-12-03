import { Component, Input, OnInit } from '@angular/core';
import { Usedcar } from 'src/app/usedcar';

@Component({
  selector: 'app-cars-u',
  templateUrl: './cars-u.component.html',
  styleUrls: ['./cars-u.component.css']
})
export class CarsUComponent implements OnInit {

  constructor() { }
  @Input()lcarsU!:Usedcar
  ngOnInit(): void {
  }

}
