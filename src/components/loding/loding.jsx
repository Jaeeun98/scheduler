import React from 'react';
import { useHistory } from 'react-router';
import styles from './loding.module.css';

const Loding = ({auth}) => {

    const history = useHistory();

    const login = () => {
        auth.login()
        .then(user => {
            const name = user.user.displayName;
            const email = user.user.email;

            nextPage(name, email);
        });
    }

    const nextPage = (name, email) => {
        name && email && history.push('/calendar');
    }
    
    return(
        <section className={styles.section}>
            <svg className={styles.svgBox} width='60vw' height='250' viewBox='0 0 630 250'>
                <text className={styles.title} y='180' letterSpacing='10'>
                    "MY, DIARY"
                </text>
                <text className={styles.subTitle} x='130' y='50'>
                    _알찬 하루를 위한, 나만의 Scheduler_
                </text>
            </svg>
            <button className={styles.login} onClick={login}>로그인</button>
        </section>
        // https://ordinary-code.tistory.com/25
    )
}

export default Loding;