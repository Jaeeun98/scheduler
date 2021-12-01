import React, { useEffect } from 'react';
import { useCallback } from 'react';
import { useHistory } from 'react-router';
import styles from './loding.module.css';

const Loding = ({auth}) => {
    const history = useHistory();
    
    const login = () => {
        auth.login()
        .then(user => {
            const userId = user.user.uid;
            nextPage(userId);
        });
    }

    const nextPage = useCallback((id) => {
        history.push({
            pathname : '/calendar',
            state : {
                userId : id,
            }
        })
    }, [history])

    useEffect(() => {
        auth.getAuth(user => {
            user && nextPage(user.uid);
        })
    }, [auth, nextPage])
    
    return(
        <section className={styles.section}>
            <svg className={styles.svgBox} width='60vw' height='250' viewBox='0 0 630 250' preserveAspectRatio='xMidYMid'>
                <text className={styles.subTitle} x='50%' y='50' textAnchor='middle'>
                    _알찬 하루를 위한, 나만의 Scheduler_
                </text>
                <text className={styles.title} x='50%' y='180' letterSpacing='10' textAnchor='middle'>
                    "MY, DIARY"
                </text>
            </svg>
            <button className={styles.login} onClick={login}>로그인</button>
        </section>
    )
}

export default Loding;