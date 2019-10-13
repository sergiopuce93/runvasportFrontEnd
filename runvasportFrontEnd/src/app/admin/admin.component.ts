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


  swicthDashboard() {
    this.active = 0;
  }
  swicthEvent() {
    this.active = 1;
  }
  swicthConfig() {
    this.active = 2;
  }
  swicthProfile() {
    this.active = 3;
  }
  swichNull() {
    this.active = null;
  }

}
