import React, { useEffect, useState } from 'react';
import Aside from '../aside/aside';
import Daily from '../daily/daily';
import Header from '../header/header';
import Weekly from '../weekly/weekly';
import WrapHeader from '../wrapHeader/wrapHeader';
import styles from  './wrap.module.css'


const Wrap = (props) => {
    return(
        <div className={styles.wrap}>
            <WrapHeader />
            <Aside />
        </div>

        
    )
}
export default Wrap;