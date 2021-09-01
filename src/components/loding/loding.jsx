import React from 'react';
import styles from './loding.module.css';

const Loding = (props) => {
    return(
        <section className={styles.section}>
            <svg width='710' height='250' viewBox='0 0 700 250'>
                <text className={styles.title}  y='100' letterSpacing='10'>
                    "SCHEDULER"
                </text>
                <text className={styles.subTitle} x='200' y='170'>
                    알찬 하루를 위한, 나만의 Diary_
                    </text>
            </svg>
            <button className={styles.login}>로그인</button>
        </section>
        // https://ordinary-code.tistory.com/25
    )
}

export default Loding;