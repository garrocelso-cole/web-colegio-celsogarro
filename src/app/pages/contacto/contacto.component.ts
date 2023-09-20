import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { environment } from 'src/environments/environment.prod';
const url_base_backend = environment.url_base_backend
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit {
  navClass = 'nav-light';

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder
  ) { }
  public contactenosForm = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    comentarios: ['', Validators.required]
  })
  ngOnInit(): void {
  }
  enviarContacto() {
    if (this.contactenosForm.invalid) {
      return
    }
    Swal.fire({
      title: 'Datos de contacto',
      html:
        'Sus comentarios han sido enviados, ' +
        'pronto nos pondremos en contacto con Ud.'
      ,
      icon: 'success',
      confirmButtonText: 'ok',
    })

    this.contactenosForm.reset()

  }
  mapView(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true })
  }
}
