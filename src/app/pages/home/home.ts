import { Component } from '@angular/core';

import { Hero } from '../../components/hero/hero/hero';
import { FinalCtaSection } from '../../components/sections/final-cta-section/final-cta-section';
import { FaqSection } from '../../components/sections/faq-section/faq-section';
import { HomeProjectsSection } from '../../components/sections/home-projects-section/home-projects-section';
import { InfoLeftSection } from '../../components/sections/info-left-section/info-left-section';
import { ProductShowcaseSection } from '../../components/sections/product-showcase-section/product-showcase-section';
import { TextInfoSection } from '../../components/sections/text-info-section/text-info-section';
import { VideoHeroSection } from '../../components/sections/video-hero-section/video-hero-section';
import { CardsCarousel } from '../../components/ui/carousel/cards-carousel/cards-carousel';
import { LogosCarousel } from '../../components/ui/carousel/logos-carousel/logos-carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    ProductShowcaseSection,
    VideoHeroSection,
    TextInfoSection,
    InfoLeftSection,
    HomeProjectsSection,
    FinalCtaSection,
    CardsCarousel,
    LogosCarousel,
    FaqSection
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
