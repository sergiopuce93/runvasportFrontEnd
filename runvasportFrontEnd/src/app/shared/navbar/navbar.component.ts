import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect() {
    this.router.navigate(['/home']);
  }

  navigateCalendar(){
    this.router.navigate(['home/calendar']);
  }

  navigateOrgan(){
    this.router.navigate(['home/organ']);
  }

  navigateContact(){
    this.router.navigate(['home/contact']);
  }

}
