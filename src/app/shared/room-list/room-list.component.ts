import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InicioService } from 'src/app/services/inicio.service';

interface member {
  profile: string,
  list: string[],
  name: string,
  designation: string,
};


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styles: [
  ]
})
export class RoomListComponent implements OnInit {
  
  @Input() roomListData: Array<{
    id: number,
    imagen1 : string,
    imagen2 : string,
    imagen3 : string,
    imagen4 : string,
    imagen5 : string,
    nombrehabitacion : string,
    category: string,
    numerodecamas : number,
    numerodebanios : number,
    preciohabitacion : number,
    numerodepersonas: number,
    numerohabitacion: number,
  }>
  @Input() totalCoincidencias: number
  @Output() roomListDataValor: EventEmitter<any> = new EventEmitter()
  
  constructor(
    private modalService: NgbModal,
    private inicioService: InicioService
    ) { }
  
  memberData: member[] 
  ngOnInit(): void {
    this.memberData = this.inicioService.memberData
  }


  enviar(valor: any){
    this.roomListDataValor.emit(valor)
  }

  
  /**
  * Open modal for show the video
  * @param content content of modal
  */
  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }

}
