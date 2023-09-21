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
      icon: "uil uil-game-structure h1 text-primary",
      title: "Responsabilidad",
      description: "La enseñanza de respetar los tiempos de los deberes casa a la perfección con la rutina para ayudar en las tareas del hogar. De esta forma, el pequeño se convertirá en un adulto responsable el día de mañana; ya que aprenderá a diferenciar los actos buenos y los no tan buenos, y a asumir las consecuencias de cada uno."
    },
    {
      icon: "uil uil-book-reader h1 text-primary",
      title: "Educación para la Igualdad de Oportunidades de Ambos Sexos, uno de los valores más importante en la escuela",
      description: "Una educación orientada a contemplar la diferencia como realidad enriquecedora y no como una forma de discriminación. Distinguiendo entre identidad sexual e identidad de género, y distinguiendo entre las diferencias biológicas y las funciones y los roles sociales relacionados con el género."
    },
    {
      icon: "uil uil-swimmer h1 text-primary",
      title: "Compromiso",
      description: " De esta forma, conseguirá fortalecer los objetivos y los proyectos, proponiéndose cualquier cosa y siendo capaz de llegar hasta donde él quiera."
    },
    {
      icon: "uil uil-bolt-alt h1 text-primary",
      title: "Tolerancia",
      description: "Como ya te podrás suponer, la tolerancia es uno de los principales valores que se deben enseñar en la escuela. En este sentido, el centro educativo es el espacio cotidiano donde se relacionan diferentes niños, cada uno con sus costumbres, culturas y de padres y madres diferentes."
    },
    {
      icon: "uil uil-thumbs-up h1 text-primary",
      title: "Gratitud",
      description: "“Gracias” es una de las palabras más importantes que el pequeño debe aprender y seguir descubriendo a lo largo de su vida, junto a “te quiero” y “perdón”. Desde la infancia, se debe procurar que los niños sean agradecidos, sobre todo con las pequeñas cosas que da la vida."
    },
    {
      icon: "uil uil-users-alt h1 text-primary",
      title: "Generosidad",
      description: "Además, hay que asegurarse de convertir la generosidad en un placer que les haga sentir bien haciendo lo correcto por los demás desde el corazón."
    },
    {
      icon: "uil uil-user-check h1 text-primary",
      title: "Honestidad",
      description: "Entender que hay que ser honestos hasta cuando se ha cometido un error es una clara muestra de madurez y responsabilidad. Por eso, en clase y en casa hay que darle a los niños la suficiente confianza para que ellos sepan y entiendan que lo mejor es decir siempre la verdad. "
    },
    {
      icon: "uil uil-sun h1 text-primary",
      title: "Educación Moral y Cívica",
      description: "Educación relacionada con el concepto de ‘Democracia’ y el fomento de sus valores. Una educación moral y cívica debe partir del conocimiento del sistema social en que se basa, de los derechos y deberes de los ciudadanos, y del mismo concepto de ciudadanía."
    },
    {
      icon: "uil uil-mountains-sun h1 text-primary",
      title: "Humildad",
      description: "En hermandad con la honestidad, se practicará también la humildad con los demás porque el ser humano habita en un mundo plural, multicultural y diferente. Por ende, es importante educar al niño para que no crea que es superior a los demás, ni se crea tener más derechos que el resto."
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
      src: 'https://www.youtube.com/embed/1Z7Jx3g9u58',
      urlImage: 'assets/images/colegio/portada1xx.jfif',
      iframe: 'https://www.youtube.com/embed/1Z7Jx3g9u58',
      link: '',
    },
    {
      h1: 'Celso Garro Valderrama, la mejor elección para su educación',
      h1Parrafo: '',
      h4: '',
      span: '',
      src: '',
      urlImage: 'assets/images/colegio/portada1xx.jfif',
      iframe: '',
      link: 'Nosotros',

    },
    {
      h1: 'Bienvenidos, Colegio 86253  ',
      h1Parrafo: '"ESTUDIO PARA TRASCENDER"',
      h4: 'Reserva tu vacante.',
      span: '',
      src: '',
      urlImage: 'assets/images/colegio/portada1xx.jfif',
      iframe: '',
      link: '',
    }
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
