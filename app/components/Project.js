import React from 'react'
import styles from './css/project.module.css'

import Card from './Card'

export default function Project({image, title, description, stacks}) {
  return (
    <>
        <Card image={image} />
        <div className={styles.textSection}>
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
    </>
  )
}
