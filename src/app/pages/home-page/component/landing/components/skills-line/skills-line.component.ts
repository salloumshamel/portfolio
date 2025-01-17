import {AfterViewInit, Component} from '@angular/core';
import {SkillsAnimation} from './animation/skills-animation';

@Component({
  selector: 'app-skills-line',
  imports: [],
  templateUrl: './skills-line.component.html',
  styleUrl: './skills-line.component.scss'
})
export class SkillsLineComponent implements AfterViewInit {
  frontEndSkills: string[] = [
    "Angular",
    "React",
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "Tailwind",
    "GSAP",
    "Flutter",
    "RxJS",
  ];

  backendSkills: string[] = [
    "Spring",
    "Java",
    "MongoDB",
    "MySQL",
    "Node.js",
    "Express",
    "SQL",
  ];

  constructor() {
    this.frontEndSkills = this.multiplyArray(this.frontEndSkills, 3);
    this.backendSkills = this.multiplyArray(this.backendSkills, 3);
  }

  ngAfterViewInit() {
    SkillsAnimation.skillsAnimation();
  }

  private multiplyArray(array: string[], times: number): string[] {
    return Array(times).fill(array).flat();
  }
}
