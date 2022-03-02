import React, { useEffect, useState } from 'react';
import styles from '../styles/Profile.module.css'

function Profile(props) {

  const [userInfo, setUserInfo] = useState({});
  const [updatedUserInfo, setUpdatedUserInfo] = useState({first_name: "", last_name: "", email: "", job: ""});

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("in submit handler")
    fetch("https://reqres.in/api/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        id: userInfo.id,
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

  useEffect(()=>{
    const path = new URL(window.location.href);
    const id = path.searchParams.get('id');
    const pageNumber = Math.ceil(id/6);
    fetch("https://reqres.in/api/users?page=" + pageNumber + "&id=" + id)
    .then(res => res.json())
    .then(data => {
      setUserInfo(data.data)
      setUpdatedUserInfo({
        first_name: data.data.first_name,
        last_name: data.data.last_name,
        email: data.data.email,
        job: data.data.job ? data.data.job : ""

      })
    })
    .catch(err => console.log(err.message))
  }, [])

  console.log("User Info : " + userInfo.first_name);
  console.log("Updated user Info : " + updatedUserInfo.first_name);

  return (
    <React.Fragment>
      <div className={styles.mainDiv}>
        <img className={styles.imgStyle} src={userInfo.avatar}/>
        <form className={styles.formProfile} onSubmit={(e)=>submitHandler(e)}>
          <div className={styles.divProfile}>
            <label className={styles.labelProfile}>First Name</label>
            <input className={styles.inputProfile} type="text" value={updatedUserInfo.first_name} onChange={(e)=>inputChangeHandler(e, 'first_name')}/>
          </div>
          <div className={styles.divProfile}>
            <label className={styles.labelProfile}>Last Name</label>
            <input className={styles.inputProfile} type="text" value={updatedUserInfo.last_name} onChange={(e)=>inputChangeHandler(e, 'last_name')}/>
          </div>
          <div className={styles.divProfile}>
            <label className={styles.labelProfile}>Email</label>   
            <input className={styles.inputProfile} type="text" value={updatedUserInfo.email} onChange={(e)=>inputChangeHandler(e, 'email')}/>
          </div>
          <div className={styles.divProfile}>
            <label className={styles.labelProfile}>Job</label>   
            <input className={styles.inputProfile} type="text" placeholder="Enter a Job" value={updatedUserInfo.job} onChange={(e)=>inputChangeHandler(e, 'job')}/>
          </div> 
          <button className={styles.buttonProfile}>Submit</button>
        </form> 
        </div>
    </React.Fragment>
  )
}

export default Profile