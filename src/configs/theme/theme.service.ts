import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
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

}
