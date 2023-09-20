import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-normatividades',
  templateUrl: './normatividades.component.html'
})
export class NormatividadesComponent implements OnInit {

  navClass = 'nav-light';

  anioActual = new Date().getFullYear();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }

}
