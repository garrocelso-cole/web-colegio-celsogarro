import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  constructor(private http: HttpClient) { }

  getReservasHabitacion(id: number) {
    return this.http.post(`${environment.url_base_backend}/obtener-fechas-habitacion`, { id: id })
  }
}
