import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { environment } from 'src/environments/environment.prod';
const url_base_backend =environment.url_base_backend
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

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder
    ) { }
  public contactenosForm = this.fb.group({
    nombre: ['jorgeluis', Validators.required],
    email: ['er.jorgeluis@gmail.com', [Validators.required, Validators.email ]],
    comentarios: ['mas infoo', Validators.required]
  }) 
  ngOnInit(): void {
  }
  enviarContacto(){
    if ( this.contactenosForm.invalid ) {
      return
    }
    Swal.fire({
      title: 'Datos de contacto',
      html:
      'Sus comentarios han sido enviados, '+
      /* `<b>informacion@buenavistamancora.com</b>`+ */
      'pronto nos pondremos en contacto con Ud.'
      ,
      icon: 'success',
      confirmButtonText: 'ok',
      /* footer: 'Revise su correo' */
    })
    console.log('---------------------------------------');
    // console.log(`this.http.post(${url_base_backend}/contactenos/,this.contactenosForm.value)`);    
    console.log('this.http.post');
    console.log(`${url_base_backend}/contactenos/`);    
    console.log(this.contactenosForm.value);
    this.contactenosForm.reset()
    console.log('---------------------------------------');
    

  }
  mapView(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true })
  }
}
