import React, { useState, useEffect } from 'react';
import Aside from '../aside/aside';
import Monthly from '../monthly/monthly';
import WrapHeader from '../wrapHeader/wrapHeader';
import styles from  './wrap.module.css';
import { useLocation } from 'react-router';

const Wrap = ({fireData}) => {
    const location = useLocation();
    const [userId, setUserId] = useState('');

    useEffect(() => {
        setUserId(location.state.userId);
    }, [])

    const scheduleAdd = (title, start, end, allDay) => {
        const id = Date.now();
        fireData.userScheduleAdd(id, userId, title, start, end, allDay);
    }

    const profileAdd = (url, name, aim) => {
        fireData.userProfileAdd(userId, url, name, aim);
    }

    return(
        <div className={styles.wrap}>
            <WrapHeader />
            <main className={styles.main}>
                <Aside scheduleAdd={scheduleAdd} profileAdd={profileAdd}/>
                <Monthly />
            </main>
        </div>
    )
}
export default Wrap;