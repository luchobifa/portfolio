import React from "react";
import NavBar from '../NavBar/NavBar.js';
import foto from '../../assets/images/fotocarnetsinfondo.png';
import styles from './Home.module.css';
import AboutMe from '../AboutMe/AboutMe.js';
import Proyects from '../Proyects/Proyects.js';
import Contact from "../Contact/Contact.js";
import Footer from "../Footer/Footer.js";
import { NavHashLink as Link } from "react-router-hash-link";

export default function Home(){
    return(
        <div>
            <NavBar/>
            <div className = {styles.content}>
                <div className = {styles.allTitlesContainer}>
                    <div style = {{display:"flex", alignItems: "center", height: "20px"}}>
                    <h1 className = {styles.firstTitle}>Hi there</h1>
                    <a>👋,</a>
                    </div>
                    <h1 className = {styles.nameTitle}>I'm Lucho Bifaretti,</h1>
                    
                    <div>
                        <h1 className = {styles.dynamicTitle}>Full Stack Web Developer</h1>
                    </div>
                    
                    <div className = {styles.buttonsConteiner}>
                        <Link to = '/#contact' smooth = {true} offset = {-70} duration = {1000} activeClassName ="links-active" style = {{textDecoration: "none"}}>
                            <button className = {styles.button}>Contact Me</button>
                        </Link>
                    </div>
                    
                </div>
                <img alt = "foto" className={styles.foto} src = {foto}></img>
            </div>
            <AboutMe/>
            <Proyects/>
            <Contact/>
            <Footer/>
        </div>
    );
};