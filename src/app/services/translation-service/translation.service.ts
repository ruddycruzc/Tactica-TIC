import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { esTranslations } from '../../translations/es';
import { enTranslations } from '../../translations/en';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  currentLanguage = signal<string>('es');

  constructor(
    private translate: TranslateService
  ) {

    this.translate.setTranslation(
      'es',
      esTranslations
    );

    this.translate.setTranslation(
      'en',
      enTranslations
    );

    this.translate.addLangs([
      'es',
      'en'
    ]);

    const savedLanguage =
      localStorage.getItem('language') || 'es';

    this.changeLanguage(savedLanguage);
  }

  changeLanguage(language: string): void {

    this.currentLanguage.set(language);

    this.translate.use(language);

    localStorage.setItem(
      'language',
      language
    );
  }

  toggleLanguage(): void {

    const nextLanguage =
      this.currentLanguage() === 'es'
        ? 'en'
        : 'es';

    this.changeLanguage(nextLanguage);
  }
}