import React from 'react'
import styles from '../styles/OgImage.module.css'

interface OgImageProps {
  title: string
  description: string
}

const OgImage: React.FC<OgImageProps> = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  )
}

export default OgImage
