import styles from './css/projectManager.module.scss'

import Project from '../components/Project';

// *** PROJECT VARIABLES ***
// project 1
const project1Img = 'ste_optimized.PNG'
const project1Title = 'Stephen Day Architecture';
const project1Desc = `A website designed for architect Stephen Day, serving as a 
                      platform to showcase his work in preserving and reinterpreting 
                      historic architecture. The project featured the implementation 
                      of dynamic photo sizing within Webkey's custom content 
                      management system, requiring a combination of frontend 
                      proficiency and backend expertise.`;
const project1Stacks = ['JavaScript', 'Django', 'Docker', 'SCSS', 'Divio', 'HTML'];
const project1Link = 'https://ste.us.aldryn.io/';


// project 2
const project2Img = 'scp_optimized.PNG'
const project2Title = 'Sherman Community Players';
const project2Desc = `A web application showcasing the Sherman Community Players 
                      and their current shows, tickets, and general information. 
                      This full-stack application was developed in a remote agile 
                      environment with extensive planning through bi-weekly meetings.`;
const project2Stacks = ['JavaScript', 'Django', 'Docker', 'SCSS', 'Divio', 'HTML'];
const project2Link = 'https://www.scptheater.org/';


// project 3
const project3Img = 'wjn_optimized.PNG'
const project3Title = 'Wallace J. Nickols';
const project3Desc = `A full-stack application focused on Wallace J. Nickols' mission 
                      to save wildlife across the planet. This site involved the 
                      integration of over 400 blog posts, the integration of an 
                      Instagram API widget, and the creation of a contact page with 
                      reCAPTCHA functionality.`;
const project3Stacks = ['JavaScript', 'Django', 'Docker', 'SCSS', 'Divio', 'HTML'];
const project3Link = 'https://wjn.us.aldryn.io/';


export default function ProjectManager() {
  return (
    <>
        <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.projectContentWrap}>
            <div className={styles.project} id="project-1">
              <Project imgName={project1Img} classCaller={'project1Img'} title={project1Title} description={project1Desc} stacks={project1Stacks} projectLink={project1Link} />
            </div>
            <div className={styles.project} id="project-2">
              <Project imgName={project2Img} classCaller={'project2Img'} title={project2Title} description={project2Desc} stacks={project2Stacks} projectLink={project2Link} />
            </div>
            <div className={styles.project} id="project-3">
              <Project imgName={project3Img} classCaller={'project3Img'} title={project3Title} description={project3Desc} stacks={project3Stacks} projectLink={project3Link} />
            </div>
          </div>
    </>
  )
}
