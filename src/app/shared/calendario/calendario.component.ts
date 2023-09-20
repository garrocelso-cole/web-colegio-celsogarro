import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { _Habitacion } from 'src/app/interfaces/habitacion.interface';

import { CalendarOptions } from '@fullcalendar/angular';

import { DetalleService } from 'src/app/services/detalle.service';
interface _dataReservaBackend {
  check_in: string,
  check_out: string
}
@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styles: [
  ]
})
export class CalendarioComponent implements OnInit {
  @Input() dataId: number = 0
  @Output() obtenerDatosReserva: EventEmitter<any> = new EventEmitter()
  constructor(
    private fb: FormBuilder,
    private detalleService: DetalleService,
  ) { }
  habitaciones: [] = []
  defaultDate = ["2021-11-25", "2021-11-29"]
  reservas: any[] = []

  public checkDisponibilidadFormSubmitted = false
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: true,
    events: this.reservas,
    droppable: true,
    visibleRange: {
      start: '2021-11-24',
      end: '2021-11-25',
    }
  };

  ngOnInit(): void {
    this.detalleService.getReservasHabitacion(this.dataId)
      .subscribe(
        (data: any) => {
          this.reservas = []
          data['fechas'].forEach((e: _dataReservaBackend) => {
            console.log(data);

            var hab = {
              title: 'Reservado',
              start: this.cambiarFormatoFecha1(e.check_in),
              end: this.cambiarFormatoFecha2(e.check_out),
              backgroundColor: '#FD8B02',
              borderColor: '#52F012',
              allDay: true,
            }

            this.reservas.push(hab)

          }
          );
          console.log(this.reservas);
          this.calendarOptions.events = this.reservas
        })
  }

  cambiarFormatoFecha1(fecha: string) {
    return `${fecha.substring(0, 4)}-${fecha.substring(5, 7)}-${fecha.substring(8, 10)}`
  }
  cambiarFormatoFecha2(fecha: string) {
    var dia = ((Number(fecha.substring(8, 10)) < 10 ? '0' + (Number(fecha.substring(8, 10)) + 1) : (Number(fecha.substring(8, 10)) + 1)))
    return `${fecha.substring(0, 4)}-${fecha.substring(5, 7)}-${dia}`
  }
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
  buscarDisponibilidad() {

  }
}
