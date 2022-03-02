import React, {useState} from 'react';
import styles from '../styles/NewUser.module.css'

function NewUser() {

    const [userInfo, setUserInfo] = useState({})
    const [updatedUserInfo, setUpdatedUserInfo] = useState({first_name: "", last_name: "", email: "", job: ""});

    const submitHandler = (event) => {
        //to stop page from reloading
        event.preventDefault();
        fetch("https://reqres.in/api/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            id: Math.round(Math.random(50,100)),
            ...updatedUserInfo
        })
        })
        .then(res => res.json())
        .then(data => window.alert("Successful!"))
        .catch(err => console.log(err.message))
    }

    const inputChangeHandler = (event, field) => {
        if(field === 'first_name') {
          setUpdatedUserInfo({...updatedUserInfo, first_name : event.target.value})
        }
        else if(field === 'last_name') {
          setUpdatedUserInfo({...updatedUserInfo, last_name : event.target.value})
        }
        else if(field === 'email') {
          setUpdatedUserInfo({...updatedUserInfo, email : event.target.value})
        }
        else if(field === 'job') {
          setUpdatedUserInfo({...updatedUserInfo, job : event.target.value})
        }
        else {
          setUpdatedUserInfo({...updatedUserInfo})
        }
    }

    return (
        <React.Fragment>
            <form onSubmit={(e)=>submitHandler(e)} className={styles.formNewUser}>
                <div className={styles.divNewUser}>
                <label className={styles.labelNewUser}>First name</label>
                <input className={styles.inputNewUser} type="text" value={userInfo.first_name} onChange={(e)=>inputChangeHandler(e, 'first_name')}/>
                </div>

                <div className={styles.divNewUser}>
                <label className={styles.labelNewUser}>Last name</label>
                <input className={styles.inputNewUser} type="text" value={userInfo.last_name} onChange={(e)=>inputChangeHandler(e, 'first_name')}/>
                </div>

                <div className={styles.divNewUser}>
                <label className={styles.labelNewUser}>Email</label>
                <input className={styles.inputNewUser} type="email" value={userInfo.email} onChange={(e)=>inputChangeHandler(e, 'first_name')}/>
                </div>

                <div className={styles.divNewUser}>
                <label className={styles.labelNewUser}>Job</label>
                <input className={styles.inputNewUser} type="text" value={userInfo.job} onChange={(e)=>inputChangeHandler(e, 'first_name')}/>
                </div>

                <button className={styles.buttonNewUser}>Submit</button>
            </form>
        </React.Fragment>
    )
}

export default NewUser