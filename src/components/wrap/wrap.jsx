import React from 'react';
import Aside from '../aside/aside';
import Monthly from '../monthly/monthly';
import WrapHeader from '../wrapHeader/wrapHeader';
import styles from  './wrap.module.css';
import { useLocation } from 'react-router';
const Wrap = (props) => {

    const location = useLocation();
    console.log(location.state);

    return(
        <div className={styles.wrap}>
            <WrapHeader />
            <main className={styles.main}>
                <Aside />
                <Monthly />
            </main>
        </div>
    )
}
export default Wrap;