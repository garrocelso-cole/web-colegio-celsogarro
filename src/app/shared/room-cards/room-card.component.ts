import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { _Habitacion } from 'src/app/interfaces/habitacion.interface';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styles: [
  ]
})
export class RoomCardComponent implements OnInit {
  @Output() roomCardEvent: EventEmitter<any> = new EventEmitter()

  @Input() roomCardData: _Habitacion[]

  enviar(valor: any){
    this.roomCardEvent.emit(valor)
  }

  constructor() { }

  ngOnInit(): void {

  }

}