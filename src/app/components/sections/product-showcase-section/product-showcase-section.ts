import { Component } from '@angular/core';

import { BackgroundColorInfoCard } from '../../ui/cards/background-color-info-card/background-color-info-card';
import { ExpandableImageCard } from '../../ui/cards/expandable-image-card/expandable-image-card';

type ProductCard = {
  title: string;
  description: string;
  image: string;
};

@Component({
  selector: 'app-product-showcase-section',
  standalone: true,
  imports: [
    ExpandableImageCard,
    BackgroundColorInfoCard
  ],
  templateUrl: './product-showcase-section.html',
  styleUrl: './product-showcase-section.css',
})
export class ProductShowcaseSection {
  activeIndex = 0;

  readonly products: ProductCard[] = [
    {
      title: 'Verifactu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/assets/images/Porducto.jpg',
    },
    {
      title: 'Nombre de Producto',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/assets/images/Porducto2.png',
    },
  ];

  setActive(index: number): void {
    this.activeIndex = index;
  }
}
