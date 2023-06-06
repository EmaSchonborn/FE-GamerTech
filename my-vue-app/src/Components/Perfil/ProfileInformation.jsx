import React from 'react'
import styles from './ProfileInformation.module.css'

const ProfileInformation = ({input}) => {
  return (
    <h1 className={styles.title}>{input}</h1>
  )
}

export default ProfileInformation;