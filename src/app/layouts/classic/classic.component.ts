import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ThemeToggleComponent} from '../components/theme-toggle/theme-toggle.component';
import {LanguageToggleComponent} from '../components/langauge-toggle/language-toggle.component';
import {TranslatePipe} from '@ngx-translate/core';
import gsap from 'gsap';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import {getSectionId, SectionsNames} from '../../pages/home-page/utils/sections-names';

gsap.registerPlugin(ScrollToPlugin)

@Component({
  selector: 'app-classic',
  imports: [
    RouterOutlet,
    ThemeToggleComponent,
    LanguageToggleComponent,
    TranslatePipe
  ],
  templateUrl: './classic.component.html',
  styleUrl: './classic.component.scss'
})
export class ClassicComponent {
  constructor() {
  }

  onClickHome() {
    gsap.to(window, {scrollTo: getSectionId(SectionsNames.HOME)});
  }

  onClickPortfolio() {
    gsap.to(window, {scrollTo: getSectionId(SectionsNames.PROJECTS)});
  }

  onClickAbout() {
    gsap.to(window, {scrollTo: getSectionId(SectionsNames.EXPERIENCE)});
  }

  onClickExperience() {
  }
}
