import React from "react";
import NavBar from '../NavBar/NavBar.js';
import foto from '../../assets/images/fotocarnet.png';
import styles from './Home.module.css';
import Button from '@mui/material/Button';
import AboutMe from '../AboutMe/AboutMe.js';
import Proyects from '../Proyects/Proyects.js';
import Contact from "../Contact/Contact.js";
import Footer from "../Footer/Footer.js";

export default function Home(){
    return(
        <div>
            <NavBar/>
            <div className = {styles.content}>
                <div>
                    <h1 className = {styles.firstTitle}>Hi there,</h1>
                    <h1>I'm Lucho Bifaretti</h1>
                    <h1> a Full Stack Web Developer</h1>
                    <div className = {styles.buttonsConteiner}>
                        <Button variant="contained" style = {{marginTop : "25px"}}>Contact Me</Button>
                        <Button variant="contained" style = {{marginTop : "25px"}}>Portfolio</Button>
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