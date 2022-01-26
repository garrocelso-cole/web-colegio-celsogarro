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

interface _Reservafinal{
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
  @Input() prereserva: _Prereserva = this.inicioService.prereserva //precarga un archivo vacio en caso de no recibir data
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
  defaultDate =  ["2021-11-25", "2021-11-29"]

  //formulario
  public checkDisponibilidadFormSubmitted = false
  public checkDisponibilidadForm = this.fb.group({
   picker: [[this.prereserva.fechaInicio, this.prereserva.fechaFin] , [ Validators.required]],
  })
  showMensajeError: boolean = false
  busquedaDisponibilidad : {}
  ngOnInit() {
  //  console.log(this.prereserva);
  //  console.log(this.habitacion);
  //  console.log(this.checkDisponibilidadForm.value);
  }
  ngOnDestroy(){
    this.prereserva = this.inicioService.prereserva
  }
  cambiarFormatoFecha(fecha: string){
    return `${(new Date(fecha)).getUTCFullYear()}/${(new Date(fecha)).getMonth() + 1 }/${((new Date(fecha)).getDate() + 1 < 10 ? '0' + ((new Date(fecha)).getDate() + 1) : (new Date(fecha).getDate()) + 1)}`
  }
  alertaCompleteReserva(){
    Swal.fire({
      title: 'Seleccione su dia de salida',
      text: 'Hotel Mancora a su servicio',
      icon: 'warning',
      confirmButtonText: 'ok'
    })
  }
  changeFecha(event :any){
    this.habilitarBtnReserva = false
  }
  buscarDisponibilidad(){
    //control de errores de llenado de formulario
    //console.log(this.checkDisponibilidadForm.value);
    this.habilitarBtnReserva = false
    if ( 
      this.checkDisponibilidadForm.invalid || 
      this.checkDisponibilidadForm.value.picker[0] === '' || 
      //this.checkDisponibilidadForm.value.picker[1] === '' ||
      this.checkDisponibilidadForm.value.picker === '') {
        this.showMensajeError = true
      return
    }
    //console.log(this.checkDisponibilidadForm.value);
    //Cambiando el formato de fecha
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
    }else{
      fechaInicio = this.miDatePipe.transform(this.checkDisponibilidadForm.value.picker[0], 'yyyy/MM/dd');
      //console.log(fechaInicio);
      
      fechaFinal = this.miDatePipe.transform(this.checkDisponibilidadForm.value.picker[1], 'yyyy/MM/dd');
    }

    //completando el formulario
     this. busquedaDisponibilidad = {
      picker: this.checkDisponibilidadForm.value.picker,
      fechaInicio: fechaInicio,
      fechaFin: fechaFinal,
      id:  this.habitacion.id,
      numerodepersonas: this.habitacion.numerodepersonas,
      preciohabitacion: this.habitacion.preciohabitacion,
      ImgUrl: `${ url_root_frontend }/${this.habitacion.imagen1}`
    }
    this.http.post<any>(`${url_base_backend}/habitaciones-libres/`,this.busquedaDisponibilidad )
    .subscribe(
      (resp:any) =>{         
        this.habitaciones = resp
        if (this.habitaciones.length > 0) {
          // console.log('-------------- Inicio: peticion a la ruta ------------------------');
          // console.log(`this.http.post<any>(${url_base_backend}/habitaciones-libres/,busquedaDisponibilidad` );
          // console.log('Donde busquedaDisponibilidad es:');
          // console.log(this.busquedaDisponibilidad);
          // console.log(this.habitaciones);
          // console.log('----------------- Fin: ---------------------');

          this.habilitarBtnReserva = true
        }else{
          this.habilitarBtnReserva = false
          Swal.fire({
            title: 'Habitacion no disponible para esta fecha',
            text: 'Revise la disponibilidad en el calendario',
            icon: 'warning',
            confirmButtonText: 'ok'
          })
        }
      },
      (error)=>{
        console.log(error)
      }
    )  
    this.obtenerDatosReserva.emit(this.busquedaDisponibilidad)
  }
  reservar(){
    
    this.http.post<any>(`${url_root_backend}/reservas-mancora/reservar/`,this.busquedaDisponibilidad)
    .subscribe(
      (reservaFinal:_Reservafinal)=>{
        console.log(reservaFinal);
        console.log(this.busquedaDisponibilidad);
        console.log('http://localhost:8000/reservas-mancora/detalle_reserva/'+`${reservaFinal.linkSeguro}`);
        
        if (reservaFinal.ok) {
          //window.location.href = `${reservaFinal.linkSeguro}`;
          //window.location.href = `http://localhost:8000/reservas-mancora/detalle_reserva/'+${reservaFinal.linkSeguro}`;
          //window.location.href='http://reserva.buenavistamancora.com/reservas-mancora/detalle_reserva/'+`${reservaFinal.linkSeguro}`;
          window.location.href='http://localhost:8000/reservas-mancora/detalle_reserva/'+`${reservaFinal.linkSeguro}`;
          //this.router.navigateByUrl(environment.url_pago)
        }else{
            this.busquedaDisponibilidad = {}
          }
         }
      )
  }
  

}
