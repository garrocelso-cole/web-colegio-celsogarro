import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-innovacion',
  templateUrl: './innovacion.component.html'
})
export class InnovacionComponent implements OnInit {
  addclass: string;
  buttonShow: boolean;
  TopbarShow: boolean;
  footerClass: string;
  developerPage: boolean;
  hideFooter: boolean;
  shopPages: boolean;
  navClass = 'nav-light';
  constructor() { }

  ngOnInit(): void {
  }
  onActivate(componentReference: any) {

    this.addclass = componentReference.navClass;
    this.buttonShow = componentReference.buttonList;
    this.TopbarShow = componentReference.sliderTopbar;
    this.footerClass = componentReference.footerVariant;
    this.developerPage = componentReference.isdeveloper;
    this.hideFooter = componentReference.hideFooter;
    this.shopPages = componentReference.shopPages;
  }
}
