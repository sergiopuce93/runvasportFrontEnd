import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, of, Observable, interval } from 'rxjs';
import { map, retryWhen, flatMap } from 'rxjs/operators';
import { Evento } from '../interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  environment = environment;
  endpoint = environment.endpoint + 'events';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'aplication/json'
    })
  }
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }
  /**
   * Get all events
   */
  getAllEvents(): Observable<any> {
    return this.http.get(this.endpoint + '/').pipe(retryWhen(_ => {
      return interval(1000).pipe(
        flatMap(count => count === environment.MAX_CON_RETRIES ? throwError('Giving up') : of(count))
      );
    })).pipe(map(this.extractData));
  }

  /**
   * Post event
   */
  newEvent(event: Evento) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Evento>(this.endpoint + '/', event, httpOptions)
      .pipe(
        map(
          res => {
            return res;
          }
        )
      );
  }

  postFile(file: FormData) {
    const httpOptions = {
      headers: new HttpHeaders({
      
      })
    };
    return this.http.post(this.endpoint + '/fileUpload', file, httpOptions)
      .pipe(
        map(
          res => {
            return res;
          }
        )
      );
  }



}
