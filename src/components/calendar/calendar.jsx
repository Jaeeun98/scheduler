import React from 'react';
import Daily from '../daily/daily';
import Weekly from '../weekly/weekly';
import styles from  './calendar.module.css'

const Calendar = (props) => {
    return(
        <section>
            <main className={styles.main}>
                <header className={styles.header}>
                    <button className={`${styles.btn} ${styles.leftBtn}`}>&#5176;</button>
                        <h1 className={styles.title}>09</h1>
                    <button className={`styles.btn styles.rightBtn`}>&#5171;</button>
                </header>
                
                <div className={styles.calendar}>
                    <div className={styles.daily}>
                        <Daily />
                    </div>
                    <div className={styles.weekly}>
                        <Weekly />
                    </div>
                </div>
            </main>
        </section>
        
    )
}
export default Calendar;