import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  navClass = 'nav-light';
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
    },
    {
      icon: "uil uil-tv-retro h1 text-primary",
      title: "Televisión Cable",
      description: "Contamos con television por cable las 24 horas."
    },
    {
      icon: "uil uil-temperature-half h1 text-primary",
      title: "Aire Acondicionado",
      description: "Poseemos habitacionescon el aire acondicionado que buscas."
    },
    {
      icon: "uil uil-lock-access h1 text-primary",
      title: "Caja Fuerte",
      description: "Guarda tus objetos de valor sin preocupaciones"
    },
    {
      icon: "uil uil-sunset h1 text-primary",
      title: "Terraza frente al mar",
      description: "La mejor vista frente al mar, Calidad educativa ."
    },
    {
      icon: "uil uil-stretcher h1 text-primary",
      title: "Parrilla",
      description: "Comparte con tus amigos en nuestra zona de parrilla."
    },
    {
      icon: "uil uil-wind h1 text-primary",
      title: "Hidromasaje",
      description: "Disfruta de un hidromasaje frente al mar"
    },
    {
      icon: "uil uil-kid h1 text-primary",
      title: "Piscina para niños",
      description: "Piscina para los engreidos de la familia."
    }
  ];

  /**
   * Client Testimonial Data
   */
  testimonialData = [
    {
      profile: "assets/images/client/01.jpg",
      name: "Rodrigo Paredes",
      designation: "Gerente",
      message: `" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "`
    },
    {
      profile: "assets/images/client/02.jpg",
      name: "Barbara Jimenez",
      designation: "Administradora",
      message: `" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "`
    },
    {
      profile: "assets/images/client/03.jpg",
      name: "Ana Oliver",
      designation: "Ingeniero",
      message: `" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`
    },
    {
      profile: "assets/images/client/04.jpg",
      name: "Kevin Aragon",
      designation: "Comercial",
      message: `" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "`
    },
    {
      profile: "assets/images/client/05.jpg",
      name: "Diana Gutierrez",
      designation: "Arquiteto",
      message: `" There is now an abundance of readable dummy texts. These are usually used when a text is required. "`
    },
    {
      profile: "assets/images/client/06.jpg",
      name: "Sergio Salazar",
      designation: "Diseñador",
      message: `" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "`
    }
  ];
  ngOnInit(): void {
  }

}
