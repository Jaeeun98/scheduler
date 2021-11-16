import React from 'react';
import Aside from '../aside/aside';
import Monthly from '../monthly/monthly';
import WrapHeader from '../wrapHeader/wrapHeader';
import styles from  './wrap.module.css';

const Wrap = (props) => {

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