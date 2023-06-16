import React, { useState } from "react";
import styles from "./ProfileOtherSettings.module.css";

const ProfileOtherSettings = ({ input }) => {
  const [seccionActive, setSeccionAtive] = useState("");

  const toggleSeccion = (seccion) => {
    if (seccion === seccionActive) {
      setSeccionAtive("");
    } else {
      setSeccionAtive(seccion);
    }
  };

  return (
    <>
      <h1 className={styles.title}>{input}</h1>
      <div className={styles.setting}>
        <div className={styles.legalSection}>
          <h2
            className={styles.titulo}
            onClick={() => toggleSeccion("anuncios")}
          >
            Informacion sobre Anuncios
          </h2>
          {seccionActive === "anuncios" && (
            <div className={styles.contenido}>
              <p>Informacion sobre anuncios...</p>
            </div>
          )}

          <h2
            className={styles.titulo}
            onClick={() => toggleSeccion("cookies")}
          >
            Uso de Cookies
          </h2>
          {seccionActive === "cookies" && (
            <div className={styles.contenido}>
              <p>Informacion sobre el uso de cookies....</p>
            </div>
          )}

          <h2
            className={styles.titulo}
            onClick={() => toggleSeccion("privacidad")}
          >
            Politica de Privacidad
          </h2>
          {seccionActive === "privacidad" && (
            <div className={styles.contenido}>
              <p>Informacion sobre la politica de privacidad...</p>
            </div>
          )}

          <h2
            className={styles.titulo}
            onClick={() => toggleSeccion("terminos")}
          >
            Terminos de servicio
          </h2>
          {seccionActive === "terminos" && (
            <div className={styles.contenido}>
              <p>Informacion sobre los terminos de servicio...</p>
            </div>
          )}

          <h2 className={styles.titulo} onClick={() => toggleSeccion("legal")}>
            Avisos legales
          </h2>
          {seccionActive === "legal" && (
            <div className={styles.contenido}>
              <p>Informacion sobre los Avisos legales...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileOtherSettings;
