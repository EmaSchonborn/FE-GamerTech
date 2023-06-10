import React from 'react'
import styles from './ProfileInformation.module.css'

const ProfileInformation = ({input, userVerified}) => {
  return (
    <>
      <h1 className={styles.title}>{input}</h1>
      <div className={styles.setting}>
        <div className={styles.setting_item}>
          <h2 className={styles.setting_title}>
            <span>Perfil</span>
            <button className={styles.setting_action}>Cambiar</button>
          </h2>
          <div className={styles.setting_detail}>
            <ul className={styles.setting_detail_list}>
              <li className={styles.setting_detail_item}>
                <p className={styles.setting_detail_label}>Nombre</p>
                <p className={styles.setting_detail_text}>{userVerified.name}</p>
              </li>
              <li className={styles.setting_detail_item}>
                <p className={styles.setting_detail_label}>Correo electrónico</p>
                <p className={styles.setting_detail_text}>{userVerified.email}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.setting_item}>
          <h2 className={styles.setting_title}>
            <span>Cambiar imagen del perfil</span>
            <button className={styles.setting_action}>Cambiar</button>
          </h2>
          <div className={styles.setting_detail}>
            <ul className={styles.setting_detail_list}>
              <li className={styles.setting_detail_item}>
                <p className={styles.setting_detail_label}>Subir archivo</p>
                <p className={styles.setting_detail_text}> upload</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileInformation;