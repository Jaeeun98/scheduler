import React from 'react';
import styles from './schduleAdd.module.css';
import styled from 'styled-components';
import Input from './input';

const InputBtn = styled.button`
        width:77%;
        padding:10px;
        background:${props => props.theme.point};
        color:${props => props.theme.color};
    `

const Schdule = ({ scheduleAdd }) => {

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
                <Input />
                <InputBtn type='submit'>Add</InputBtn>
            </form>
            
        </div>
    )
}

export default Schdule;