import React from 'react'
import styles from './ProfileInformation.module.css'
import {uploadFile} from '../../firebase.config'
import {useDispatch} from 'react-redux'
import { modifyUsers } from "../../Redux/actions";

const ProfileInformation = ({input, userVerified}) => {
  const [file, setFile] = React.useState(null)
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (!file) throw new Error('No hay archivo')
      const result = await uploadFile(file)
      dispatch(modifyUsers({
        'id' : userVerified.user.id,
        'name' : userVerified.user.name,
        'email' : userVerified.user.email,
        'password' : userVerified.user.password,
        'isActive' : userVerified.user.isActive,
        'isAdmin' : userVerified.user.isAdmin,
        'imageUrl' : result
      }))
      setFile(null)
    } catch (error) {
      alert('Error al subir la imagen')
    }
  }
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
        <form className={styles.setting_item} onSubmit={handleSubmit}>
          <h2 className={styles.setting_title}>
            <span>Cambiar imagen del perfil</span>
            <button className={styles.setting_action}>Subir Imagen</button>
          </h2>
          <div className={styles.setting_detail}>
            <ul className={styles.setting_detail_list}>
              <li className={styles.setting_detail_item}>
                <p className={styles.setting_detail_label}>
                  <input type='file' onChange={e => setFile(e.target.files[0])} required/>
                </p>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </>
  )
}

export default ProfileInformation;