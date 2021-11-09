import React, { useState } from 'react';
import styled from 'styled-components';
import styles from './profile.module.css';

const Profile = (props) => {
    const [modal, setModal] = useState();

    const Modal = styled.div`
        width:90%;
        height:auto;
        background:${props => props.theme.color};
        padding:2rem;
        position: absolute;
        top:5%;
        left:5%;
        border-radius:5px;
    `
    const Btn = styled.button`
        background:${props => props.theme.back};
        color:${props => props.theme.color};
        border-radius:5px;
        padding:0.7rem;
        font-weight:bold;
        font-size:17px;
    `  

    const openModal = () => {
        setModal('open');
    }

    return(
        <div className={styles.profile}>
            <div className={styles.title}>YOUR PROFILE</div>
            <div className={styles.img} onClick={openModal}>
                <img src='./ex.jpg' alt='profileImg' />
            </div>
            <div className={styles.text}>
                <p className={styles.name}>Name : 권재은</p>
                <p>'인생을 열심히 살자'</p>
            </div>
            {modal && 
                <Modal>
                    <form className={styles.form}>
                        <input type='file' />
                        <input type='text' placeholder='이름을 입력해 주세요' />
                        <input type='text' placeholder='목표를 입력해 주세요' />
                        <Btn type='submit'>완료</Btn>
                    </form>
                </Modal>
            }
            
        </div>
        
    )
}

export default Profile;