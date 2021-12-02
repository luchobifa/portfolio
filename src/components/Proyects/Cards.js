import React from "react";
import styles from "./Cards.module.css"
import calculatorImg from "../../assets/images/calculator.svg"
import piImg from '../../assets/images/pi.svg';
import pgImg from '../../assets/images/pg.svg';

export default function Cards(){
    return(
        <div className = {styles.conteiner}>
            <div className = {styles.cardConteiner}>
                <img alt = "foto" src = {calculatorImg} className = {styles.img}></img>
            </div>
            <div className = {styles.cardConteiner}>
                <img  alt = "foto" src = {piImg} className = {styles.img}></img>
            </div>
            <div className = {styles.cardConteiner}>
                <img  alt = "foto" src = {pgImg} className = {styles.img}></img>
            </div>
        </div>
    );
}