import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import styles from './NavBar.module.css';
import UseSwitchesCustom from "../../assets/tools/darkSwitch.js";
import "./NavBar.css";

export default function NavBar(){
    return(
        <div className ={styles.conteiner}>
            <Link to = '/#' smooth = {true} offset = {-70} duration = {1000} activeClassName = "selected" style = {{textDecoration: "none", color: 'black'}}><h3>Portfolio.</h3></Link>
            <div className = {styles.linksConteiner}>
                <Link to = '/#' smooth = {true} offset = {-70} duration = {1000} activeClassName ="links-active" className = {styles.links}>Home</Link>

                <Link to = '/#about' smooth = {true} offset = {-70} duration = {1000} activeClassName ="links-active" className = {styles.links} >About Me</Link>

                <Link to = '/#proyects' smooth = {true} offset = {-70} duration = {1000} activeClassName ="links-active" className = {styles.links}>My Portfolio</Link>
                
                <Link to = '/#contact' smooth = {true} offset = {-70} duration = {1000} activeClassName ="links-active" className = {styles.links}>Contact</Link>
            </div>
            {UseSwitchesCustom()}
        </div>
    );
}