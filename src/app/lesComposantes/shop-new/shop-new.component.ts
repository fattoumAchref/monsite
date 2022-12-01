import { Component, OnInit } from '@angular/core';
import { Newcar } from 'src/app/newcar';
import { ListCarsService } from 'src/app/service/list-cars.service';

@Component({
  selector: 'app-shop-new',
  templateUrl: './shop-new.component.html',
  styleUrls: ['./shop-new.component.css']
})
export class ShopNewComponent implements OnInit {

  listcars!:Newcar[]

  constructor(private cs:ListCarsService) { }

  ngOnInit(): void {
    this.listcars = this.cs.getCars()
  }

}
