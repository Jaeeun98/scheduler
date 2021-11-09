import React from 'react';
import styled from 'styled-components';
import styles from './weekly.module.css';

const Weekly = (props) => {
    const data = [
        { id : 1, todo : 'react 공부하기' },
        { id : 2, todo : '30분동안 운동하기'},
        { id : 3, todo : '이력서 작성하기'}
    ]

    const Ul = styled.ul`
        background:${props => props.theme.color};
        color:${props => props.theme.text};
        width:90%;
        border-radius:5px;
        padding:1rem;
        margin:auto;
    `
    const CheckBox = styled.button`
        width: 15px;
        height:15px;
        background:${props => props.theme.back};
        border-radius: 50%;
    `
    const InputBtn = styled.button`
        padding:5px;
        background:${props => props.theme.point};
        color:${props => props.theme.color};
    `

    return(
        <div className={styles.weekly}>
            <div className={styles.title}>WEEKLY</div>
            <form>
                <input type='text' className={styles.inputText} />
                <InputBtn type='submit'>Add</InputBtn>
            </form>
            <Ul>
                {data.map(list => 
                    <li key={list.id} className={styles.li}>
                        <CheckBox className={styles.checkBox}></CheckBox>
                        <span>{list.todo}</span>
                        <button>x</button>
                    </li>
                )}
            </Ul>
        </div>
    )
}

export default Weekly;