import React from 'react'
import styles from './css/card.module.scss'

export default function Card({image}) {
  return (
    <div className={styles.container}>
      <img src={image} alt={image} />
    </div>
  )
}
