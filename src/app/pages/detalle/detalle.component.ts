import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { _Habitacion, _Prereserva, _Servicio } from 'src/app/interfaces/habitacion.interface';
import { InicioService } from 'src/app/services/inicio.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})

export class DetalleComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private inicioService: InicioService,
  ) { }
  customOptions: OwlOptions = {}
  config: SwiperOptions = {};
  shopPages = true;
  model = 1;
  habitacion: _Habitacion
  categoria: any
  listaServicios: any[] = [[], [], []]
  prereserva: _Prereserva
  public formSubmitted = false
  public reservaForm = this.fb.group({
    picker: ['', [Validators.required]],
    checkoutpicker: ['', [Validators.required]],
    numAdultos: ['3', [Validators.required]],
    numNinos: ['2', []],
    id: ['10', [Validators.required]],

  })

  ngOnInit(): void {
    this.customOptions = this.inicioService.customOptions
    this.config = this.inicioService.swiperOptions
    this.getHabitacionSeleccionada()
  }
  getHabitacionSeleccionada() {
    if (localStorage.getItem('habitacion')) {
      this.habitacion = JSON.parse(localStorage.getItem('habitacion'))
      this.prereserva = JSON.parse(localStorage.getItem('prereserva'))
      this.listaServicios = this.fragmentarLista(this.habitacion.servicios)
      this.categoria = this.habitacion.tipohabitacion.nombretipo
      localStorage.removeItem('habitacion')
      localStorage.removeItem('prereserva')
    } else {
      this.habitacion = this.inicioService.habitacionVacia
      this.prereserva = this.inicioService.prereserva
      this.router.navigateByUrl('/inicio')
    }
  }
  getReservasDeHabitacion(id: any) {

  }
  fragmentarLista(lista: _Servicio[]) {
    let longitudNuevaLista = Math.ceil(lista.length / 3)
    let listaNueva: any[] = [[], [], []]
    for (let i = 0; i < lista.length; i++) {
      if (i < longitudNuevaLista) {
        listaNueva[0].push(lista[i])
      } else if (i < 2 * longitudNuevaLista) {
        listaNueva[1].push(lista[i])
      } else {
        listaNueva[2].push(lista[i])
      }
    }
    return listaNueva
  }
  obtenerDatosReserva(valor: any) {
  }

  imageShow(event) {
    const image = event.target.src;
    const expandImg = document.getElementById('expandedImg') as HTMLImageElement;
    expandImg.src = image;
  }

  increase() {
    this.model += 1;
  }
  decrement() {
    if (this.model > 0) {
      this.model -= 1;
    }
  }
}
