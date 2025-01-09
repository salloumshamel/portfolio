import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ThemeToggleComponent} from '../components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-classic',
  imports: [
    RouterOutlet,
    ThemeToggleComponent
  ],
  templateUrl: './classic.component.html',
  styleUrl: './classic.component.scss'
})
export class ClassicComponent {
  constructor() {
  }
}
