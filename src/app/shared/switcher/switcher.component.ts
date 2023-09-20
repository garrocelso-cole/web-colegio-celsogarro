import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html'
})

export class SwitcherComponent implements OnInit {

  isVisible: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isVisible = false;
  }

  onChangeColor(color: string) {
    document
      .getElementById('color-opt')
      .setAttribute('href', './assets/css/colors/' + color + '.css');
  }

  setDark() {
    window.location.href='http://en.buenavistamancora.com/';
  }

  setLight() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style.min.css');
  }

  darkRtl() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style-dark-rtl.min.css');
  }
  darkLtr() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style-dark.min.css');
  }
  
  setRtl() {
    window.location.href='http://www.buenavistamancora.com/';
  }
  setLtr() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style.min.css');
  }

  onChangeSwitch() {
    this.isVisible = !this.isVisible;
  }

}
