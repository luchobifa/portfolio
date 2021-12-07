import styles from './Card.module.css';

export default function Card(props){
    return(
        <a href = {props.link} target="_blank" rel="noreferrer">
        <div className = {styles.cardConteiner}>
            <img className = {styles.img} src = {props.img} alt ="project"></img>
        </div>
        </a>
    )
}