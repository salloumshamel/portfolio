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
      markers: true,
    };

    const projectScrollTrigger = {
      trigger: landingSection,
      start: "30% top",
      end: "bottom center",
      triggerAction: "play reverse none none",
      scrub: 1,
      markers: true,
    };


    timeline.from(projectsSection, {
      xPercent: -100,
      ease: "sine.in",
      scrollTrigger: projectScrollTrigger
    }).to(landingSection, {
      yPercent: -75,
      ease: "power1.out",
      scrollTrigger: landingScrollTrigger
    });

    return timeline;
  }

  static sectionsScrollTriggerBetweenProjectsAndExperiences() {
    const projectsSection = getSectionId(SectionsNames.PROJECTS);
    const experienceSection = getSectionId(SectionsNames.EXPERIENCE);

    const timeline = gsap.timeline({});

    // Pinning the screen and translating the experience section
    const experienceScrollTrigger = {
      trigger: projectsSection,
      start: "bottom center",
      end: "+=100%", // Adjust the value for the desired pin duration
      scrub: 1,
      pin: true, // Pin the screen during this animation
      markers: true,
    };

    timeline
      .fromTo(
        experienceSection,
        {yPercent: +100},
        {
          yPercent: 0, // Bring into view
          ease: "power2.out",
          scrollTrigger: experienceScrollTrigger,
        }
      );

    return timeline;
  }


  static initSectionsScrollAnimations() {
    const masterTimeline = gsap.timeline();
    masterTimeline
      .add(this.sectionsScrollTriggerBetweenLandingAndProjects())
      .add(this.sectionsScrollTriggerBetweenProjectsAndExperiences(), "+=0"); // No delay between timelines
    return masterTimeline;
  }
}
