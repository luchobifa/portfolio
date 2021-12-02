import React from "react";
import styles from "./Skills.module.css"
import {DiJsBadge, DiHtml5, DiGit, DiCss3, DiNodejs, DiPostgresql, DiReact, DiGithubBadge} from "react-icons/di";
import {SiTypescript, SiRedux, SiSequelize} from "react-icons/si";

export default function Skills(){
    let icons = [DiJsBadge];
    console.log(icons);
    return(
        <div className = {styles.conteiner}>
            <h1>Skills</h1>
            <div className = {styles.conteinerIcons}>
                <DiHtml5 className = {styles.icon}/>
                <DiCss3 className = {styles.icon}/>
                <DiJsBadge className = {styles.icon}/>
                <DiNodejs className = {styles.icon}/>
                <DiGit className = {styles.icon}/>
                <DiPostgresql className = {styles.icon}/>
                <DiReact className = {styles.icon}/>
                <SiTypescript className = {styles.icon}/>
                <SiRedux className = {styles.icon}/>
                <SiSequelize className = {styles.icon}/>
                <DiGithubBadge className = {styles.icon}/>
            </div>
        </div>
    );
}
