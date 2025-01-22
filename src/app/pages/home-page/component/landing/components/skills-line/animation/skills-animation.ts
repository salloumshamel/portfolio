import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class SkillsAnimation {
  static skillsAnimation(): void {
    // Select all skill elements from both rows
    const firstRow = gsap.utils.toArray('.skill1') as HTMLElement[];
    const secondRow = gsap.utils.toArray('.skill2') as HTMLElement[];

    // Infinite scrolling for the first row (right-to-left)
    gsap.to('.first-skills-row', {
      xPercent: -5,
      scrollTrigger: {
        trigger: '.skills-container',
        start: 'top 90%',
        end: 'bottom top',
        scrub: 4,
        // markers: true,
      },
    });

    gsap.to('.second-skills-row', {
      xPercent: +5,
      scrollTrigger: {
        trigger: '.skills-container',
        start: 'top 90%',
        end: 'bottom top',
        scrub: 4,
        // markers: true,
      },
    });
  }
}
