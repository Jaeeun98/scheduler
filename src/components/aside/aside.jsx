import React from 'react';
import styled, { keyframes } from 'styled-components';
import Profile from './profile';
import Schdule from './schduleAdd';
import styles from './aside.module.css';

const Aside = ({ scheduleAdd, profileAdd, profile, toggle }) => {

    console.log(toggle);
    const FadeOut = keyframes`
        0% {}
        100% {
            transform: translateX(-100%);
            display:none;
        }
    `

    const FadeIn = keyframes`
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0);
        }
    `

    const Aside = styled.aside`
        color:${props => props.theme.color};
        background:${props => props.theme.back};
        width:23%;
        height:100vh;
        text-align : center;
        font-size:20px;
        position:relative;
        padding:1rem 0;
        min-width:230px;
        transition:1s;
        ${
            toggle ? `transform:translateX(-100%); display:none` : `transform:translateX(0)`

        }
        
    `

    return(
        <Aside toggle={toggle}>
            <Profile profileAdd={profileAdd} profile={profile} />
            <hr/>
            <Schdule scheduleAdd={scheduleAdd}/>
        </Aside>
    )
}

export default Aside;