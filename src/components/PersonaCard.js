import React, { useState } from "react";
import styles from "../styles/PersonaCard.module.css";
import iconUser from "../images/icon-user.png";
import iconPlus from "../images/icon-plus.png";
import iconMinus from "../images/icon-minus.png";
import iconGenderMale from "../images/icon-gender-male.png";
import iconGenderFemale from "../images/icon-gender-female.png";

const PersonaCard = (props) => {
    const [toggle, setToggle] = useState(false);

    return(<div className={!toggle ? styles["card-container"] : styles["card-container-transitioned"]}>
            <div className={styles["persona-img"]}>
                <div className={styles["img-container"]}>
                    <img className={styles["img-user"]} src={iconUser} alt=""/>
                </div>
                <div className={styles["principal"]}>
                    <p className={styles["info-title"]}>{props.data.nombre}</p>
                    <button className={styles["btn-more"]} onClick={()=>{setToggle(!toggle)}}>
                        {!toggle 
                            ? <img className={styles["icon"]} src={iconPlus} alt=""/>
                            : <img className={styles["icon"]} src={iconMinus} alt=""/>
                        }
                    </button>
                </div>
            </div>
            <div className={styles["card"]}>
                <div className={styles["card-info"]}>
                    <p className={styles["info-title"]}>Edad: </p> 
                    <p className={styles["info"]}>{props.data.edad}</p>
                </div>
                <div className={styles["card-info"]}>
                    <p className={styles["info-title"]}>DNI: </p> 
                    <p className={styles["info"]}>{props.data.dni}</p>
                </div>
                <div className={styles["card-info"]}>
                    <p className={styles["info-title"]}>Sexo: </p> 
                    {props.data.sexo === "Masculino"
                     ? <img className={styles["icon-gender-male"]} src={iconGenderMale} alt=""></img>
                     : <img className={styles["icon-gender-female"]} src={iconGenderFemale} alt=""></img>}
                </div>
            </div>
        </div>)
}

export default PersonaCard;