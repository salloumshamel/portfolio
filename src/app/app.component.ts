import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ThemeService} from './services/theme.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarRow} from '@angular/material/toolbar';
import {RouterOutlet} from '@angular/router';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [MatSlideToggleModule, MatButtonModule, MatToolbarRow, RouterOutlet]
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';
  sections = ['About Me', 'My Projects', 'Skills', 'Contact'];
  @ViewChild('box') box!: ElementRef;
  @ViewChild('parallax') parallax!: ElementRef;

  constructor(private themeService: ThemeService) {}

  ngAfterViewInit(): void {
    this.animateBox();
    this.initParallaxEffect();
    this.animateSectionsOnScroll();
  }

  changeTheme(): void {
    this.themeService.toggleTheme();
  }

  private animateBox(): void {
    gsap.to(this.box.nativeElement, {
      x: 300,
      rotation: 360,
      duration: 2,
      ease: 'power2.out',
      repeat: -1,
      yoyo: true,
    });
  }

  private initParallaxEffect(): void {
    const layers = this.parallax.nativeElement.children;

    window.addEventListener('mousemove', (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;

      gsap.to(layers, {
        x: (i: number) => x * 50 * (i + 1),
        y: (i: number) => y * 50 * (i + 1),
        duration: 0.5,
        ease: 'power1',
      });
    });
  }

  private animateSectionsOnScroll(): void {
    gsap.utils.toArray<HTMLElement>('.section').forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            end: 'top 25%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }
}
