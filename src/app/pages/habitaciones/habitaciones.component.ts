import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { _Habitacion } from 'src/app/interfaces/habitacion.interface';
import { InicioService } from 'src/app/services/inicio.service';

const url_base_backend = environment.url_base_backend
@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html'
})

export class habitacionesComponent implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient,
    private inicioService: InicioService,
  ) { }

  navClass = 'nav-light';
  habitaciones: _Habitacion[];
  habitacion: _Habitacion
  filterredImages: _Habitacion[];
  galleryFilter = 'todo';

  ngOnInit() {
    if (localStorage.getItem('habitacion')) {
      this.habitacion = JSON.parse(localStorage.getItem('habitacion'))
      localStorage.removeItem('habitacion')

    } else {
      this.habitacion = <any>this.inicioService.habitacionVacia
    }
    this.http.get(`${url_base_backend}/habitaciones`)
      .subscribe((data: _Habitacion[]) => {
        this.habitaciones = data
        this.filterredImages = this.habitaciones
        this.activeCategory(this.habitacion.tipohabitacion.nombretipo)
      })
  }

  habitacionSeleccionada(valor: any) {
    localStorage.setItem('habitacion', JSON.stringify(valor))
    this.router.navigateByUrl('/inicio/detalle')
  }

  activeCategory(category) {
    this.galleryFilter = category;
    if (this.galleryFilter === 'todo') {
      this.filterredImages = this.habitaciones;
    } else {
      this.filterredImages = this.habitaciones.filter(x => x.tipohabitacion.nombretipo === this.galleryFilter)
    }
  }
}
