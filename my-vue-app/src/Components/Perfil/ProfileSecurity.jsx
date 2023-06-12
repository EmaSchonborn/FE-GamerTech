import React from 'react'
import styles from './ProfileSecurity.module.css'

const ProfileSecurity = ({input}) => {
  return (
    <>
      <h1 className={styles.title}>{input}</h1>
      <div className={styles.setting}>
        <div className={styles.setting_item}>
          <h2 className={styles.setting_title}>
            <span>Cambiar contraseña</span>
            <button className={styles.setting_action}>Cambiar</button>
          </h2>
          <div className={styles.setting_detail}>
            <ul className={styles.setting_detail_list}>
              <li className={styles.setting_detail_item}>
                <p className={styles.setting_detail_label}>Contraseña</p>
                <p className={styles.setting_detail_text}>●●●●●●●●●</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileSecurity