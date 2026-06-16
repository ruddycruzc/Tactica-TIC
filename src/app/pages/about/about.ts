import { Component } from '@angular/core';

import { AboutStorySection } from '../../components/sections/about-story-section/about-story-section';
import { ContactFormSection } from '../../components/sections/contact-form-section/contact-form-section';
import { HeroAboutusSection } from '../../components/sections/hero-aboutus-section/hero-aboutus-section';
import { TeamCarouselSection } from '../../components/sections/team-carousel-section/team-carousel-section';

@Component({
  selector: 'app-about',
  imports: [
    HeroAboutusSection,
    AboutStorySection,
    TeamCarouselSection,
    ContactFormSection
  ],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
