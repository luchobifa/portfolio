import React from "react";
import Cards from './Cards.js';
import styles from './Proyects.module.css';

export default function Proyects(){
    return(
        <div className = {styles.conteiner} id = "proyects">
            <h1>My Portfolio 📁</h1>
            <Cards/>
        </div>
    );
}