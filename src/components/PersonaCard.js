import React from "react";
import styles from "../styles/PersonaCard.module.css";
import iconUser from "../images/icon-user.png";

const PersonaCard = (props) => {
    return(<div className={styles["card-container"]}>
            <div className={styles["persona-icon"]}>
                <img className={styles["icon"]} src={iconUser} alt=""/>
            </div>
            <div className={styles["card"]}>
                <div className={styles["card-info"]}>
                    <p className={styles["info-title"]}>Nombre: </p> 
                    <p className={styles["info"]}>{props.data.nombre}</p>
                </div>
                <div className={styles["card-info"]}>
                    <p className={styles["info-title"]}>Edad: </p> 
                    <p className={styles["info"]}>{props.data.edad}</p>
                </div>
                <div className={styles["card-info"]}>
                    <p className={styles["info-title"]}>Dni: </p> 
                    <p className={styles["info"]}>{props.data.dni}</p>
                </div>
                <div className={styles["card-info"]}>
                    <p className={styles["info-title"]}>Sexo: </p> 
                    <p className={styles["info"]}>{props.data.sexo}</p>
                </div>
            </div>
        </div>)
}

export default PersonaCard;