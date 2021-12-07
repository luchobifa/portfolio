import React from "react";
import styles from "../AboutMe/AboutMe.module.css";
import Skills from "../Skills/Skills";
import { Button } from "@mui/material";
import CV from "../../assets/docs/cv.pdf";
import {BsDownload} from "react-icons/bs";

export default function AboutMe(){
    return(
        <div className={styles.conteiner} id = "about">
            <div className={styles.photoandtitle}>
                <div className = {styles.description}>
                    <div className = {styles.titleIcon}>
                        <h1 className = {styles.aboutTitle}>About Me</h1>
                        <p className = {styles.emoji}>👨‍💻</p>
                    </div>
                    <h2 className = {styles.aboutTitle}>Who am I ?</h2>
                    <p className = {styles.coverLetter}>My name is Luciano Bifaretti,  I am 20 and I live in Buenos Aires, Argentina. Since I was a kid I have been really interested in technology.  The interfaces and the web designs have always caught my attention, I remember that one day I said: "When I grow up I want to create my own web page". As I am very curious, I started learning some programming basics when I was 16 and a year later, I started at "Universidad Nacional de La Plata"  "Licenciatura en Sistemas" for 2 years. Unfortunately, I was not motivated enough as I considered the program was outdated and most of the subjects were really boring for me. So,  I decided to keep learning by my own,  I spent too much time learning javascript because I realized that I wanted to be a web developer and in 2021 I decided to do a bootcamp in <a href = "https://www.soyhenry.com/?utm_source=google&utm_medium=CPC&utm_campaign=HENRY_AW_SEARCH_ARG_BRAND_P&gclid=Cj0KCQiAqbyNBhC2ARIsALDwAsD4pgSIf5e-lSx1byjYM6GbxITxC1nqpRX5K5dGDNa6EmMfkVDqRjoaAnVpEALw_wcB" target = "_blank" rel="noreferrer">"soyHenry"</a>. I think that was my best decision. At first, it was very hard, It was too much information for me but the effort I made was very fruitfull because after the first 2 months I was able to do my own projects and to work also in some group ones, learning to work in a team made me feel really motivated and happy. After 4 months I graduated and now I am really excited looking for my first job in the IT world. Being honest I want to do my best in this new period of my life and specially I want to keep learning.</p>
                    
                    <div className = {styles.buttonContainer}><button className = {styles.buttonCV}><a href={CV} target="_blank" rel="noreferrer" style = {{textDecoration: "none"}}>Download CV</a> <a href={CV} target="_blank" rel="noreferrer"><BsDownload style = {{color: "black"}}/></a></button></div>
                </div>
                <Skills/>
            </div>
        </div>
    );
}