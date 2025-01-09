import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemeService} from '../../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent implements OnInit {
  constructor(private themeService: ThemeService) {
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  getCurrentTheme() {
    return this.themeService.currentTheme;
  }

  isDarkTheme():boolean {
   return  this.getCurrentTheme() === 'dark';
  }

  ngOnInit() {
  }
}
