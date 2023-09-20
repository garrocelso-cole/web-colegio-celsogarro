import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';

import { FeatherModule } from 'angular-feather';

import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 

FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);

import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SwitcherComponent } from './switcher/switcher.component';
import { RoomCardComponent } from './room-cards/room-card.component';
import { CartillasComponent } from './cartillas/cartillas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReservaInicioComponent } from './reserva-inicio/reserva-inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { RoomListComponent } from './room-list/room-list.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ReservaDetalleComponent } from './reserva-detalle/reserva-detalle.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ServicesComponent,
    HeaderComponent,
    FooterComponent,
    SwitcherComponent,
    RoomCardComponent,
    CartillasComponent,
    ReservaInicioComponent,
    ComentariosComponent,
    RoomListComponent,
    ReservaDetalleComponent,
    CalendarioComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    FeatherModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FlatpickrModule,
    ScrollToModule,
    BrowserModule,
    FullCalendarModule 
  ],
  exports: [ 
    ServicesComponent, 
    HeaderComponent,
    FooterComponent,
    SwitcherComponent,
    RoomCardComponent,
    CartillasComponent,
    ReservaInicioComponent,
    ComentariosComponent,
    RoomListComponent,
    ReservaDetalleComponent,
    CalendarioComponent,
  ]
})

export class SharedModule { }
