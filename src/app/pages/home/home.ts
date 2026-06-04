import { Component } from '@angular/core';

import { Hero } from '../../components/hero/hero/hero';
import { InfoRightImage } from '../../components/info-blocks/info-right-image/info-right-image';
import { ContactForm } from '../../components/forms/contact-form/contact-form';
import { VideoHero } from '../../components/hero/video-hero/video-hero';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    InfoRightImage,
    ContactForm,
    VideoHero
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
