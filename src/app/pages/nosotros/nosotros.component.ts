import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})

export class NosotrosComponent implements OnInit {

  navClass = 'nav-light';

  anioActual = new Date().getFullYear();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }
}
