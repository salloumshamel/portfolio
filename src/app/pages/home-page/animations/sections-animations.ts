import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Flip} from 'gsap/Flip';
import {getSectionId, SectionsNames} from '../utils/sections-names';

gsap.registerPlugin(Flip, ScrollTrigger);

export class SectionsAnimation {

  static sectionsScrollTriggerBetweenLandingAndProjects() {
    const projectsSection = getSectionId(SectionsNames.PROJECTS);
    const experienceSection = getSectionId(SectionsNames.EXPERIENCE);
    const landingSection = getSectionId(SectionsNames.LANDING);
    const timeline = gsap.timeline({});

    const landingScrollTrigger = {
      trigger: landingSection,
      start: "center top",
      end: "bottom+=95% top",
      scrub: 1,
      markers: false,
    };

    const projectScrollTrigger = {
      trigger: landingSection,
      start: "30% top",
      end: "bottom center",
      triggerAction: "play reverse none none",
      scrub: 1,
      markers: false,
    };
    timeline.from(projectsSection, {
      xPercent: -100,
      ease: "sine.in",
      scrollTrigger: projectScrollTrigger
    }).to(landingSection, {
      yPercent: -50,
      ease: "power1.out",
      scrollTrigger: landingScrollTrigger
    });

    return timeline;
  }
}
