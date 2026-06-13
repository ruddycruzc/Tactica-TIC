import { Component } from '@angular/core';

import { ContactForm } from '../../components/forms/contact-form/contact-form';
import { Hero } from '../../components/hero/hero/hero';
import { VideoHero } from '../../components/hero/video-hero/video-hero';
import { FinalCtaSection } from '../../components/sections/final-cta-section/final-cta-section';
import { HomeProjectsSection } from '../../components/sections/home-projects-section/home-projects-section';
import { InfoLeftComponent } from '../../components/sections/info-left/info-left-component/info-left-component';
import { ProductShowcaseSection } from '../../components/sections/product-showcase-section/product-showcase-section';
import { TextInfoSection } from '../../components/sections/text-info-section/text-info-section';
import { CardsCarousel } from '../../components/ui/carousel/cards-carousel/cards-carousel';
import { LogosCarousel } from '../../components/ui/carousel/logos-carousel/logos-carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    ProductShowcaseSection,
    VideoHero,
    TextInfoSection,
    InfoLeftComponent,
    HomeProjectsSection,
    FinalCtaSection,
    CardsCarousel,
    LogosCarousel,
    ContactForm
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  readonly infoLeftParagraphs = [
    'Nos negamos a ver el código como algo frío. Cada proyecto social que asumimos busca resolver retos reales y humanos.',
    'Tratamos cada línea de desarrollo con la responsabilidad moral que merece el impacto comunitario.'
  ];
}
