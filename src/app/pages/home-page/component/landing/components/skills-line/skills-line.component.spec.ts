import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsLineComponent } from './skills-line.component';

describe('SkillsLineComponent', () => {
  let component: SkillsLineComponent;
  let fixture: ComponentFixture<SkillsLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
