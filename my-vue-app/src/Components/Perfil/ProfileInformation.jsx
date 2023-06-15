import React from 'react'
import styles from './ProfileInformation.module.css'
import {uploadFile} from '../../firebase.config'
import {useDispatch} from 'react-redux'
import { modifyUsers } from "../../Redux/actions";

const ProfileInformation = ({input, userVerified}) => {
  const [username, setUsername] = React.useState('')
  const [file, setFile] = React.useState(null)
  const [change, setChange] = React.useState(false)
  const dispatch = useDispatch()

  const handleUsername = (e) => {
    e.preventDefault()
    setUsername(e.target.value)
  }

  const handleChange = (e) => {
    e.preventDefault()
    setChange(!change)
  }

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if(!change && username.length === 0){
        const result = await uploadFile(file)
        if(!result) throw new Error('Error al subir la imagen')
        dispatch(modifyUsers({
          'id' : userVerified.id,
          'name' : userVerified.name,
          'email' : userVerified.email,
          'password' : userVerified.password,
          'isActive' : userVerified.isActive,
          'isAdmin' : userVerified.isAdmin,
          'imageUrl' : result
        }))
        setFile(null)
      }else if(!file){
          dispatch(modifyUsers({
          'id' : userVerified.id,
          'name' : username,
          'email' : userVerified.email,
          'password' : userVerified.password,
          'isActive' : userVerified.isActive,
          'isAdmin' : userVerified.isAdmin,
          'imageUrl' : userVerified.imageUrl
        }))
        setChange(!change)
      }else{
        const result = await uploadFile(file)
        if(!result) throw new Error('Error al subir la imagen')
        dispatch(modifyUsers({
          'id' : userVerified.id,
          'name' : username,
          'email' : userVerified.email,
          'password' : userVerified.password,
          'isActive' : userVerified.isActive,
          'isAdmin' : userVerified.isAdmin,
          'imageUrl' : result
        }))
        setFile(null)
      }
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
            {!change ?
            <button className={styles.setting_action} onClick={(e) => handleChange(e)}>Cambiar</button>
            :
            <button className={styles.setting_action} onClick={(e) => handleSubmit(e)}>Modificar</button>
            }
          </h2>
          <div className={styles.setting_detail}>
            {!change ?
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
            :
            <ul className={styles.setting_detail_list}>
              <li className={styles.setting_detail_item}>
                <p className={styles.setting_detail_label}>Nombre</p>
                <input type='text' className={styles.setting_detail_text} style={{border:'solid 1px black'}} onChange={(e) => handleUsername(e)}></input>
              </li>
            </ul>
            }
          </div>
        </div>
        <form className={styles.setting_item} onSubmit={handleSubmit}>
          <h2 className={styles.setting_title}>
            <span>Cambiar imagen del perfil</span>
            <button className={styles.setting_action}>Subir Inagen</button>
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