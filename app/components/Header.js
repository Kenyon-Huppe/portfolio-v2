import React from 'react'
import styles from './css/header.module.scss'

export default function Header() {
  return (
    <header className={`${styles.container} ${styles.header}`}>
      <nav>
          <ul>
              <li className={styles.aboutContainer}><a href="#about" className={`${styles.navLink} ${styles.aboutLink}`}>About</a></li>
              <li className={styles.projectsContainer}><a href="#projects" className={`${styles.navLink} ${styles.projectsLink}`}>Projects</a></li>
              <li className={styles.contactContainer}><a href="#contact" className={`${styles.navLink} ${styles.contactLink}`}>Contact</a></li>
          </ul>
      </nav>
    </header>
  )
}
