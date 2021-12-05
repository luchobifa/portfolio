import styles from './Footer.module.css';
import { SiLinkedin, SiGithub } from 'react-icons/si';

export default function Footer(){
    return(
        <footer className = {styles.container}>
            <div className = {styles.iconsContainer}>
                <a href = "https://www.linkedin.com/in/luciano-bifaretti/" target="_blank"><SiLinkedin className = {styles.icons} /></a>
                <a href = "https://github.com/luchobifa" target="_blank"><SiGithub className = {styles.icons}/></a>
            </div>
        </footer>
    )
}