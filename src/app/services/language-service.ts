import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  currentLanguage: string = 'en';

  constructor(private translateService: TranslateService) {
    this.initialize();
  }

  initialize() {
    this.currentLanguage = localStorage.getItem('lang') || 'en';
    document.dir = this.currentLanguage == 'en' ? 'ltr' : 'rtl';
    this.translateService.use(this.currentLanguage);
  }

  changeLanguage(lang: string) {
    localStorage.setItem("lang", lang);
    this.translateService.use(lang);
    document.dir = lang == 'ar' ? 'rtl' : 'ltr';
  }
}
