import { Component } from '@angular/core';

import { Hero } from '../../components/hero/hero/hero';
import { ContactForm } from '../../components/forms/contact-form/contact-form';
import { VideoHero } from '../../components/hero/video-hero/video-hero';
import { ProjectCards } from '../../components/sections/project-cards/project-cards';
import { Project2Section } from '../../components/sections/project2-section/project2-section';
import { CardsCarousel } from '../../components/ui/carousel/cards-carousel/cards-carousel';
import { LogosCarousel } from '../../components/ui/carousel/logos-carousel/logos-carousel';
import { FaqSection } from '../../components/sections/faq-section/faq-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    ProjectCards,
    ContactForm,
    VideoHero,
    Project2Section,
    CardsCarousel,
    LogosCarousel,
    FaqSection
],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
