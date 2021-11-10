import React from 'react';
import styles from './section.module.css';
import { calendar } from '../../days/calendar';

const Section = (props) => {
    return(
        <section className={styles.section}>
            <ul className={styles.ul}>
                <li className={`${styles.week} ${styles.li}`}>Sun</li>
                <li className={`${styles.week} ${styles.li}`}>Mon</li>
                <li className={`${styles.week} ${styles.li}`}>Tus</li>
                <li className={`${styles.week} ${styles.li}`}>Wen</li>
                <li className={`${styles.week} ${styles.li}`}>Thu</li>
                <li className={`${styles.week} ${styles.li}`}>Fri</li>
                <li className={`${styles.week} ${styles.li}`}>Sat</li>
                {calendar.map(li => (
                    <li key={li} className={styles.li}>
                        {li}
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Section;