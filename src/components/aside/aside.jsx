import React from 'react';
import styled from 'styled-components';
import Profile from './profile';
import Schdule from './schduleAdd';

const Aside = ({ scheduleAdd, profileAdd, profile}) => {
    const Aside = styled.aside`
        color:${props => props.theme.color};
        background:${props => props.theme.back};
        width:25%;
        height:100vh;
        text-align : center;
        font-size:20px;
        position:relative;
        padding:1rem 0;
    `
    return(
        <Aside>
            <Profile profileAdd={profileAdd} profile={profile} />
            <hr/>
            <Schdule scheduleAdd={scheduleAdd}/>
        </Aside>
    )
}

export default Aside;