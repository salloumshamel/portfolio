import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ThemeToggleComponent} from '../components/theme-toggle/theme-toggle.component';
import {LanguageToggleComponent} from '../components/langauge-toggle/language-toggle.component';
import {TranslatePipe} from '@ngx-translate/core';
import gsap from 'gsap';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';

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
    gsap.to(window, {duration: 2, scrollTo: "#section1"});
  }

  onClickPortfolio() {
    gsap.to(window, {duration: 2, scrollTo: "#section2"});
  }

  onClickAbout() {
    gsap.to(window, {duration: 2, scrollTo: "#section3"});
  }

  onClickExperience() {
  }
}
