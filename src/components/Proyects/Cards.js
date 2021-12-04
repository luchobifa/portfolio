import React from "react";
import styles from "./Cards.module.css";
import { allProjects } from "./data";
import Card from "./Card";

export default function Cards(){
    return(
        <div className = {styles.conteiner}>
            {allProjects.map(p => <Card img = {p.img} id = {p.id} link = {p.link}/>)}
        </div>
    );
}