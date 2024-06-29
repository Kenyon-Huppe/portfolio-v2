import React from 'react'
import styles from './css/header.module.scss'

export default function Header() {
  return (
    <header className={`${styles.container} ${styles.header}`}>
      <nav>
          <ul>
              <li><a href="#about" className={styles.navLink} id="projects-link">About</a></li>
              <li><a href="#projects" className={styles.navLink} id="tech-link">Projects</a></li>
              <li><a href="#contact" className={styles.navLink} id="contact-link">Contact</a></li>
          </ul>
      </nav>
    </header>
  )
}
