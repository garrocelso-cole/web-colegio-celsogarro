import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-normatividades',
  templateUrl: './normatividades.component.html',
  styleUrls: ['./normatividades.component.css']
})
export class NormatividadesComponent implements OnInit {

  navClass = 'nav-light';

  anioActual = new Date().getFullYear();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  /**
  * Open modal for show the video
  * @param content content of modal
  */
   openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }

}
