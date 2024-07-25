import React from 'react'
import styles from './css/project.module.scss'

import Card from './Card'

export default function Project({ imgName, classCaller, title, description, stacks, projectLink }) {
  return (
    <div className={styles.projectContainer}>
        <a href={projectLink} target='_blank' id={styles.projectLink}>
            <Card imgName={imgName} classCaller={classCaller} />
        </a>
        <div className={styles.textSection}>
            <div className={styles.textBorder}>
                <h3>{title}</h3>
                <div className={styles.descriptionSection}>
                    <p>{description}</p>
                </div>
                <div className={styles.stacksList}>
                    {stacks.map((element, id) => (
                        <li key={id}>{element}</li>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
