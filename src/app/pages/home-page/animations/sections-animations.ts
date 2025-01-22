import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Flip} from 'gsap/Flip';

gsap.registerPlugin(Flip, ScrollTrigger);

export class SectionsAnimation {

  static projectsScrollTrigger() {
    ScrollTrigger.create({
      trigger: '#projects',
      pin: true,
      start: '56px 56px',
      end: 'bottom top',
      pinSpacing: false,
      immediateRender: true,
      // markers: true,
    })
  }

  static testAnimation() {

  }
}
