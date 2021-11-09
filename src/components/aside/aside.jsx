import React from 'react';
import styled from 'styled-components';
import Profile from './profile';
import Weekly from './weekly';

const Aside = (props) => {
    const Aside = styled.aside`
        color:${props => props.theme.color};
        background:${props => props.theme.back};
        width:25%;
        height:100%;
        text-align : center;
        font-size:20px;
        position:relative;
        padding-bottom:1rem;
    `
    return(
        <Aside>
            <Profile />
            <hr/>
            <Weekly />
        </Aside>
    )
}

export default Aside;