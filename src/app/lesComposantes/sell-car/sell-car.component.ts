import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginsService } from 'src/app/service/logins.service';
import { Usedcar } from 'src/app/usedcar';

@Component({
  selector: 'app-sell-car',
  templateUrl: './sell-car.component.html',
  styleUrls: ['./sell-car.component.css']
})
export class SellCarComponent implements OnInit {

  sellcarForm!:FormGroup
  listUsed!:Usedcar[]
  constructor(private fb:FormBuilder,private s:LoginsService,private route:Router) { }
  onAjoutU(){
    this.s.addCarsU(this.sellcarForm.value).subscribe(data => this.listUsed.push(data))
  }
  toShopUsed(){
    return this.route.navigate(['/ShopUsed'])
  }
  onClear(){
    return this.sellcarForm.reset()
  }
  get nom(){
    return this.sellcarForm.get("nom")
  }
  get cv(){
    return this.sellcarForm.get("cv")
  }
  get km(){
    return this.sellcarForm.get("km")
  }
  get prix(){
    return this.sellcarForm.get("prix")
  }
  ngOnInit(): void {
    this.sellcarForm = this.fb.nonNullable.group({
      nom:["",Validators.required],
      cv:["",Validators.required],
      km:["",Validators.required],
      prix:["",Validators.required],
      file:["",Validators.required],
      notRobot:["",Validators.required]
    })
    
  }

}
