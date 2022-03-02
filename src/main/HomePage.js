import React, { useEffect, useState } from 'react';
import Card from '../shared-components/Card';
import styles from '../styles/HomePage.module.css';
import {Link} from 'react-router-dom';

function HomePage() {

    const [userList, setUserList] = useState([])

    useEffect(()=>{
        fetch("https://reqres.in/api/users?page=2")
        .then(res => {
            return res.json();
        })
        .then(response => {
            const temp = response.data;
            console.log(temp);
            setUserList(temp);
        })
    }, [])

    const clickHandler = () => {
        //open user's profile page
    }

    return (
        <React.Fragment>
            <div className={styles.mainDiv}>
            <ul>
                {userList.map((item) => (
                <li>
                    <Link to={"/User/Profile?id=" + item.id} className={styles.cardLink}>
                        <Card avatar={item.avatar} firstName={item.first_name} userData={item}/>
                    </Link>
                </li>))}
            </ul>
            </div>
        </React.Fragment>
    )
}

export default HomePage