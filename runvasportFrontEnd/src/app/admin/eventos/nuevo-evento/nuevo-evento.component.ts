import { Component, OnInit, ChangeDetectorRef, ElementRef } from '@angular/core';
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
  labelImport: ElementRef;
  fileToUpload: File = null;
  error: number;
  errorFormControl: String;
  formNewEvent: FormGroup;
  newEvent: Evento = {
    id: null,
    name: null,
    imagen: null,
    sport: null,
    dateIni: null,
    dateEnd: null,
    place: null,
    address: null,
    country: null,
    provincia: null,
  }
  constructor(private eventService: EventoService, private cd: ChangeDetectorRef) {
    this.formNewEvent = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      sport: new FormControl('', [
        Validators.required
      ]),
      dateIni: new FormControl('', [
      ]),
      dateEnd: new FormControl('', [
      ]),
      place: new FormControl('', [
      ]),
      address: new FormControl('', [
      ]),
      country: new FormControl('', [
      ]),
      provincia: new FormControl('', [
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
    event.name = (this.formNewEvent.get('name').value).toUpperCase().trim();
    event.sport = (this.formNewEvent.get('sport').value).toUpperCase().trim();
    event.dateIni = this.formNewEvent.get('dateIni').value;
    event.dateEnd = this.formNewEvent.get('dateEnd').value;
    event.place = (this.formNewEvent.get('place').value).toUpperCase().trim();
    event.address = (this.formNewEvent.get('address').value).toUpperCase().trim();
    event.country = (this.formNewEvent.get('country').value).toUpperCase().trim();
    event.provincia = (this.formNewEvent.get('provincia').value).toUpperCase().trim();
  }

  /**
   * Valida formulario
   * @returns Boolean
   */
  validateFormNewEvent() {
    if (this.formNewEvent.status === 'INVALID') {
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
    this.uploadFileToActivity();

   /*  if (this.formNewEvent.valid != true) {
      this.validateFormNewEvent();
    } else {
      this.fillEvent(this.newEvent);
      console.log(this.newEvent);
      this.eventService.newEvent(this.newEvent).subscribe(data => {
        Swal.fire({
          type: 'success',
          title: 'Evento creado'
        })
      }, err => {
        if (err != null) {
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: err,
          })
        }
      });
    } */
  }

  toFormData(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return formData;
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    
    this.eventService.postFile(this.toFormData(this.fileToUpload)).subscribe((data) => {
      // do something, if upload success
    }, error => {
      console.log(error);
    });
  }
}
