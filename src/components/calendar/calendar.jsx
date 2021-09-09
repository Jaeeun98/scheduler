import React from 'react';
import Daily from '../daily/daily';
import Weekly from '../weekly/weekly';
import styles from  './calendar.module.css'

const Calendar = (props) => {
    return(
        <section>
            <main className={styles.main}>
                <h1 className={styles.title}>09</h1>
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