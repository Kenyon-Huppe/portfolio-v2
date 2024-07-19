import React from 'react'
import styles from './css/card.module.scss'

export default function Card({imgName, classCaller}) {
  return (
    <div className={`${styles.container} ${styles[`${classCaller}Container`]}`}>
      <img src={`/images/${imgName}`} alt={imgName} className={`styles.${classCaller}`} />
    </div>
  )
}
