import React from 'react';
import styled from 'styled-components';
import styles from './header.module.css'

const Header = (props) => {
    const Btn = styled.button`
        color:${props => props.theme.point};
    `
    const Title = styled.h1`
        color:${props => props.theme.point};
        letter-spacing: 5px;
        font-size: 30px;
        font-weight: bold;
    `

    return(
        <header className={styles.header}>
            <Btn>&#5176;</Btn>
            <Title>21, 11</Title>
            <Btn>&#5171;</Btn>
        </header>
    )
}

export default Header;