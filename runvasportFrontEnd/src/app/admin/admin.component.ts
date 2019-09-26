import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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

}
