import React from 'react'
import { Link } from 'react-location'
import styles from './Card.module.css'
const Card = ({ title, difficulty, materials, id }) => {
    return (
        <Link className={styles.link} to={`/post/${id}`}>
            <div className={styles.card}>
                <p className={styles.title}>{title}</p>
                <hr className={styles.line} />
                <p className={styles.body}><span>Difficulty: </span>{difficulty}</p>
                <p className={styles.body}><span>Materials: </span>{materials}</p>
            </div>
        </Link>
    )
}

export default Card
