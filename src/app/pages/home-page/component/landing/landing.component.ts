import {AfterViewInit, Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {ThemeService} from '../../../../services/theme.service';
import {CommonModule} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';
import {gsap} from 'gsap';

@Component({
  selector: 'app-landing',
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit, AfterViewInit {
  icons: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  iconElements: any[] = [];
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

  }

  ngAfterViewInit() {
    this.animateIcons();
  }

  // Function to animate icons initially
  animateIcons(): void {
    // Select all the icons after the view has been initialized
    this.iconElements = [...document.querySelectorAll('.ps-icon')];

    this.iconElements.forEach((icon: any) => {
      // Set initial random position for each icon
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;

      // Apply initial random positioning using GSAP
      gsap.set(icon, {x: randomX, y: randomY, rotation: Math.random() * 360});  // Random rotation at start
    });
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.iconElements.length > 0) {
      const mouseX = event.clientX;
      const rotation = ((mouseX / window.innerWidth) * 40) - 20; // Rotation range between -20 and 20 degrees
      this.iconElements.forEach((icon: ElementRef) => {
        gsap.to(icon, {
          rotation: rotation,
          duration: 0.2,
          ease: 'sine.inOut',
        });
      });
    }
  }

}
