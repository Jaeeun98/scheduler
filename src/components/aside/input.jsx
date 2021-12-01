import React from 'react';
import styles from './input.module.css';
const Input = () => {
    
    return (
        <>
            <input type='datetime-local' className={styles.inputDate} required/>
            <input type='datetime-local' className={styles.inputDate} required/>
            <label className={styles.checkBox}><input type='checkbox' name='allDay' value='true'/>All Time</label>
            <input type='text' className={styles.inputText} placeholder='할 일을 입력해 주세요.' required/> 
        </>
    )
}

export default Input;