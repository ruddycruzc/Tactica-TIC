import { Component } from '@angular/core';

import { Hero } from '../../components/hero/hero/hero';
import { InfoRightImage } from '../../components/info-blocks/info-right-image/info-right-image';
import { ContactForm } from '../../components/forms/contact-form/contact-form';
import { VideoHero } from '../../components/hero/video-hero/video-hero';
import { CaseStudiesSection } from "../../components/sections/case-studies-section/case-studies-section";
import { CardsCarousel } from '../../components/carousel/cards-carousel/cards-carousel';
import { LogosCarousel } from "../../components/carousel/logos-carousel/logos-carousel";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    InfoRightImage,
    ContactForm,
    VideoHero,
    CaseStudiesSection,
    CardsCarousel,
    LogosCarousel
],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
