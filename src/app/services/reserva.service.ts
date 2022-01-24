import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const url_base_backend =environment.url_base_backend

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  constructor(private http: HttpClient) { }


}