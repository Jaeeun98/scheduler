import React from 'react';
import styled from 'styled-components';
import styles from './schdule.module.css';

const Schdule = (props) => {
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
    
    return(
        <div className={styles.schdule}>
            <div className={styles.title}>Schedule Add</div>
            <form>
                <input type='datetime-local' className={styles.inputDate} defaultValue={getToday()} />
                <input type='datetime-local' className={styles.inputDate} />
                <input type='text' className={styles.inputText} placeholder='할 일을 입력해 주세요.' />
                <InputBtn type='submit'>Add</InputBtn>
            </form>
        </div>
    )
    
}

export default Schdule;