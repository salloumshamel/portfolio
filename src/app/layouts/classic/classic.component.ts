import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ThemeToggleComponent} from '../components/theme-toggle/theme-toggle.component';
import {LanguageToggleComponent} from '../components/langauge-toggle/language-toggle.component';

@Component({
  selector: 'app-classic',
  imports: [
    RouterOutlet,
    ThemeToggleComponent,
    LanguageToggleComponent
  ],
  templateUrl: './classic.component.html',
  styleUrl: './classic.component.scss'
})
export class ClassicComponent {
  constructor() {
  }
}
