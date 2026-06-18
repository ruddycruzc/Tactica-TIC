import { Component } from '@angular/core';
import { LOGOS } from '../../../../data/logos/logos.data';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-logos-carousel',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './logos-carousel.html',
  styleUrl: './logos-carousel.css',
})
export class LogosCarousel {

readonly logos = LOGOS;

}

