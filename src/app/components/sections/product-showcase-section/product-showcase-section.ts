import { Component } from '@angular/core';

import { BackgroundColorInfoCard } from '../../ui/cards/background-color-info-card/background-color-info-card';
import { ExpandableImageCard } from '../../ui/cards/expandable-image-card/expandable-image-card';
import { TranslateModule } from '@ngx-translate/core';

type ProductCard = {
  titleKey: string;
  descriptionKey: string;
  image: string;
};

@Component({
  selector: 'app-product-showcase-section',
  standalone: true,
  imports: [
    ExpandableImageCard,
    BackgroundColorInfoCard,
    TranslateModule
  ],
  templateUrl: './product-showcase-section.html',
  styleUrl: './product-showcase-section.css',
})
export class ProductShowcaseSection {
  activeIndex = 0;

readonly products: ProductCard[] = [
  {
    titleKey: 'HOME.PRODUCT_SHOWCASE.PRODUCT_1.TITLE',
    descriptionKey:
      'HOME.PRODUCT_SHOWCASE.PRODUCT_1.DESCRIPTION',

    image: '/assets/images/product-showcase/Porducto.jpg',
  },
  {
    titleKey: 'HOME.PRODUCT_SHOWCASE.PRODUCT_2.TITLE',
    descriptionKey:
      'HOME.PRODUCT_SHOWCASE.PRODUCT_2.DESCRIPTION',

    image: '/assets/images/product-showcase/Porducto2.png',
  },
];

  setActive(index: number): void {
    this.activeIndex = index;
  }
}
