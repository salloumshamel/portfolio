export enum SectionsNames {
  ABOUT_ME = 'aboutMe',
  PROJECTS = 'projects',
  HOME = 'home',
  EXPERIENCE = 'experience',
  LANDING = 'landing',

}

export const getSectionId = (sectionName: SectionsNames) => {
  return "#" + sectionName;
}
