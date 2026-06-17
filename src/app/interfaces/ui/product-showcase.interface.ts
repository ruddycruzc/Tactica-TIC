export interface ProductCardContent {
  titleKey: string;
  descriptionKey: string;
}

export interface ProductShowcaseContent {
  products: ProductCardContent[];

  sideCard: {
    titleKey: string;
    emphasisKey: string;
    buttonLabel: string;
  };
}