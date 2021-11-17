import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { idSave } from '../../redux/userData';
import styles from './loding.module.css';

const Loding = ({auth, fireData}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const login = () => {
        auth.login()
        .then(user => {
            const data = {
                id : user.user.uid,
                email : user.user.email
            }

            dispatch(idSave(data));
            fireData.userAdd(user.user.uid, user.user.email);
            nextPage();
        });
    }

    const nextPage = () => {
        history.push('/calendar');
    }
    
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
        // https://ordinary-code.tistory.com/25
    )
}

export default Loding;