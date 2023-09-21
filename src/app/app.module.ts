import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CountToModule } from 'angular-count-to';
import { NgxMasonryModule } from 'ngx-masonry';

import { SharedModule } from "./shared/shared.module";
import { PagesModule } from './pages/pages.module';
import { PagesRoutingModule } from './pages/pages.routing';


import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FeatherModule } from 'angular-feather';

import { allIcons } from 'angular-feather/icons';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginaerrorComponent } from './paginaerror/paginaerror.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    PaginaerrorComponent
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    RouterModule,
    CarouselModule,
    FeatherModule.pick(allIcons),
    ScrollToModule.forRoot(),
    RouterModule.forRoot([], { relativeLinkResolution: 'legacy', initialNavigation: 'enabledNonBlocking' }),
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
    SharedModule,
    PagesModule,
    PagesRoutingModule,
    HttpClientModule,
  ],
  exports: [
    FeatherModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: LocationStrategy, 
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
