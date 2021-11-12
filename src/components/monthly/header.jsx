import React from 'react';
import styled from 'styled-components';
import styles from './header.module.css'


const Header = (props) => {
    const Btn = styled.button`
        color:${props => props.theme.point};
        padding:0 5rem;
    `
    const Year = styled.div`
        color:${props => props.theme.sub};

        cursor:default;
        transform: translate(15px, 15px);
    `
    const Mon = styled.div`
        color:${props => props.theme.point};
        font-size: 30px;
        font-weight: bold;
        cursor:default;
    `
    return(
        <header className={styles.header}>
            <Year>2021</Year>
            <div className={styles.mon}>
                <Btn>&#5176;</Btn>
                <Mon>11</Mon>
                <Btn>&#5171;</Btn>
            </div>
        </header>
    )
}

export default Header;