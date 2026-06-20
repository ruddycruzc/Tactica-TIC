import { Component } from '@angular/core';

import { BackgroundColorInfoCard } from '../../ui/cards/background-color-info-card/background-color-info-card';
import { ExpandableImageCard } from '../../ui/cards/expandable-image-card/expandable-image-card';
import { TranslateModule } from '@ngx-translate/core';
import { PRODUCTS } from '../../../data/products/products.data';

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
  activeIndex = 1;

readonly products = PRODUCTS; //CONSUME LOS DATOS QUE ESTAN EN LA CARPETA data/products/

  setActive(index: number): void {
    this.activeIndex = index;
  }

  openProduct(url: string): void {

    window.open(
      url,
      '_blank',
      'noopener,noreferrer'
    );
}
}
