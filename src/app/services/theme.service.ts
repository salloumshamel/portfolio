import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme: string;

  constructor() {
    this.currentTheme = localStorage.getItem("theme") || 'light';
    this.setTheme(this.currentTheme);
  }

  toggleTheme() {
    this.setTheme(this.currentTheme == 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: string) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.currentTheme = theme;
  }

}
