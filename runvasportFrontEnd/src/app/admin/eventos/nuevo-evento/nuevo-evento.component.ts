import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Evento } from '../../../interfaces/event.interface';
import { EventoService } from '../../../services/evento.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.component.html',
  styleUrls: ['./nuevo-evento.component.css']
})
export class NuevoEventoComponent implements OnInit {
  error: number;
  errorFormControl: String;
  formNewEvent: FormGroup;
  newEvent: Evento = {
    id: null,
    nombre: null,
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
  constructor(private eventService: EventoService) {
    this.formNewEvent = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      sport: new FormControl('', [
        Validators.required
      ]),
      imagen: new FormControl('', [
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
  }

  /**
   * Rellena el objeto evento
   * @param Evento
   */
  fillEvent(event: Evento) {
    event.nombre = (this.formNewEvent.get('nombre').value).toUpperCase().trim();
    event.sport = (this.formNewEvent.get('sport').value).toUpperCase().trim();
    event.estimatedParticipants = this.formNewEvent.get('estimatedParticipants').value;
    event.limitedParticipants = this.formNewEvent.get('limitedParticipants').value;
    event.dateIni = this.formNewEvent.get('dateIni').value;
    event.dateEnd = this.formNewEvent.get('dateEnd').value;
    event.dateIniInscription = this.formNewEvent.get('dateIniInscription').value;
    event.dateEndInscription = this.formNewEvent.get('dateEndInscription').value;
    event.place = (this.formNewEvent.get('place').value).toUpperCase().trim();
    event.address = (this.formNewEvent.get('address').value).toUpperCase().trim();
    event.country = (this.formNewEvent.get('country').value).toUpperCase().trim();
    event.provincia = (this.formNewEvent.get('provincia').value).toUpperCase().trim();
    event.population = (this.formNewEvent.get('population').value).toUpperCase().trim();
    event.postalCode = this.formNewEvent.get('postalCode').value;
    event.limitedInscri = this.formNewEvent.get('limitedInscri').value
  }

  /**
   * Valida formulario
   * @returns Boolean
   */
  validateFormNewEvent() {
    if (this.formNewEvent.status === 'INVALID') {
     
        console.log(this.formNewEvent.controls.nombre.valid);
      
      for (const key in this.formNewEvent.controls) {
        if (this.formNewEvent.controls.hasOwnProperty(key)) {
          const element = this.formNewEvent.controls[key];
          if (element.errors != null) {
            // TIPOS DE VALIDACIONES DEL FORMULARIO REQUIRED, MINLENGTH
            if (element.hasError('required')) {
              this.errorFormControl = key;
              Swal.fire({
                type: 'error',
                title: 'Error...',
                text: 'El campo ' + key + ' es requerido',
              })
            } else if (element.hasError('minlength')) {
              this.errorFormControl = key;
              Swal.fire({
                type: 'error',
                title: 'Error...',
                text: 'El campo ' + key + ' tiene que tener minimo 2 caracteres',
              })
            } else if (element.hasError('email')) {
              this.errorFormControl = key;
              Swal.fire({
                type: 'error',
                title: 'Erro...',
                text: 'El campo ' + key.toUpperCase() + ' tiene formato incorrecto',
              })
            }
          }
        }
      }
    } else {
      return true;
    }
  }

  /**
   * Creacion de un evento
   */
  createEvent() {
    if(this.formNewEvent.valid != true) {
      this.validateFormNewEvent();
      console.log(this.errorFormControl);
    } else {
      console.log("correcto");
    }
    // if (this.validateFormNewEvent() === true && this.errorForm === null) {
    //   this.fillEvent(this.newEvent);
    //   console.log(this.errorForm);
      // this.eventService.newEvent(this.newEvent).subscribe(() => {
      // }, err => {
      //   if (err != null) {
      //     Swal.fire({
      //       type: 'error',
      //       title: 'Oops...',
      //       text: 'Error al crear el evento',
      //     })
      //   }
      // });
    // } else {

    // }
  }

  /**
  * FUNCION DESARROLLO
  */
  relleno() {
    // this.formNewEvent.controls['nombre'].setValue("");
    this.formNewEvent.controls['sport'].setValue("Running/Atletismo");
    // this.formNewEvent.controls['estimatedParticipants'].setValue(1000);
    // this.formNewEvent.controls['limitedParticipants'].setValue(1000);
    // this.formNewEvent.controls['dateIni'].setValue("");
    // this.formNewEvent.controls['dateEnd'].setValue("");
    // this.formNewEvent.controls['dateIniInscription'].setValue("");
    // this.formNewEvent.controls['dateEndInscription'].setValue("");
    // this.formNewEvent.controls['place'].setValue("valladolid");
    // this.formNewEvent.controls['country'].setValue("españa");
    // this.formNewEvent.controls['postalCode'].setValue("47006");
    // this.formNewEvent.controls['limitedInscri'].setValue(122);
  }

}
