import { Component } from '@angular/core';

import { Navbar } from '../../components/layout/navbar/navbar';
import { Footer } from '../../components/layout/footer/footer';

import { Hero } from '../../components/hero/hero/hero';
import { CardsCarousel } from '../../components/carousel/cards-carousel/cards-carousel';
import { TeamCard } from '../../components/cards/team-card/team-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    CardsCarousel,
    TeamCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}