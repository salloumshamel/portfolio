import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  currentLanguage: string = 'en';

  constructor(private translateService: TranslateService) {
    this.initialize();
    this.onLanguageChange();
  }

  initialize() {
    this.currentLanguage = localStorage.getItem('lang') || 'en';
    this.translateService.use(this.currentLanguage);
    this.addDocumentAttributes(this.currentLanguage);
  }

  changeLanguage(lang: string) {
    localStorage.setItem("lang", lang);
    this.translateService.use(lang);
    this.addDocumentAttributes(lang);
  }

  addDocumentAttributes(lang: string) {
    document.dir = lang == 'ar' ? 'rtl' : 'ltr';
  }

  onLanguageChange() {
    this.translateService.onLangChange.subscribe(lang => {
      this.currentLanguage = lang.lang;
    })
  }
}
