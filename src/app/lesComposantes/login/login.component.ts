import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Loginc } from 'src/app/loginc';
import { LoginsService } from 'src/app/service/logins.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  listLogin!:Loginc[]
  constructor(private fb:FormBuilder,private ls:LoginsService) { }
  onAjout(){
    this.ls.addProduit(this.loginForm.value).subscribe(data => this.listLogin.push(data))
  }
  onClear(){
    this.loginForm.reset()
  }
  get mail(){
    return this.loginForm.get("mail")
  }
  get nom(){
    return this.loginForm.get("nom")
  }
  get mdp(){
    return this.loginForm.get("mdp")
  }
  isValidname(){
    return this.loginForm.controls['nom'].errors?.['pattern'] &&
    this.loginForm.controls['nom'].dirty;
    }
  ngOnInit(): void {
    this.loginForm = this.fb.nonNullable.group({
      mail:["",Validators.required],
      nom:["",[Validators.required,Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      mdp:["",[Validators.required,Validators.minLength(7)]],
      notRobot:["",Validators.required]
    })
    this.ls.getCars().subscribe(data => this.listLogin = data)
  }

}
