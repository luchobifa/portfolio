import React from "react";
import styles from "./Skills.module.css"
import {DiJsBadge, DiHtml5, DiGit, DiCss3, DiNodejs, DiPostgresql, DiReact, DiGithubBadge} from "react-icons/di";
import {SiTypescript, SiRedux, SiSequelize, SiExpress} from "react-icons/si";

export default function Skills(){
    let icons = [DiJsBadge];
    console.log(icons);
    return(
        <div className = {styles.conteiner}>
            <h1 className = {styles.title}>Skills</h1>
            <div className = {styles.conteinerIcons}>
                <div className = {styles.iconRows}>
                    <div className = {styles.iconDiv}><DiHtml5 className = {styles.icon}/>HTML</div>
                    <div className = {styles.iconDiv}><DiCss3 className = {styles.icon}/>CSS</div>
                    <div className = {styles.iconDiv}><DiJsBadge className = {styles.icon}/>Javascript</div>
                    <div className = {styles.iconDiv}><DiNodejs className = {styles.icon}/>Node.js</div>
                </div>
                <div className = {styles.iconRows}>
                    <div className = {styles.iconDiv}><DiGit className = {styles.icon}/>GIT</div>
                    <div className = {styles.iconDiv}><DiPostgresql className = {styles.icon}/>PostgreSQL</div>
                    <div className = {styles.iconDiv}><DiReact className = {styles.icon}/>React</div>
                    <div className = {styles.iconDiv}><SiTypescript className = {styles.icon}/>Typescript</div>
                </div>
                <div className = {styles.iconRows}>
                    <div  className = {styles.iconDiv}><SiRedux className = {styles.icon}/>Redux</div>
                    <div  className = {styles.iconDiv}><SiSequelize className = {styles.icon}/>Sequelize</div>
                    <div  className = {styles.iconDiv}><DiGithubBadge className = {styles.icon}/>Github</div>
                    <div  className = {styles.iconDiv}><SiExpress className = {styles.icon}/>Express    </div>
                </div>
            </div>
        </div>
    );
}
