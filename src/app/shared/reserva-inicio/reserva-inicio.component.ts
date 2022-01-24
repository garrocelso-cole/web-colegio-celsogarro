import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder,  Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { _Habitacion, _Prereserva } from 'src/app/interfaces/habitacion.interface';
import { InicioService } from 'src/app/services/inicio.service';

const url_base_backend =environment.url_base_backend

@Component({
  selector: 'app-reserva-inicio',
  templateUrl: './reserva-inicio.component.html',
  styleUrls: ['./reserva-inicio.component.css'
  ]
})
export class ReservaInicioComponent implements OnInit {
  
  @Output() obtenerDatosReserva: EventEmitter<any> = new EventEmitter()

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private inicioService: InicioService,
  ) { }
  
  prereserva: _Prereserva = this.inicioService.prereserva
  
  habitaciones: [] = []
  
  //formulario
  public checkDisponibilidadFormSubmitted = false
  public checkDisponibilidadForm = this.fb.group({
   picker: ['', [ Validators.required]],
   numAdultos: ['', [ Validators.required, Validators.min(1),Validators.max(15)]],
   numNinios: ['', [ Validators.min(0),Validators.max(15)]],
  })
  
  ngOnInit() {

  }

  campoNoValido(campo: string): boolean {
    if ( this.checkDisponibilidadForm.get(campo)?.invalid && this.checkDisponibilidadFormSubmitted ) {
      return true
    } else{
      return false
    }
  }
  cambiarFormatoFecha(fecha: string){
    return `${(new Date(fecha)).getUTCFullYear()}-${(new Date(fecha)).getMonth() + 1}-${(new Date(fecha)).getDate()}`
  }
  buscarDisponibilidad(){
    this.checkDisponibilidadFormSubmitted = true
    if (!this.checkDisponibilidadForm.value.numNinios) {
      this.checkDisponibilidadForm.value.numNinios = 0
    }
    if ( this.checkDisponibilidadForm.invalid ) {
      return
    }
    //completando el formulario
    if (this.checkDisponibilidadForm.value.picker.to === undefined) {
      this.checkDisponibilidadForm.value.picker.to = this.checkDisponibilidadForm.value.picker.from  
    }

    const busquedaDisponibilidad = {
      picker: this.checkDisponibilidadForm.value.picker,
      fechaInicio: this.checkDisponibilidadForm.value.picker.from,//this.cambiarFormatoFecha(this.checkDisponibilidadForm.value.picker.from),
      fechaFin: this.checkDisponibilidadForm.value.picker.to,//this.cambiarFormatoFecha(this.checkDisponibilidadForm.value.picker.to)
      adultos: this.checkDisponibilidadForm.value.numAdultos,
      ninios:  this.checkDisponibilidadForm.value.numNinios,
    }

    this.prereserva.fechaInicio = this.cambiarFormatoFecha(this.checkDisponibilidadForm.value.picker.from)
    this.prereserva.fechaFin = this.cambiarFormatoFecha(this.checkDisponibilidadForm.value.picker.to)

    this.http.post<any>(`${url_base_backend}/buscarhabitaciones`,busquedaDisponibilidad )
    .subscribe(
      (habitaciones: _Habitacion[]) =>{              
        this.obtenerDatosReserva.emit({
          prereserva: this.prereserva,
          habitaciones: habitaciones
        })
      },
      (error)=>{
        console.log(error)
      }
    ) 
  }
}
