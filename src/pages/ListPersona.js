import React, {useEffect, useState} from "react";
import axios from "axios";
import PersonaCard from "../components/PersonaCard";
import styles from "../styles/ListPersona.module.css";
import { LocalhostApi } from "../config/contants";

const ListPersona = () => {
    const [personas, setPersonas] = useState([]);
    function GetPersonas () {
        var url = LocalhostApi + "/Persona/GetPersonas";
        axios.get(url)
        .then(response => {
            setPersonas(response?.data);
        })
        .catch(error => {
            setPersonas([]);
        });
    }

    useEffect(()=>{
        GetPersonas();
    }
    ,[]);

    return(
        <div className={styles["container"]}>
            <div className={styles["child-container"]}>
            {
                personas.map((persona) => <PersonaCard  data={persona}/>)
            }
            </div>
        </div>
    )
};

export default ListPersona;