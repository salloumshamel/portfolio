import {Component, OnInit} from '@angular/core';
import {ThemeService} from '../../../../services/theme.service';
import {CommonModule} from '@angular/common';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-landing',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {

  constructor(private themeService: ThemeService, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit(): void {
  }

  changeLanguage(language: string): void {
    this.translate.use(language);
  }

  changeTheme(theme: string): void {
    this.themeService.switchTheme(theme);
  }
}
