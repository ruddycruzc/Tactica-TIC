import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['es', 'en']);

    const savedLang = localStorage.getItem('language') || 'es';

    this.translate.setDefaultLang(savedLang);
    this.translate.use(savedLang);
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }
}
