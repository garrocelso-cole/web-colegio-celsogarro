import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})

export class FooterComponent implements OnInit {

  @Input() footerVariant: string;
  @Input() hideFooter: boolean;

  year = new Date().getFullYear()

  constructor() { }

  ngOnInit(): void {
  }

}
