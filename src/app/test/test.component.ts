import {AfterViewInit, Component} from '@angular/core';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {MotionPathPlugin} from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements AfterViewInit {
  mouseX: number = 0;
  mouseY: number = 0;

  constructor() {

  }

  ngAfterViewInit(): void {
    // Pin Section 2 and animate text
    ScrollTrigger.create({
      trigger: '.section2',
      start: 'top top',
      end: '+=200%',
      pin: true,
      pinSpacing: false,
      markers: true,
    });

    // Animate the text mask effect
    gsap.to('.scroll-text', {
      scrollTrigger: {
        trigger: '.section2',
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
      backgroundPosition: '200% 0', // Animate background position for gradient
      ease: 'power2.out',
    });
  }


  portfolioAnimation() {

  }


}
