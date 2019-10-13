import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  
  // Variables
  subscriptions: Subscription[] = [];
  listEvents: any[] = [];
  search: String;

  // Constructor
  constructor(private eventoService: EventoService) { }

  /**
   * Init load
   */
  ngOnInit() {
    this.getEvents();
  }

  /**
   * Destroy subscription
   */
  ngOnDestroy() {
    this.subscriptions.forEach(element => {
      element.unsubscribe();
    })
  }

  /**
   * Get all events
   */
  getEvents() {
    this.listEvents = [];
    this.subscriptions.push(
      this.eventoService.getAllEvents().subscribe(response => {
        this.listEvents = response;
      })
    );
  }

 
}
