import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Evento } from '../../../interfaces/event.interface';

@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.component.html',
  styleUrls: ['./nuevo-evento.component.css']
})
export class NuevoEventoComponent implements OnInit {
  error: number;
  formNewEvent: FormGroup;
  newEvent: Evento = {
    id: null,
    name: null,
    url: null,
    imagen: null,
    sport: null,
    estimatedParticipants: null,
    limitedParticipants: null,
    dateIni: null,
    dateEnd: null,
    dateIniInscription: null,
    dateEndInscription: null,
    place: null,
    address: null,
    country: null,
    provincia: null,
    population: null,
    postalCode: null,
    email: null,
    clasification: null,
    limitedInscri: null
  }
  constructor() { 
    this.formNewEvent = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      sport: new FormControl('', [
        Validators.required
      ]),
      imagen: new FormControl('', [
        Validators.required
      ]),
      estimatedParticipants: new FormControl('', [
      ]),
      limitedParticipants: new FormControl('', [
      ]),
      dateIni: new FormControl('', [
      ]),
      dateEnd: new FormControl('', [
      ]),
      dateIniInscription: new FormControl('', [
      ]),
      dateEndInscription: new FormControl('', [
      ]),
      place: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      address: new FormControl('', [
      ]),
      country: new FormControl('', [
      ]),
      provincia: new FormControl('', [
      ]),
      population: new FormControl('', [
      ]),
      postalCode: new FormControl('', [
      ]),
      limitedInscri: new FormControl('', [
      ]),
    });
  }

  ngOnInit() {
  this.error = 0;
  }

  prueba() {
    console.log(this.formNewEvent);
    this.error = 1;
    console.log(this.error);
  }

   /**
   * Rellenar formulario
   */
  relleno() {
    this.formNewEvent.controls['name'].setValue("test");
    this.formNewEvent.controls['sport'].setValue("Running/Atletismo");    
    this.formNewEvent.controls['estimatedParticipants'].setValue(1000);    
    this.formNewEvent.controls['limitedParticipants'].setValue(1000);    
    this.formNewEvent.controls['dateIni'].setValue("");    
    this.formNewEvent.controls['dateEnd'].setValue("");    
    this.formNewEvent.controls['dateIniInscription'].setValue("");    
    this.formNewEvent.controls['dateEndInscription'].setValue("");    
    this.formNewEvent.controls['place'].setValue("valladolid");    
    this.formNewEvent.controls['country'].setValue("españa");    
    this.formNewEvent.controls['postalCode'].setValue("47006");    
    this.formNewEvent.controls['limitedInscri'].setValue("");    
    
  }

}
