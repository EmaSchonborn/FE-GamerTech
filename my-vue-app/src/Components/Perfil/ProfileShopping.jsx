import React from 'react'
import styles from './ProfileShopping.module.css'

const ProfileShopping = ({input}) => {
  return (
    <h1 className={styles.title}>{input}</h1>
  )
}

export default ProfileShopping