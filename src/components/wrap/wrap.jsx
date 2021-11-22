import React, { useState, useEffect } from 'react';
import Aside from '../aside/aside';
import Monthly from '../monthly/monthly';
import WrapHeader from '../wrapHeader/wrapHeader';
import styles from  './wrap.module.css';
import { useLocation } from 'react-router';

const Wrap = ({ fireData, imgStorage }) => {
    const location = useLocation();
    const [userId, setUserId] = useState('');
    const [profile, setProfile] = useState('');

    useEffect(() => {
        setUserId(location.state.userId);
    }, [])

    useEffect(() => {
        if(!userId) return;
        const read = fireData.userProfileGet(userId, profile => {
            setProfile(profile);
        });
        return () => read();

    }, [userId, fireData])

    const scheduleAdd = (title, start, end, allDay) => {
        const id = Date.now();
        fireData.userScheduleAdd(id, userId, title, start, end, allDay);
    }

    const profileAdd = async (file, name, aim) => {
        const imgData = await imgStorage.imgUpload(file);
        const fileUrl = imgData.url;
        const fileName = imgData.original_filename;

        await fireData.userProfileAdd(userId, fileUrl, fileName, name, aim);
    }

    return(
        <div className={styles.wrap}>
            <WrapHeader />
            <main className={styles.main}>
                <Aside 
                    scheduleAdd={scheduleAdd} 
                    profileAdd={profileAdd}
                    profile={profile} 
                />
                <Monthly />
            </main>
        </div>
    )
}
export default Wrap;