import React, {useState, useCallback} from 'react';
import styled, { keyframes } from 'styled-components';
import Profile from './profile';
import Schdule from './schduleAdd';
import { AiOutlineMenu } from 'react-icons/ai';

const FadeOut = keyframes`
        0% {}
        100% {
            transform: translateX(-100%);
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
    const AsideComponent = styled.aside`
        position:absolute;
        color:${props => props.theme.color};
        background:${props => props.theme.back};
        width:40%;
        height:100vh;
        text-align : center;
        padding:1rem 0;
        min-width:230px;
        max-width:400px;
        transition:all 1s;
        z-index:3;
        animation: ${props => props.toggle ? FadeOut : FadeIn} 1s forwards;

        .icon {
            position:absolute;
            top:10px;
            right:-40px;
            cursor:pointer;
            color:${props => props.theme.point};
            border:1px solid ${props => props.theme.point};
            width:15px;
            height:15px;
            border-radius: 50%;
            padding:0.5rem;
        }
    `

const Aside = ({ scheduleAdd, profileAdd, profile }) => {
    const [toggle, setToggle] = useState(true);

    const asideToggle = useCallback(() => {
        toggle ? setToggle(false) : setToggle(true);
    }, [toggle]);

    return(
        <AsideComponent toggle={toggle}>
            <AiOutlineMenu className='icon' onClick={asideToggle} />
            <Profile profileAdd={profileAdd} profile={profile} />
            <hr/>
            <Schdule scheduleAdd={scheduleAdd}/>
        </AsideComponent>
    )
}

export default Aside;