import React, { useEffect, useState } from 'react';
import Daily from '../daily/daily';
import Header from '../header/header';
import Weekly from '../weekly/weekly';
import styles from  './calendar.module.css'


const Calendar = (props) => {

    

    return(
        <section>
            <main className={styles.main}>
                <Header />
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