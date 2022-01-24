import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { _Habitacion } from 'src/app/interfaces/habitacion.interface';

import { FullCalendarComponent,CalendarOptions, formatDate } from '@fullcalendar/angular'; // useful for typechecking

import { environment } from 'src/environments/environment';
import { DetalleService } from 'src/app/services/detalle.service';
const url_base_backend =environment.url_base_backend
interface _dataReservaBackend{
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
  @Input() dataId: number= 0
  @Output() obtenerDatosReserva: EventEmitter<any> = new EventEmitter()
  constructor(
    private fb: FormBuilder,
    private detalleService: DetalleService,
  ) { }
  habitaciones: [] = []
  defaultDate =  ["2021-11-25", "2021-11-29"]
  reservas: any[] = []
  
  public checkDisponibilidadFormSubmitted = false
  calendarOptions: CalendarOptions = {
    
    initialView: 'dayGridMonth',
    // initialView: 'timeGridWeek',
    // initialView: 'listWeek',
    // initialView: 'dayGridWeek',
    // initialView: 'resourceTimelineWeek',
    // initialView: 'resourceTimeGridDay',
    // initialView: 'dayGridMonth',
    weekends: true, // initial value
    //dateClick: this.handleDateClick.bind(this), // bind is important!
    events: this.reservas,
    // events: [
    //   { title: 'reserva 1', date: '2021-11-03', backgroundColor: 'black'},
    //   { title: 'reserva 2', date: '2021-11-04', backgroundColor: 'green'},
    //   { title: 'reserva 3', start: '2021-11-05', end: '2021-11-08',backgroundColor: 'light-dark',id: ''},
    //   { title: 'reserva 4', start: '2021-11-14', end: '2021-11-17',backgroundColor: '#AD8880'},
    //   { title: 'reserva 5', start: '2021-11-17', end: '2021-11-20',backgroundColor: '#5BC58E'},
    //   { title: 'reserva 6', start: '2021-11-21', end: '2021-11-24',backgroundColor: '#C5A55B',allDay: true, borderColor: '#5BC58E'},
    //   { title: 'reserva 7', start: '2021-11-24', end: '2021-11-26',backgroundColor: '#C5A55B',allDay: true, borderColor: '#AD8880', color: '#F02912'},
    // ],
    droppable: true,
    visibleRange: {
      start: '2021-11-24',
      end: '2021-11-25',
    }
  };
  
  ngOnInit(): void {
    this.detalleService.getReservasHabitacion(this.dataId)
    .subscribe(
      (data: any)=>{
        this.reservas = []
        data['fechas'].forEach( (e: _dataReservaBackend) => {
          // console.log(e.check_in);
          // console.log(this.cambiarFormatoFecha(e.check_in));
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
        this.calendarOptions.events =  this.reservas
    })
  }

  cambiarFormatoFecha1(fecha: string){
    return `${(new Date(fecha)).getUTCFullYear()}-${(new Date(fecha)).getMonth() + 1 }-${((new Date(fecha)).getDate() < 10 ? '0' + ((new Date(fecha)).getDate() ) : (new Date(fecha).getDate()))}`
  }
  cambiarFormatoFecha2(fecha: string){
    return `${(new Date(fecha)).getUTCFullYear()}-${(new Date(fecha)).getMonth() + 1 }-${((new Date(fecha)).getDate() < 10 ? '0' + ((new Date(fecha)).getDate() + 1) : (new Date(fecha).getDate()) + 1)}`
  }
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
  buscarDisponibilidad(){
 
  }
  
}
