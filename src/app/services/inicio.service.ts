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
      title: "Wi-Fi Gratis",
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
    }
  ];

  blogData = [
    {
      image: "assets/images/hotel/portada1xx.jfif",
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
      image: '../../assets/images/colegio/FOTOSGENERALES/fotogenerica-7.jpeg',
      title: '',
      category: ''
    },
    {
      image: '../../assets/images/colegio/FOTOSGENERALES/fotogenerica-8.jpeg',
      title: '',
      category: ''
    },
    {
      image: '../../assets/images/colegio/FOTOSGENERALES/fotogenerica-9.jpeg',
      title: '',
      category: ''
    },
    {
      image: '../../assets/images/colegio/FOTOSGENERALES/fotogenerica-10.jpeg',
      title: '',
      category: ''
    },
    {
      image: '../../assets/images/colegio/FOTOSGENERALES/fotogenerica-11.jpeg',
      title: '',
      category: ''
    },
    {
      image: '../../assets/images/colegio/FOTOSGENERALES/fotogenerica-12.jpeg',
      title: '',
      category: ''
    },
  ];

  carruselData = [
    {
      h1: 'Colegio 86253 - Celso Garro Valderrama, ',
       h1Parrafo: '"ESTUDIO PARA TRASCENDER"',
      h4: 'La mejor educacion en nuestras manos',
      span: 'Mirar Ahora',
      src:'https://www.youtube.com/embed/1Z7Jx3g9u58',
      urlImage: 'assets/images/colegio/portada1xx.jfif',
      iframe:'https://www.youtube.com/embed/1Z7Jx3g9u58',
      link: '',
    },
    {
      h1: 'Celso Garro Valderrama, la mejor elección para su educación',
      h1Parrafo: '',
      h4: '',
      span: '',
      src: '',
      urlImage: 'assets/images/colegio/portada1xx.jfif',
      iframe:'',
      link: 'Nosotros',

    },
    {
      h1: 'Bienvenidos, Colegio 86253  ',
      h1Parrafo: '"ESTUDIO PARA TRASCENDER"',
      h4: 'Reserva tu vacante.',
      span: '',
      src: '',
      urlImage: 'assets/images/colegio/portada1xx.jfif',
      iframe:'',
      link: '',
    },
    {
      h1: 'Bienvenidos, Colegio 86253  ',
       h1Parrafo: '"ESTUDIO PARA TRASCENDER"',
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
        parrafo: "Muy recomendado por la gran vista frente al mar y la cercania al centro de Mancora",
        nombre: "Ronald Chavez",
        imgUrl: "assets/images/client/01.jpg",
      },
      {
        parrafo: "El hotel posee gran variedad de servicios de muy buena calidad, con una piscina que esta frente al mar, una gran experiencia en Mancora",
        nombre: "Alex Ramos",
        imgUrl: "assets/images/client/04.jpg",
      },
      {
        parrafo: "Super recomendado para compartir unas vacaciones con amigos en los lindos ambientes que posee el hotel",
        nombre: "Jorge Eugenio",
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
