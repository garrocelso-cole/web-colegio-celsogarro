import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styles: [
  ]
})
export class ComentariosComponent implements OnInit {
  
  @Input() customOptions: OwlOptions = {}
  @Input() comentariosData: {
    url: string,
    data: Array<{
      parrafo:string,
      nombre:string,
      imgUrl:string,
    }>
  }
  constructor() { }

  ngOnInit(): void {
  }

}
