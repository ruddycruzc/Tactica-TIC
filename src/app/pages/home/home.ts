import { Component } from '@angular/core';

import { Navbar } from '../../components/layout/navbar/navbar';
import { Footer } from '../../components/layout/footer/footer';

import { Hero } from '../../components/hero/hero/hero';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}