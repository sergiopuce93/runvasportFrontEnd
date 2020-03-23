import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Evento } from 'src/app/interfaces/event.interface';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

    // Variables
    subscriptions: Subscription[] = [];
    listEvents: Evento[] = [];
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
