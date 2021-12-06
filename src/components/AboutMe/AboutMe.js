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
                        <h1>About Me</h1>
                        <p className = {styles.emoji}>👨‍💻</p>
                    </div>
                    <h2>Who am I ?</h2>
                    <p>My name is Luciano Bifaretti and I am 20 years old. Since I was a kid I have been really interested about technology.  The interfaces and the web designs were things that took my attention, I remeber that one day I said: "When I grow up I want to create my own web page" As I am very curious I started learning some programming basics when I was 16 years old and one year after I started learning at university "Universidad Nacional de La Plata" the "Licenciatura en Sistemas" program for 2 years. Unfortunately I was not motivated enough because de program was outdated and most of the subjects were really boring for me, so I decided to keep learning by my own. I spent to much time learning javascript because I realized that I wanted to be a web developer and in 2021 I decided to do a Bootcamp in "soyHenry" and I thing that was my best decision. At first it was very hard, It was too much information for me but the effort I did was the most important thing. After the first 2 months I started doing my own proyects and working also in some groupal proyects, I had to learn how to work in a team,  I was really motivated and happy. After 4 months of learning I graduated and now I'm really excited looking for my first job in the IT world. I really want to do my best in this new episode of my life and specially I want to keep learning.</p>
                    
                    <div className = {styles.buttonContainer}><Button variant="contained" type= "submit" style = {{width: "30%", color: "white"}}><a href={CV} target="_blank" rel="noreferrer">Download CV</a> <a href={CV} target="_blank" rel="noreferrer"><BsDownload/></a></Button></div>
                </div>
                <Skills/>
            </div>
        </div>
    );
}