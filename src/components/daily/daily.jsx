import React from 'react';
import styles from './daily.module.css'
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday'
import calendar from 'dayjs/plugin/calendar'

const date = () => {
    const start = dayjs().startOf('month').day();
    const day = [];

    for(let i=0; i<=start; i++){
        day.push(
            <li className={styles.li}></li>
        )
    }

    for(let i=1; i<=30; i++){
        day.push(
            <li className={styles.li}>{i}</li>
        )
    }
    
    return day;
}

const Daily = (props) => {

    
    dayjs.extend(calendar)
    return(
        <>
            
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
        </>
    )
}

export default Daily;