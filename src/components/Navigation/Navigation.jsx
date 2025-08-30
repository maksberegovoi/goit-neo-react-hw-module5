import React from 'react';
import {NavLink} from "react-router-dom";
import {HOME_ROUTE, MOVIES_ROUTE} from "../../utils/consts.js";
import styles from './Navigation.module.css'


const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink
        to={HOME_ROUTE}
        className={({isActive}) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        Home
      </NavLink>
      <NavLink
        to={MOVIES_ROUTE}
        className={({isActive}) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;