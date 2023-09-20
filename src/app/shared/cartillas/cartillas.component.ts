import { Component, Input, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-cartillas',
  templateUrl: './cartillas.component.html',
  styles: [
  ]
})
export class CartillasComponent implements OnInit {

  @Input() cartillaData: Array<{
    image: string,
    title: string,
    category: string,
  }>

  private _album = [];

  constructor(private _lightbox: Lightbox) { 
    for (let i = 1; i <= 6; i++) {
      const src = '../../assets/images/colegio/FOTOSGENERALES/fotogenerica-' + (i + 6) + '.jpeg';
      const caption = '';
      const thumb = '../../../assets/images/colegio/foto-colegio' + i + '-thumb.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };

      this._album.push(album);
    }
   }

   open(index: number): void {
    this._lightbox.open(this._album, index);
  }

  close(): void {
    this._lightbox.close();
  }
  ngOnInit(): void {
  }

}
