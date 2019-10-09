import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  active: number = 0;
  constructor(public router: Router) { }
  
  ngOnInit() {
  }

  navigateTablon() {
    this.router.navigate(["admin/"]);
  }

  navigateEvents() {
    this.router.navigate(["admin/eventos"]);
  }

  navigateCupons() {
    this.router.navigate(["admin/cupones"]);
  }

  navigateUsers() {
    this.router.navigate(["admin/usuarios"]);
  }


  swicth0() {
    this.active = 0;
  }
  swicth1() {
    this.active = 1;
  }
  swicth2() {
    this.active = 2;
  }
  swicth3() {
    this.active = 3;
  }
  swichNull() {
    this.active = null;
  }

}
