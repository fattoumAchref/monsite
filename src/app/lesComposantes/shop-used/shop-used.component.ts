import { Component, OnInit } from '@angular/core';
import { ListCarsService } from 'src/app/service/list-cars.service';
import { Usedcar } from 'src/app/usedcar';

@Component({
  selector: 'app-shop-used',
  templateUrl: './shop-used.component.html',
  styleUrls: ['./shop-used.component.css']
})
export class ShopUsedComponent implements OnInit {

  constructor(private lcs:ListCarsService) { }
  listCarsU!:Usedcar[]
  ngOnInit(): void {
    this.listCarsU = this.lcs.getCarsU()
  }

}
