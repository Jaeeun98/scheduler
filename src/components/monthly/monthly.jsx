import React from 'react';
import styles from './monthly.module.css'
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar'
import Header from './header';

const date = () => {
    const start = dayjs().startOf('month').day();
    const day = [];

    for(let i=0; i<=start; i++){
        day.push(
            <li></li>
        )
    }

    for(let i=1; i<=30; i++){
        day.push(
            <li>{i}</li>
        )
    }
    
    return day;
}



const Monthly = (props) => {
    dayjs.extend(calendar)
    return (
        <section>
            <Header />
            <ul className={styles.ul}>
                <li className={`${styles.week} ${styles.li}`}>Mon</li>
                <li className={`${styles.week} ${styles.li}`}>Tus</li>
                <li className={`${styles.week} ${styles.li}`}>Wen</li>
                <li className={`${styles.week} ${styles.li}`}>Thu</li>
                <li className={`${styles.week} ${styles.li}`}>Fri</li>
                <li className={`${styles.week} ${styles.li}`}>Sat</li>
                <li className={`${styles.week} ${styles.li}`}>Sun</li>
                {date()}
            </ul>
        </section>
)
}

export default Monthly;