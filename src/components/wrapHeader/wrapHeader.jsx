import React from 'react';
import styles from './wrapHeader.module.css';
import styled from 'styled-components';

const WrapHeader = ({ logout }) => {
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
    return(
        <Header>
            <div className={styles.logo}>MyDiary</div>
            <div className={styles.right}>
                <Btn onClick={logout}>Logout</Btn>
                <Btn>Dark</Btn>
            </div>
        </Header>
    )
}
export default WrapHeader;