import { Component } from '@angular/core';

import { FinalCtaSection } from '../../components/sections/final-cta-section/final-cta-section';
import { FaqSection } from '../../components/sections/faq-section/faq-section';
import { HeroSection } from '../../components/sections/hero-section/hero-section';
import { HomeProjectsSection } from '../../components/sections/home-projects-section/home-projects-section';
import { InfoLeftSection } from '../../components/sections/info-left-section/info-left-section';
import { LogosSection } from '../../components/sections/logos-section/logos-section';
import { ProductShowcaseSection } from '../../components/sections/product-showcase-section/product-showcase-section';
import { TeamCarouselSection } from '../../components/sections/team-carousel-section/team-carousel-section';
import { TextInfoSection } from '../../components/sections/text-info-section/text-info-section';
import { VideoHeroSection } from '../../components/sections/video-hero-section/video-hero-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSection,
    ProductShowcaseSection,
    VideoHeroSection,
    TextInfoSection,
    InfoLeftSection,
    HomeProjectsSection,
    FinalCtaSection,
    TeamCarouselSection,
    LogosSection,
    FaqSection
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
