import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { InicioService } from 'src/app/services/inicio.service';
import { SwiperOptions } from 'swiper';
import { _Habitacion } from 'src/app/interfaces/habitacion.interface';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

interface _prereserva {
  habitaciones: _Habitacion[],
  prereserva: {}
}
interface _contatenosForm {
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

  addclass: string;
  buttonShow: boolean;
  TopbarShow: boolean;
  footerClass: string;
  developerPage: boolean;
  hideFooter: boolean;
  shopPages: boolean;

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private inicioService: InicioService,
    private fb: FormBuilder
  ) { }

  showNavigationArrows = true;
  showNavigationIndicators = false;
  navClass = 'nav-light';
  servicesData = []
  cartillaData = []
  customOptions: OwlOptions = {};
  carruselData = []
  roomData: _Habitacion[] = []
  habitaciones: _Habitacion[] = []
  primaria: _Habitacion[] = []
  categoria: _Habitacion
  public config: SwiperOptions
  showRoomList: boolean = false
  prereserva: {}
  public contactenosForm = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    comentarios: ['', Validators.required]
  })

  rows: any[] = []
  columns: any[] = []

  ngOnInit() {
    
    this.columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
    this.servicesData = this.inicioService.servicesData
    this.cartillaData = this.inicioService.cartillaData
    this.customOptions = this.inicioService.customOptions
    this.carruselData = this.inicioService.carruselData
    this.config = this.inicioService.swiperOptions
  }
  enviarContacto() {
    if (this.contactenosForm.invalid) {
      return
    }
    Swal.fire({
      title: 'Datos de contacto',
      html:
        'Sus comentarios han sido enviados, ' +
        'pronto nos pondremos en contacto con Ud.'
      ,
      icon: 'success',
      confirmButtonText: 'ok',
    })

    this.contactenosForm.reset()
  }
  showNgbNav(valor: boolean) {
    let n = 0
    if (valor == true) {
      n = 2
    } else {
      n = 1
    } 
    return n   
  }
  envioFiltro(valor: _Habitacion) {
    if (localStorage.getItem('habitacion')) {
      localStorage.removeItem('habitacion')
    }
    localStorage.setItem('habitacion', JSON.stringify(valor))
    this.router.navigateByUrl('/inicio/habitaciones')
  }

  habitacionSeleccionada(valor: _Habitacion) {
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

  obtenerDatosReserva(valor: _prereserva) {
    this.showRoomList = true
    this.habitaciones = valor.habitaciones
    this.prereserva = valor.prereserva

  }
  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }
  openModal(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }

  onActivate(componentReference: any) {

    this.addclass = componentReference.navClass;
    this.buttonShow = componentReference.buttonList;
    this.TopbarShow = componentReference.sliderTopbar;
    this.footerClass = componentReference.footerVariant;
    this.developerPage = componentReference.isdeveloper;
    this.hideFooter = componentReference.hideFooter;
    this.shopPages = componentReference.shopPages;
  }
}
