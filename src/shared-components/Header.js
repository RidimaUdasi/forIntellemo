import * as React from 'react';
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
import logo from "../images/logoPng.png";

const Header = () => {

  return (
    <React.Fragment>
      <div className={styles.headerMainDiv}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="SpaceX"/>
        </Link>
        <ul className={styles.headerTextList}>
          <li>
            <Link className={styles.headerText} to="/">ALL USERS</Link>
          </li>
          <li>
            <Link className={styles.headerText} to="/User/NewUser">NEW USER</Link>
          </li>
        </ul>  
      </div>
    </React.Fragment>
  )
}

export default Header;
