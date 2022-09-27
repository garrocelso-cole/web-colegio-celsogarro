import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const url_base_backend =environment.url_base_backend

@Injectable({
  providedIn: 'root'
})
export class habitacionesService {
  
  constructor(private http: HttpClient) { }
  
  gethabitaciones(){  
    return this.http.get(`${url_base_backend}/habitaciones/`)
  }

  chequeoDeDisponibilidadHabitacion(campos: any){
    return this.http.post<any>(`${url_base_backend}/habitaciones-libres/`,campos )
    .subscribe(r=>{
      //console.log(r);
    })
  }


}
