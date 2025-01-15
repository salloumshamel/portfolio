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
    // Timeline for animations
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.section1',
        start: 'top top',
        end: '+=50%',
        scrub: 1,
        markers: true,
      }
    });

    timeline.to('.box', {
      x: 500,
      duration: 3,
    }).to('.box', {
      y: 300,
      duration: 2,
    }).to('.box', {
      x: -125,
      duration: 2,
    });

    // Pinning the box after animation ends
    ScrollTrigger.create({
      trigger: '.box',
      start: 'center center',
      end: 'max',
      pin: true,
      pinSpacing: false,
      markers: true,
    });
  }

  portfolioAnimation() {

  }


  //light animation

  // @ViewChild('light') light!: ElementRef<HTMLDivElement>;
  //
  // onMouseMove(event: MouseEvent): void {
  //   const {clientX, clientY} = event;
  //
  //   // Animate the glowing light to follow the mouse
  //   gsap.to(this.light.nativeElement, {
  //     x: clientX,
  //     y: clientY,
  //     duration: 0.3,
  //     ease: 'power3.out',
  //     onUpdate: () => {
  //       // Optionally adjust glow intensity dynamically
  //       const distanceFromCenter = Math.abs(clientX - window.innerWidth / 2);
  //       const glowIntensity = Math.max(1, 1.5 - distanceFromCenter / 1000);
  //
  //       this.light.nativeElement.style.filter = `blur(${30 * glowIntensity}px)`;
  //       this.light.nativeElement.style.width = `${50 * glowIntensity}px`;
  //       this.light.nativeElement.style.height = `${50 * glowIntensity}px`;
  //     },
  //   });
  // }
}
