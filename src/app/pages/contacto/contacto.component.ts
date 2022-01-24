import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

/**
 * Page Contact-One Component
 */
export class ContactoComponent implements OnInit {
  navClass = 'nav-light';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  mapView(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true })
  }
}
