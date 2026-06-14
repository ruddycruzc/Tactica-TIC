import { Component } from '@angular/core';
import { ContactForm } from '../../components/forms/contact-form/contact-form';
import { InfoLeftImage } from '../../components/info-blocks/info-left-image/info-left-image';
import { CardsCarousel } from '../../components/ui/carousel/cards-carousel/cards-carousel';
import { IconInfo } from '../../components/ui/cards/icon-info/icon-info';

@Component({
  selector: 'app-about',
  imports: [InfoLeftImage, IconInfo, CardsCarousel, ContactForm],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
