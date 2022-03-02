import React from 'react';
import styles from '../styles/Card.module.css';

const Card = (props) => {

    let imgSrc = props.avatar;
    let name = props.firstName;

    const clickHandler = () => {
        console.log(props.userData)
    }

    return (
        <React.Fragment>
                <div className={styles.card} onClick = {clickHandler}>
                    <img src={imgSrc} alt="UserInfo" className={styles.img}/>
                    <h3>{name}</h3>    
                </div>
        </React.Fragment>
    )
}

export default Card;