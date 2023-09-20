import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { _Habitacion, _Prereserva } from 'src/app/interfaces/habitacion.interface';
import { InicioService } from 'src/app/services/inicio.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

const url_base_backend = environment.url_base_backend
const url_root_backend = environment.url_root_backend
const url_root_frontend = environment.url_root_frontend

interface _Reservafinal {
  id: number,
  linkSeguro: string,
  ok: boolean,
  msg: string,
}
@Component({
  selector: 'app-reserva-detalle',
  templateUrl: './reserva-detalle.component.html',
  styles: [
  ],
  providers: [DatePipe]
})

export class ReservaDetalleComponent implements OnInit {

  @Input() habitacion: _Habitacion
  @Input() prereserva: _Prereserva = this.inicioService.prereserva
  @Input() picker: {}
  @Output() obtenerDatosReserva: EventEmitter<any> = new EventEmitter()

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private inicioService: InicioService,
    private miDatePipe: DatePipe,
    private router: Router
  ) { }
  habitaciones: string
  habilitarBtnReserva: boolean = false
  defaultDate = ["2021-11-25", "2021-11-29"]

  public checkDisponibilidadFormSubmitted = false
  public checkDisponibilidadForm = this.fb.group({
    picker: [[this.prereserva.fechaInicio, this.prereserva.fechaFin], [Validators.required]],
  })
  showMensajeError: boolean = false
  busquedaDisponibilidad: {}
  ngOnInit() {

  }
  ngOnDestroy() {
    this.prereserva = this.inicioService.prereserva
  }
  cambiarFormatoFecha(fecha: string) {
    return `${(new Date(fecha)).getUTCFullYear()}/${(new Date(fecha)).getMonth() + 1}/${((new Date(fecha)).getDate() + 1 < 10 ? '0' + ((new Date(fecha)).getDate() + 1) : (new Date(fecha).getDate()) + 1)}`
  }
  alertaCompleteReserva() {
    Swal.fire({
      title: 'Seleccione su dia de salida',
      text: 'Hotel Mancora a su servicio',
      icon: 'warning',
      confirmButtonText: 'ok'
    })
  }
  alertaHabitacionNoDisponible() {
    Swal.fire({
      title: 'Habitacion no disponible para esta fecha. Precios por temporada.',
      text: 'Por favor revise la disponibilidad en el calendario, para reservar fuera de temporada comunicarse por whatsapp al (+51) 951 298 174.',
      icon: 'warning',
      confirmButtonText: 'ok'
    })
  }
  changeFecha(event: any) {
    this.habilitarBtnReserva = false
  }
  buscarDisponibilidadHabitacion() {

    this.habilitarBtnReserva = false
    if (
      this.checkDisponibilidadForm.invalid ||
      this.checkDisponibilidadForm.value.picker[0] === '' ||
      this.checkDisponibilidadForm.value.picker === '') {
      this.showMensajeError = true
      return
    }

    let fechaInicio = '', fechaFinal = ''
    if (typeof this.checkDisponibilidadForm.value.picker === 'string') {
      fechaInicio = this.checkDisponibilidadForm.value.picker.split(' ')
      if (fechaInicio[2] == undefined) {
        this.alertaCompleteReserva()
        return
      }
      fechaFinal = fechaInicio[2]
      fechaInicio = fechaInicio[0]
      fechaInicio = this.miDatePipe.transform(fechaInicio, 'yyyy/MM/dd');
      fechaFinal = this.miDatePipe.transform(fechaFinal, 'yyyy/MM/dd');
    } else {
      fechaInicio = this.miDatePipe.transform(this.checkDisponibilidadForm.value.picker[0], 'yyyy/MM/dd');


      fechaFinal = this.miDatePipe.transform(this.checkDisponibilidadForm.value.picker[1], 'yyyy/MM/dd');
    }

    this.busquedaDisponibilidad = {
      picker: this.checkDisponibilidadForm.value.picker,
      fechaInicio: fechaInicio,
      fechaFin: fechaFinal,
      id: this.habitacion.id,
      numerodepersonas: this.habitacion.numerodepersonas,
      preciohabitacion: this.habitacion.preciohabitacion,
      ImgUrl: `${url_root_frontend}/${this.habitacion.imagen1}`
    }
    this.http.post<any>(`${url_base_backend}/habitaciones-libres/`, this.busquedaDisponibilidad)
      .subscribe(
        (resp: any) => {

          this.habitaciones = resp
          if (this.habitaciones.length > 0) {
            this.habilitarBtnReserva = true
          } else {
            this.habilitarBtnReserva = false
            this.alertaHabitacionNoDisponible()
          }
        },
        (error) => {
          console.log(error)
        }
      )
  }
  reservar() {
    this.http.post<any>(`${url_root_backend}/reservas-mancora/reservar/`, this.busquedaDisponibilidad)
      .subscribe(
        (reservaFinal: _Reservafinal) => {
          if (reservaFinal.ok) {
            window.location.href = `${url_root_backend}/reservas-mancora/detalle_reserva/${reservaFinal.linkSeguro}`;
          } else {
            this.busquedaDisponibilidad = {}
          }
        }
      )
  }
}
