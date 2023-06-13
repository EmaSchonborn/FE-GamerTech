import React from 'react'
import styles from './ProfileSecurity.module.css'
import {updatePasswordFirebase} from '../../firebase.config'

const ProfileSecurity = ({input, userFirebase}) => {
  const [option, setOption] = React.useState({change: 'false'})

  const handleChange = (e) => {
    setOption({
      ...option,
      [e.target.name]: e.target.value
    })
  }

  const handleUpload = (e) =>{
    try {
      e.preventDefault();
      updatePasswordFirebase(userFirebase.email)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <h1 className={styles.title}>{input}</h1>
      <div className={styles.setting}>
        <div className={styles.setting_item}>
          <h2 className={styles.setting_title}>
            <span>Cambiar contraseña</span>
            {option.change === 'false' ?
              <button className={styles.setting_action} onClick={handleChange} name='change' value={true}>Cambiar</button>
            :
            <button className={styles.setting_action} onClick={handleUpload}>Enviar</button>
            }
          </h2>
          <div className={styles.setting_detail}>
            <ul className={styles.setting_detail_list}>
              { option.change === 'false' ?
              <li className={styles.setting_detail_item}>
                <p className={styles.setting_detail_label}>Contraseña</p>
                <p className={styles.setting_detail_text}>●●●●●●●●●</p>
              </li>
              :
              <li className={styles.setting_detail_item}>
                <p className={styles.setting_detail_label}>Restablecer contraseña</p>
                <p className={styles.setting_detail_text}>Se enviará un mensaje a su correo electrónico para restablecer su contraseña,
                por favor dar click al boton Enviar.</p>
              </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileSecurity