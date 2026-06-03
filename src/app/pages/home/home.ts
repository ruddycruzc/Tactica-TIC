import { Component } from '@angular/core';

import { Hero } from '../../components/hero/hero/hero';
import { InfoRightImage } from '../../components/info-blocks/info-right-image/info-right-image';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    InfoRightImage
],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}