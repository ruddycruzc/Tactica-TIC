import { Component } from '@angular/core';
import { Navbar } from '../../components/layout/navbar/navbar';
import { Body } from '../../components/layout/body/body';
import { Footer } from '../../components/layout/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, Body, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}