import React, { useState, useEffect} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import styled from 'styled-components';
import Input from '../aside/input';
import { AiOutlineMenu } from 'react-icons/ai';


const Section = ({ schedule, scheduleChange, scheduleDel, aideToggle }) => {
    const [event, setEvent] = useState([]);
    const [modal, setModal] = useState(false);
    const [data, setData] = useState('');

    useEffect(() => {
        if(!schedule) return;
        let data = [];
        Object.values(schedule).map(value => (
            data.push(value)
        ))
        setEvent(data);
    }, [schedule])

    const schduleClick = e => {
        setModal(true);
        setData(e.event._def.publicId);
    }

    const modalDel = () => {
        setModal(false);
    }

    const schduleChangeClick = e => {
        e.preventDefault();
        const start = e.target[1].value;
        const end = e.target[2].value;
        const title = e.target[4].value;
        const allDay = e.target[3].value;

        scheduleChange(data, title, start, end, allDay);
        modalDel();
        
    }

    const schduleDelClick = () => {
        scheduleDel(data); 
        modalDel();
    }


    const Modal = styled.form`
        width:30%;
        background:${props => props.theme.back};
        text-align:center;
        padding:3rem 2rem;
        position:absolute;
        z-index:1;
        border-radius:5px;
    `
    const DelBtn = styled.button`
        position: absolute;
        right: 1rem;
        top: 1rem;
        width:20px;
        height:20px;
        font-weight:bold;
        background:#fff;
        color:${props => props.theme.point}
    `

    const Btn = styled.button`
        width:75%;
        background:${props => props.theme.point};
        color:${props => props.theme.color};
        padding:1rem;
        margin:0.3rem;
    `
    
    const StyledSection = styled.section`
        position:relative;
        height : 90vh;
        .fc {
            width:90%;
            height:80vh;
        }
        .fc .fc-day {
            padding:5px;
        }
        .fc .fc-day-sun {
            color:red;
        }
        .fc .fc-day-sat {
            color:blue;
        }
        .fc .fc-button-primary {
            background:none;
            color:${props => props.theme.point};
            border:none;
        }
        .fc .fc-button-primary:not(:disabled):active, .fc .fc-button-primary:not(:disabled).fc-button-active {
            background:none;
            border:none;
            color:${props => props.theme.point};
            font-weight:bold;
        }
        .fc-direction-ltr .fc-button-group > .fc-button:not(:first-child) {
            display:none;
        }
        .fc .fc-button-group > .fc-button:hover, .fc .fc-button-primary:hover {
            background:#fff;
            color:${props => props.theme.point};
        }
        .fc .fc-toolbar-title {
            cursor:default;
            color:${props => props.theme.text};
        }
        .fc-daygrid-day .fc-day .fc-day-tue .fc-day-today {
            color:${props => props.theme.point};
        }
        .fc-event{
            cursor: pointer;
        }
        .fc--button {
            display:none;
        }
        .fc .fc-day-today {
            background:none;
        }
        .fc .fc-day-today .fc-daygrid-day-number {
            background:${props => props.theme.point};
            color:${props => props.theme.color};
            border-radius:50%;
        }
        .fc .fc-h-event {
            border:none;
            background:${props => props.theme.back};
            padding:2px;
            border-radius:5px;
        }
        .google {
            color : red;
        }

        .icon {
            position:absolute;
            top:10px;
            left:10px;
            cursor:pointer;
            color:${props => props.theme.point};
            border:1px solid ${props => props.theme.point};
            width:15px;
            height:15px;
            border-radius: 50%;
            padding:0.5rem;
        }
        `
    return (
        <StyledSection>
            <AiOutlineMenu className='icon' onClick={aideToggle} />
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, listPlugin, googleCalendarPlugin]}
                initialView="dayGridMonth"
                headerToolbar = {{
                    start: 'prevYear, prev',
                    center: 'title',   
                    end: 'today, next, dayGridMonth, listWeek, timeGridDay, nextYear',
                }}
                views={{
                    dayGridMonth: { 
                        titleFormat: { year: 'numeric', month: 'short', }
                    },
                    week: {
                        titleFormat: { year: 'numeric', month: 'short', day:'numeric'}
                    },
                    timeGrid: {
                        titleFormat: { year: 'numeric', month: 'short', day:'2-digit'}
                    },
                }}
                
                events={event}
                eventClick={
                    schduleClick
                }
                googleCalendarApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                eventSources={{
                    textColor : 'red',
                    backgroundColor:'#fff',
                    borderColor:'#fff',
                    googleCalendarId : 'qduatr3seur835pk4aolok2900@group.calendar.google.com'
                }}
                navLinks='true'  
            />
            {modal &&
                <Modal onSubmit={schduleChangeClick}>
                    <DelBtn onClick={modalDel}>X</DelBtn>
                    <Input />
                    <Btn type='submit'>수정하기</Btn>
                    <Btn onClick={schduleDelClick}>삭제하기</Btn>
                </Modal>
            }    
        </StyledSection>
    )
}

export default Section;
