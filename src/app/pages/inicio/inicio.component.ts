import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { InicioService } from 'src/app/services/inicio.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SwiperOptions } from 'swiper';
const url_base_backend =environment.url_base_backend
// import { ReservaService } from 'src/app/services/reserva.service';
import { _Habitacion } from 'src/app/interfaces/habitacion.interface';
import { FormBuilder, Validators } from '@angular/forms';

interface _prereserva{
  habitaciones: _Habitacion[],
  prereserva: {}
}
interface _contatenosForm{
  nombre: string,
  email: string,
  comentarios: string,
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']

})

//Hotel Component
export class InicioComponent implements OnInit {
  
  constructor(
    private modalService: NgbModal,
    private router: Router,
    private inicioService: InicioService,
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  showNavigationArrows = true;
  showNavigationIndicators = false;
  navClass = 'bg-white'; //Nav Bg Light Class Add
  servicesData = [] //pendiente descripcion
  blogData =[] //pendiente descripcion
  cartillaData = [] //pendiente descripcion
  customOptions: OwlOptions = {}; //Testimonial Slider
  carruselData = [] //data de carrusel
  comentariosData = {}
  roomData: _Habitacion[] = []
  habitaciones: _Habitacion[] = []
  categorias: _Habitacion[] = []
  categoria: _Habitacion
  public config: SwiperOptions
  showRoomList : boolean = false
  prereserva: {}
  public contactenosForm = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email ]],
    comentarios: ['', Validators.required]
  }) 
  ngOnInit() {
    this.servicesData = this.inicioService.servicesData
    this.blogData = this.inicioService.blogData
    this.cartillaData = this.inicioService.cartillaData
    this.customOptions = this.inicioService.customOptions
    this.carruselData = this.inicioService.carruselData
    this.comentariosData = this.inicioService.comentariosData
    this.config = this.inicioService.swiperOptions
    this.http.get(`${url_base_backend}/habitaciones-genericas-tipo/`)
      .subscribe(
        (data: _Habitacion []) =>{ 
          this.categorias = data
        },
        (error)=>{
          console.log(error)
        }
      )
  }
  enviarContacto(){
    if ( this.contactenosForm.invalid ) {
      return
    }
    // console.log('---------------------------------------');
    // console.log(`this.http.post(${url_base_backend}/contactenos/,this.contactenosForm.value)`);    
    // console.log('---------------------------------------');
    // console.log(this.contactenosForm.value);
    this.contactenosForm.reset()
    // console.log('---------------------------------------');
    

  }
  showNgbNav(valor: boolean){
    let n = 0
    if (valor == true) {
      n = 2
    }else{
      n = 1
    }

    return n
  }
  envioFiltro(valor: _Habitacion){
    if (localStorage.getItem('habitacion')) {
      localStorage.removeItem('habitacion')
    }
    localStorage.setItem('habitacion', JSON.stringify(valor))
    this.router.navigateByUrl('/inicio/habitaciones')
  }

  habitacionSeleccionada(valor: _Habitacion){
    if (localStorage.getItem('habitacion')) {
      localStorage.removeItem('habitacion')
    }
    localStorage.setItem('habitacion', JSON.stringify(valor))
    
    if (localStorage.getItem('prereserva')) {
      localStorage.removeItem('prereserva')
    }
    localStorage.setItem('prereserva', JSON.stringify(this.prereserva))
    this.router.navigateByUrl('/inicio/detalle')
  }

  obtenerDatosReserva(valor : _prereserva){    
    this.showRoomList = true
    this.habitaciones = valor.habitaciones
    this.prereserva = valor.prereserva
    
  }
  /**
    * Open modal for show the video
    * @param content content of modal
    */
   openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }
  openModal(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }
}
