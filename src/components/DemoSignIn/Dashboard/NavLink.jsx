import React, {useState} from "react";
// import { Link } from "react-router-dom";
import styles from "./NavLink.module.css"

const NavLink = (props) => {

  const [activeLink, setactiveLink] = useState(false);

  let isActive = props.active;

    return (
      // <Link to="/" className={styles.link}>
        <li className={`${styles.link} ${isActive && styles.active} ${activeLink && styles.active}`} onClick={() => setactiveLink(true)} >{props.title} </li>
        // </Link>
    )

};

export default NavLink;