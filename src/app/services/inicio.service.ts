import { Injectable } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SwiperOptions } from 'swiper';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor() { }
  
  servicesData = [
    {
      icon: "uil uil-wifi h1 text-primary",
      title: "WIFI Gratis",
      description: "Contamos con el servicio de Wifi 24x7 "
    },
    {
      icon: "uil uil-swimmer h1 text-primary",
      title: "Piscina",
      description: "Disfruta de nuestra piscina frente al mar."
    },
    {
      icon: "uil uil-car h1 text-primary",
      title: "Estacionamiento",
      description: "Contamos con estacionamiento en nuestro establecimiento."
    },
    {
      icon: "uil uil-utensils h1 text-primary",
      title: "Restaurante Interno",
      description: "Disfruta de nuestra gastronomia en nuestro restaurante."
    },
    {
      icon: "uil uil-accessible-icon-alt h1 text-primary",
      title: "Instalaciones para discapacitados",
      description: "Contamos con instalaciones para personas con discapacidad."
    },
    {
      icon: "uil uil-tv-retro h1 text-primary",
      title: "Televisión Cable",
      description: "Contamos con television por cable las 24 horas."
    },
  ];

  blogData = [
    {
      image: "assets/images/hotel/portada1.jpg",
      title: "Piscina a metros del mar",
      like: "33",
      message: "08",
      name: "",
      date: ""
    },
    {
      image: "assets/images/hotel/portada2.jpg",
      title: "Mágicos atardeceres",
      like: "33",
      message: "08",
      name: "",
      date: ""
    },
    {
      image: "assets/images/hotel/portada3.jpg",
      title: "Lindas instalaciones",
      like: "33",
      message: "08",
      name: "",
      date: ""
    }
  ];

  roomData = [
    {
      image: 'assets/images/hotel/01.jpg',
      title: 'Primer Bungalow',
      category: 'bungalow',
      numBed: 5,
      numBath: 2,
      costo: 500,
      numPersonas: 6,
      valor2: 'Ronald'
    },
    {
      image: 'assets/images/hotel/02.jpg',
      title: 'Segundo Bungalow',
      category: 'bungalow',
      numBed: 7,
      numBath: 2,
      costo: 600,
      numPersonas: 8,
      valor2: 'Jorge'
    },
    {
      image: 'assets/images/hotel/03.jpg',
      title: 'Habitación Standard',
      category: 'standard',
      numBed: 3,
      numBath: 1,
      costo: 350,
      numPersonas: 4,
      valor2: 'Alex'
    },
  ]

  cartillaData = [
    {
      image: 'assets/images/personal/1.jpg',
      title: 'Vista frente al mar',
      category: 'Mar de Máncora'
    },
    {
      image: 'assets/images/personal/2.jpg',
      title: 'Hermosos atardeceres',
      category: 'Ocaso'
    },
    {
      image: 'assets/images/personal/3.jpg',
      title: 'Nuestras instalaciones',
      category: 'Para su confort'
    },
    {
      image: 'assets/images/personal/4.jpg',
      title: 'Atardecer inolvidable',
      category: 'Sol de Máncora'
    },
    {
      image: 'assets/images/personal/5.jpg',
      title: 'Piscina frente al mar',
      category: 'Disfruta las mejores vacaciones'
    },
    {
      image: 'assets/images/personal/6.jpg',
      title: 'Momentos inolvidables',
      category: 'Cenas romanticas'
    },
  ];

  carruselData = [
    {
      h1: 'La mejor vista al mar, solo en ',
      h1Parrafo: 'Buena Vista Máncora',
      h4: 'Disfruta de las mejores vacaciones frente a la mejor vista.',
      span: 'Mirar Ahora',
      src:'https://www.youtube.com/embed/v66TvVNxN6s',
      urlImage: 'assets/images/hotel/portada1.jpg',
      iframe:'',
      link: '',
    },
    {
      h1: 'Buena Vista Máncora, la mejor elección para sus vacaciones',
      h1Parrafo: '',
      h4: 'Contempla de un alba único, acompañado del sonido del mar.',
      span: '',
      src: '',
      urlImage: 'assets/images/hotel/portada2.jpg',
      iframe:'',
      link: 'Nosotros',

    },
    {
      h1: 'Bienvenidos al paradisíaco ',
      h1Parrafo: 'Buena Vista Máncora',
      h4: 'Reserva de las habitaciones que tenemos para ti.',
      span: '',
      src: '',
      urlImage: 'assets/images/hotel/portada3.jpg',
      iframe:'',
      link: '',
    },
    {
      h1: 'Bienvenidos al paradisíaco ',
      h1Parrafo: 'Buena Vista Máncora',
      h4: 'Launch your campaign and benefit from our expertise on designing.',
      span: '',
      src: '',
      urlImage: 'assets/images/hotel/portada3.jpg',
      iframe:'',
      link: '',
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      900: {
        items: 1
      }
    },
    nav: false
  };
  
  comentariosData = {
    url:'assets/images/hotel/comentariosInicio.jpg',
    data:[
      {
        parrafo: " It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. ",
        nombre: "Ing. Ronald Chavez R.",
        imgUrl: "assets/images/client/01.jpg",
      },
      {
        parrafo: "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling all the instances of the unusual word 'consectetur' he could find",
        nombre: "Ing. Alex Ramos I.",
        imgUrl: "assets/images/client/04.jpg",
      },
      {
        parrafo: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. ",
        nombre: "Ing. Jorge Eugenio",
        imgUrl: "assets/images/client/06.jpg",
      }
    ]
  }

  swiperOptions: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    navigation: true,
    pagination: false
  };
   
   //Member Data
   memberData = [
    {
      profile: "assets/images/client/01.jpg",
      list: ['facebook', "instagram", "twitter", "linkedin"],
      name: "Ronny Jofra",
      designation: "C.E.O"
    },
    {
      profile: "assets/images/client/04.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Micheal Carlo",
      designation: "Director"
    },
    {
      profile: "assets/images/client/02.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Aliana Rosy",
      designation: "Manager"
    },
    {
      profile: "assets/images/client/03.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Sofia Razaq",
      designation: "Developer"
    }
  ];

  habitacionVacia = {
    id: 0,
    imagen1: '',
    imagen2: '',
    imagen3: '',
    imagen4: '',
    imagen5: '',
    nombrehabitacion: '',
    numerodebanios: 0,
    numerodecamas: 0,
    numerodepersonas: 0,
    numerohabitacion: 0,
    preciohabitacion: 0,
    tipohabitacion: {
      id: 0,
      nombretipo: 'todo'
    },
    servicios: [{
      id: 0,
      nombreservicio: ''
    }]
  }

  prereserva = {
    fechaInicio: '',
    fechaFin: '',
  }
  contactenos = {
    nombre: '',
    email: '',
    comentarios: '', 
  }
}
