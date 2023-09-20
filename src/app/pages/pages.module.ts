import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { habitacionesComponent } from './habitaciones/habitaciones.component';
import { EventosComponent } from './eventos/eventos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DetalleComponent } from './detalle/detalle.component';


import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { RouterModule } from '@angular/router';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { NgbDropdownModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CountToModule } from 'angular-count-to';
import { NgxMasonryModule } from 'ngx-masonry';
import { LightboxModule } from 'ngx-lightbox';
import { HttpClientModule } from '@angular/common/http';
import { NoticiasComponent } from './noticias/noticias.component';
import { AliadosComponent } from './aliados/aliados.component';
import { NormatividadesComponent } from './normatividades/normatividades.component';
import { GestionComponent } from './gestion/gestion.component';
import { InnovacionComponent } from './innovacion/innovacion.component';

@NgModule({
  declarations: [
    PagesComponent,
    InicioComponent,
    NosotrosComponent,
    habitacionesComponent,
    EventosComponent,
    ContactoComponent,
    DetalleComponent,
    NoticiasComponent,
    AliadosComponent,
    NormatividadesComponent,
    GestionComponent,
    InnovacionComponent,
  ],
  exports: [
    PagesComponent,
    InicioComponent,
    NosotrosComponent,
    habitacionesComponent,
    EventosComponent,
    ContactoComponent,
    DetalleComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule,
    FeatherModule.pick(allIcons),
    ScrollToModule.forRoot(),
    RouterModule.forRoot([], { relativeLinkResolution: 'legacy', initialNavigation: 'enabled' }),
    NgxYoutubePlayerModule,
    NgbDropdownModule,
    CKEditorModule,
    NgbModule,
    NgbNavModule,
    FormsModule,
    SwiperModule,
    NgxTypedJsModule,
    FlatpickrModule.forRoot(),
    CountToModule,
    NgxMasonryModule,
    LightboxModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class PagesModule { }
