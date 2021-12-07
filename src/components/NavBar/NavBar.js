
import { React ,useState } from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import styles from './NavBar.module.css';
// import UseSwitchesCustom from "../../assets/tools/darkSwitch.js";


export default function NavBar(){
    const [menu, setMenu] = useState(false);

    function handleClick(){
        setMenu(!menu);
    }

    console.log(menu)

    return(
        <div className ={styles.conteiner}>
            
            {/* <Link to = '/#' smooth = {true} offset = {-70} duration = {1000} activeClassName = "selected" style = {{textDecoration: "none", color: 'black'}}><h3>Portfolio.</h3></Link> */}
            
            <div className = { menu ? styles.linksConteinerAbierto :  styles.linksConteiner}>
                <Link to = '/#' smooth = {true} offset = {-70} duration = {1000} activeClassName ="links-active" className = {styles.links} onClick = {handleClick}>Home</Link>

                <Link to = '/#about' smooth = {true} offset = {-70} duration = {1000} activeClassName ="links-active" className = {styles.links} onClick = {handleClick}>About Me</Link>

                <Link to = '/#proyects' smooth = {true} offset = {-70} duration = {1000} activeClassName ="links-active" className = {styles.links} onClick = {handleClick}>Portfolio</Link>
                
                <Link to = '/#contact' smooth = {true} offset = {-70} duration = {1000} activeClassName ="links-active" className = {styles.links} onClick = {handleClick}>Contact</Link>

                {/* <div className = {styles.lightModeCel}>{UseSwitchesCustom()}</div> */}
            </div>

            <button className = {styles.buttonCel} onClick = {handleClick}> 
                <i class="fas fa-bars"></i>
            </button>
            {/* <div className = {styles.lightMode}>{UseSwitchesCustom()}</div> */}
        </div>
    );
} 