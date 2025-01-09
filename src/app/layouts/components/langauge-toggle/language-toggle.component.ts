import { Component } from '@angular/core';
import {LanguageService} from '../../../services/language-service';


@Component({
  selector: 'app-language-toggle',
  templateUrl: './language-toggle.component.html',
  styleUrls: ['./language-toggle.component.scss']
})
export class LanguageToggleComponent {
  currentLanguage: string;

  constructor(private languageService: LanguageService) {
    this.currentLanguage = this.languageService.currentLanguage;
  }

  toggleLanguage() {
    // Switch between 'en' and 'ar'
    const newLanguage = this.currentLanguage === 'en' ? 'ar' : 'en';
    this.languageService.changeLanguage(newLanguage);
    this.currentLanguage = newLanguage; // Update locally
  }
}
