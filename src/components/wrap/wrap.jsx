import React, { useEffect, useState } from 'react';
import Daily from '../daily/daily';
import Header from '../header/header';
import Weekly from '../weekly/weekly';
import WrapHeader from '../wrapHeader/wrapHeader';
import styles from  './wrap.module.css'


const Wrap = (props) => {
    return(
        <div className={styles.wrap}>
            <WrapHeader />
        </div>

        
    )
}
export default Wrap;