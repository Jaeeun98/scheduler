import React from 'react';
import styled from 'styled-components';
import styles from './schduleAdd.module.css';

const Schdule = ({ scheduleAdd }) => {

    const InputBtn = styled.button`
        width:77%;
        padding:10px;
        background:${props => props.theme.point};
        color:${props => props.theme.color};
    `
    const getToday = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = 1+(date.getMonth());
        const day = date.getDate();
        return `${year}-${month}-${day}`
    }

    const inputData = (e) => {
        e.preventDefault();
        const start = e.target[0].value;
        const end = e.target[1].value;
        const title = e.target[3].value;
        const allDay = e.target[2].value;

        scheduleAdd(title, start, end, allDay);
        for(let i=0; i<4; i++){
            e.target[i].value = '';
        }
    }
    
    return(
        <div className={styles.schedule}>
            <div className={styles.title}>Schedule Add</div>
            <form onSubmit={inputData}>
                <input type='datetime-local' className={styles.inputDate} defaultValue={getToday()} />
                <input type='datetime-local' className={styles.inputDate} />
                <label className={styles.checkBox}><input type='checkbox' name='allDay' value='true'/>All Time</label>
                <input type='text' className={styles.inputText} placeholder='할 일을 입력해 주세요.' required/>
                <InputBtn type='submit'>Add</InputBtn>
            </form>
        </div>
    )
    
}

export default Schdule;