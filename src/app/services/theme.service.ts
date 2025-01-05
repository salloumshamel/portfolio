import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  constructor() {
    const savedTheme = localStorage.getItem('theme') || 'goldenSands';
    this.switchTheme(savedTheme);
  }

  private darkThemeClass = 'dark';

  toggleTheme() {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains(this.darkThemeClass)) {
      htmlElement.classList.remove(this.darkThemeClass);
      localStorage.setItem('theme', 'light');
    } else {
      htmlElement.classList.add(this.darkThemeClass);
      localStorage.setItem('theme', 'dark');
    }
  }

  loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add(this.darkThemeClass);
    }
  }

  private currentTheme = 'goldenSands';


  switchTheme(theme: string): void {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.currentTheme = theme;
  }

  getTheme(): string {
    return this.currentTheme;
  }
}
