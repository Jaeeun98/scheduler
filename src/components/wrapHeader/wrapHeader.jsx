import React from 'react';
import styles from './wrapHeader.module.css';
import styled from 'styled-components';

const WrapHeader = ({ logout, colorMode }) => {
    const Header = styled.header`
        background:${props => props.theme.point};
        color:${props => props.theme.color};
        display:flex;
        padding:1rem;
        justify-content: space-between;
    `
    const Btn = styled.button`
        color:${props => props.theme.color};
        padding:0 1rem;
    `
    const ColorBtn = styled.button`
        width:15px;
        height:15px;
        margin:0 2px;
    `

    return(
        <Header>
            <div className={styles.logo}>MyDiary</div>
            <div className={styles.right}>
                <Btn onClick={logout}>Logout</Btn>
                <div className={styles.color}>
                    <ColorBtn className={styles.light} onClick={() => colorMode('light')}></ColorBtn>
                    <ColorBtn className={styles.brown} onClick={() => colorMode('brown')}></ColorBtn>
                    <ColorBtn className={styles.green} onClick={() => colorMode('green')}></ColorBtn>
                </div>
            </div>
        </Header>
    )
}
export default WrapHeader;