import React from "react";
import styles from '../styles/components/cards.module.css'
const Cards = (props) => 
<div className={styles.box}>

     <span className={styles.name}>{props.name}</span>
     <span className={styles.email}>{props.email}</span>
     <span className={styles.salary}>{props.salary}</span>

</div>

export default Cards