import styles from './css/projectManager.module.scss'

import Project from '../components/Project';

// *** PROJECT VARIABLES ***
// project 1
const project1Img = 'scp_optimized.PNG'
const project1Title = 'Sherman Community Players';
const project1Desc = `A web application showcasing the Sherman Community Players 
                      and their current shows, tickets, and general information. 
                      This full-stack application was developed in a remote agile 
                      environment with extensive planning through bi-weekly meetings.`;
const project1Stacks = ['JavaScript', 'Django', 'Docker', 'SCSS', 'Divio', 'HTML'];

// project 2
const project2Img = 'wjn_optimized.PNG'
const project2Title = 'Wallace J. Nickols';
const project2Desc = `A full-stack application focused on Wallace J. Nickols' mission 
                      to save wildlife across the planet. This site involved the 
                      integration of over 400 blog posts, the integration of an 
                      Instagram API widget, and the creation of a contact page with 
                      reCAPTCHA functionality.`;
const project2Stacks = ['JavaScript', 'Django', 'Docker', 'SCSS', 'Divio', 'HTML'];

// project 3
const project3Img = 'botwQuiz_optimized.PNG'
const project3Title = 'Breath of the Wild Character Quiz';
const project3Desc = `This component-focused site was a personal project instantiated 
                      to hone my skills with React by passing data between input values 
                      and performing a series of algorithmic calculations to designate a 
                      specific output.`;
const project3Stacks = ['React', 'Styled Components', 'CSS'];

export default function ProjectManager() {
  return (
    <>
        <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.projectContentWrap}>
            <div className={styles.project} id="project-1">
              <Project imgName={project1Img} classCaller={'project1Img'} title={project1Title} description={project1Desc} stacks={project1Stacks} />
            </div>
            <div className={styles.project} id="project-2">
              <Project imgName={project2Img} classCaller={'project2Img'} title={project2Title} description={project2Desc} stacks={project2Stacks} />
            </div>
            <div className={styles.project} id="project-3">
              <Project imgName={project3Img} classCaller={'project3Img'} title={project3Title} description={project3Desc} stacks={project3Stacks} />
            </div>
          </div>
    </>
  )
}
