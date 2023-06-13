import React, {useEffect} from 'react'
import styles from './Perfil.module.css'
import ProfileInformation from './ProfileInformation.jsx'
import ProfileSecurity from './ProfileSecurity.jsx'
import ProfileShopping from './ProfileShopping.jsx'
import ProfileOtherSettings from './ProfileOtherSettings.jsx'
import { useSelector, useDispatch } from "react-redux";
import { getUserById } from "../../Redux/actions";
import { auth } from '../../firebase.config';

const Perfil = () => {
  const [input, setInput] = React.useState('Informacion del usuario')
  const user = auth.currentUser;
  const handleInput = (e) => {
    e.preventDefault()
    setInput(e.target.outerText)
  }
  const dispatch = useDispatch();
  const userVerified = useSelector((state) => state.userVerified);
  const id = localStorage.getItem("id");
  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch]);
  return (
    <main>
      <div className={styles.Container}>
         <div className={styles.Container_primary}>
            {input === 'Informacion del usuario' && <ProfileInformation input={input} userVerified={userVerified} userFirebase={user}/>}
            {input === 'Ajustes de acceso y seguridad' && <ProfileSecurity input={input} userFirebase={user}/>}
            {input === 'Mis compras' && <ProfileShopping input={input} userFirebase={user}/>}
            {input === 'Otros ajustes' && <ProfileOtherSettings input={input} userFirebase={user}/>}
         </div>
         <aside className={styles.Container_secundary}>
          <header className={styles.globalNav}>
            <figure className={styles.globalNav_img}>
              <div className={styles.avatar_icon}>
                <img src={userVerified.imageUrl} alt="avatar" />
              </div>
            </figure>
            {/* INGRESAR UN SOBRENOMBRE AL USUARIO SI ES NECESARIO
            <div className={styles.globalNav_info}>
              <p className={styles.nickname}>{userVerified.name}</p>
            </div>
          */} 
          </header>
          <div className={styles.globalNav_body}>
            <ul className={styles.globalNav_list}>
              <li className={styles.globalNav_listItem} onClick={(e) => handleInput(e)}>
                <div className={styles.navigation}>
                    <svg viewBox='0 0 28 31' focusable='false' className={styles.icon}>
                      <path d="M14.2 18.8c-5.2 0-9.4-4.2-9.4-9.4S9 0 14.2 0s9.4 4.2 9.4 9.4-4.2 9.4-9.4 9.4zM.4 31c0-5.7 4.7-10.4 10.5-10.4h6.3c5.8 0 10.5 4.7 10.5 10.4H.4"></path>
                    </svg>
                    <span>Informacion del usuario</span>
                </div>
              </li>
              <li className={styles.globalNav_listItem} onClick={(e) => handleInput(e)}>
                <div className={styles.navigation}>
                    <svg viewBox='0 0 30 36' focusable='false' className={styles.icon}>
                    <path d="M27.46 13.549V10.35C27.46 4.64 22.653.008 16.72.008h-3.517C7.271.008 2.46 4.638 2.46 10.351v3.198H0V30.64C0 33.6 2.492 36 5.565 36h18.868C27.508 36 30 33.6 30 30.64V13.55h-2.54zM14.956 29.184c-2.306 0-4.174-1.801-4.174-4.021 0-2.22 1.868-4.02 4.174-4.02s4.176 1.8 4.176 4.02c0 2.22-1.87 4.02-4.176 4.02zM22.5 13.549h-15V10.35c0-3.214 2.715-5.828 6.054-5.828h2.89c3.339 0 6.056 2.614 6.056 5.828v3.198z" fillRule="evenodd"></path>
                    </svg>
                    <span>Ajustes de acceso y seguridad</span>
                </div>
              </li>
              <li className={styles.globalNav_listItem} onClick={(e) => handleInput(e)}>
                <div className={styles.navigation}>
                    <svg viewBox='0 0 31 34' focusable='false' className={styles.icon}>
                    <path d="M29.2 8.4h-6.1C22.5 4.3 20.6 0 15.5 0s-7 4.3-7.7 8.4h-6L.1 30.3c-.2 2 1.4 3.7 3.5 3.7h24c2 0 3.6-1.7 3.5-3.7L29.2 8.4zM15.5 3.1c2.4 0 3.9 1.8 4.5 5.3h-9c.6-3.5 2.1-5.3 4.5-5.3z"></path>                    </svg>
                    <span>Mis compras</span>
                </div>
              </li>
              <li className={styles.globalNav_listItem} onClick={(e) => handleInput(e)}>
                <div className={styles.navigation}>
                    <svg viewBox='0 0 38 36' focusable='false' className={styles.icon}>
                    <path d="M34.9 14.6h-2.7c-.3-1.5-.9-2.9-1.7-4.2l1.9-1.9c.6-.6.6-1.5 0-2.1l-2.3-2.3c-.6-.6-1.5-.6-2.1 0L26.1 6c-1.3-.8-2.7-1.4-4.2-1.7V1.6c0-.8-.7-1.5-1.5-1.5h-3.3c-.8 0-1.5.7-1.5 1.5v2.7c-1.5.4-2.9.9-4.2 1.7L9.5 4.1c-.6-.6-1.5-.6-2.1 0L5 6.4c-.6.6-.6 1.5 0 2.1l1.9 1.9c-.8 1.3-1.4 2.7-1.7 4.2H2.5c-.8 0-1.5.7-1.5 1.5v3.3c0 .8.7 1.5 1.5 1.5h2.7c.3 1.5.9 2.9 1.7 4.2L5 27c-.6.6-.6 1.5 0 2.1l2.3 2.3c.7.6 1.6.6 2.2 0l1.9-1.9c1.3.8 2.7 1.4 4.2 1.7V34c0 .8.7 1.5 1.5 1.5h3.3c.8 0 1.5-.7 1.5-1.5v-2.7c1.5-.3 2.9-.9 4.2-1.7l1.9 1.9c.6.6 1.5.6 2.1 0l2.3-2.3c.6-.6.6-1.5 0-2.1l-1.9-1.9c.8-1.3 1.4-2.7 1.7-4.2h2.7c.8 0 1.5-.7 1.5-1.5v-3.3c.1-.9-.6-1.6-1.5-1.6m-10.6 3.2c0 3.1-2.5 5.6-5.6 5.6-3.1 0-5.6-2.5-5.6-5.6 0-3.1 2.5-5.6 5.6-5.6 3.1-.1 5.6 2.5 5.6 5.6"></path>                    </svg>
                    <span>Otros ajustes</span>
                </div>
              </li>
            </ul>
          </div>
         </aside>
      </div>
    </main>
  )
}

export default Perfil
