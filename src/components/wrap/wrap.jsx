import React, { useState, useEffect, useCallback } from 'react';
import Aside from '../aside/aside';
import Monthly from '../monthly/monthly';
import WrapHeader from '../wrapHeader/wrapHeader';
import styles from  './wrap.module.css';
import { useHistory } from 'react-router';

const Wrap = ({ auth, fireData, imgStorage }) => {
    const history = useHistory();
    const historyState = history?.location?.state;
    const [userId, setUserId] = useState(historyState && historyState.userId);
    const [profile, setProfile] = useState('');

    useEffect(() => {
        auth.getAuth(user => {
            user ? setUserId(user.uid) : history.push('/');
        }) 
    }, [])

    useEffect(() => {
        if(!userId) return

        const read = () => {
            fireData.userProfileGet(userId, profile => {
                setProfile(profile);
            })
        } 
        return read();    
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

    const logout = useCallback(() => {
        auth.logout();
    }, [auth])

    return(
        <div className={styles.wrap}>
            <WrapHeader logout={logout} />
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