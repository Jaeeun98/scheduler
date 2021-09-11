import React from 'react';
import styles from './header.module.css'

const Header = (props) => {
    return(
        <header className={styles.header}>
            <button className={`${styles.btn} ${styles.leftBtn}`}>&#5176;</button>
            <h1 className={styles.title}>21, 09</h1>
            <button className={`${styles.btn} ${styles.rightBtn}`}>&#5171;</button>
        </header>
    )
}

export default Header;