import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import styles from './profile.module.css';

const Modal = styled.div`
        width:90%;
        height:35%;
        background:${props => props.theme.color};
        padding:2rem;
        position: absolute;
        top:3.5%;
        left:5%;
        border-radius:5px;
    `
    const Btn = styled.button`
        background:${props => props.theme.back};
        color:${props => props.theme.color};
        padding:0.7rem;
        font-weight:bold;
        font-size:17px;
    `  
    const FileBtn = styled.button`
        width:60%;
        height:30px;
        background:${props => props.theme.point};
        color:${props => props.theme.color}
    `
const Profile = React.memo(({ profileAdd, profile }) => {
    const [modal, setModal] = useState();
    const [file, setFile] = useState(null);

    const inputRef = useRef();

    const openModal = () => {
        setModal(true);
    }

    const inputForm = async e => {
        e.preventDefault();
        if(!file){
            alert('프로필 사진을 넣어주세요'); 
        } else {
            const name = e.target[3].value;
            const aim = e.target[4].value;
        
            await profileAdd(file, name, aim);
            modalClose();
        }
    }

    const modalClose = () => {
        setModal(false);
    }

    const btnClick = (e) => {
        e.preventDefault();
        inputRef.current.click();
    }
    const fileAdd = e => {
         setFile(e.target.files[0]);
    }

    return(
        <div className={styles.profile}>
            <div className={styles.img} onClick={openModal}>
                <img src={profile.fileUrl ? profile.fileUrl : 'apple.png'} alt={`${profile.fileName}Img`} className={styles.img}/>
            </div>
            <div className={styles.text}>
                <p className={styles.name}>{profile ? profile.name : '이름'}</p>
                <p>{profile ? profile.aim : '목표' }</p>
            </div>
            {modal &&
                <Modal>
                    <form className={styles.modalForm} onSubmit={inputForm}>
                        <button className={styles.closeBtn} onClick={modalClose}>X</button>
                        <div className={styles.file}>
                            <input ref={inputRef} type='file' accept='image/*' onChange={fileAdd} name='file' className={styles.input} />
                            <FileBtn onClick={btnClick} className={styles.btn}>파일 입력</FileBtn>
                            <p className={styles.fileText}>{file ? file.name : 'No'}</p>
                        </div>
                        <input type='text' placeholder='이름을 입력해 주세요' required />
                        <input type='text' placeholder='목표를 입력해 주세요' required />
                        <Btn type='submit'>완료</Btn>
                    </form>
                </Modal>
            }
        </div>
        
    )
});

export default Profile;