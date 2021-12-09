import React, { useState, useEffect, useCallback } from 'react';
import Aside from '../aside/aside';
import Monthly from '../monthly/monthly';
import WrapHeader from '../wrapHeader/wrapHeader';
import styles from  './wrap.module.css';
import { useHistory } from 'react-router';

const Wrap = React.memo(({ auth, fireData, imgStorage, colorMode, theme }) => {
    const history = useHistory();
    const historyState = history?.location?.state;
    const [userId, setUserId] = useState(historyState && historyState.userId);
    const [profile, setProfile] = useState({});
    const [schedule, setSchedule] = useState({});
    
    useEffect(() => {
        auth.getAuth(user => {
            user ? setUserId(user.uid) : history.push('/');
        }) 
    }, [auth, history])

    useEffect(() => {
        if(!userId) return;
        const read = fireData.userDataGet(userId, data => {
                setProfile(data.profile);
                setSchedule(data.schedule);
            })
            return () => read();   
    }, [userId, fireData]);

    const scheduleAdd = (title, start, end, allDay) => {
        const id = Date.now();
        fireData.userScheduleAdd(id, userId, title, start, end, allDay);
    }

    const scheduleChange = (id, title, start, end, allDay) => {
        fireData.userScheduleChange(id, userId, title, start, end, allDay);
    }

    const scheduleDel = data => {
        fireData.userScheduleDel(userId, data);
    }

    const profileAdd = useCallback(async (file, name, aim) => {
        const imgData = await imgStorage.imgUpload(file);
        const fileUrl = imgData.url;
        const fileName = imgData.original_filename;

        await fireData.userProfileAdd(userId, fileUrl, fileName, name, aim);
    }, [fireData, imgStorage, userId]);

    const logout = useCallback(() => {
        auth.logout();
    }, [auth])

    return(
        <div className={styles.wrap}>
            <WrapHeader logout={logout} colorMode={colorMode}/>
            <main className={styles.main}>
                <Aside 
                    scheduleAdd={scheduleAdd} 
                    profileAdd={profileAdd}
                    profile={profile} 
             />
                <Monthly
                    schedule={schedule}
                    scheduleChange={scheduleChange}
                    scheduleDel={scheduleDel}
                    theme={theme}
                />
            </main>
        </div>
    )
});
export default Wrap;