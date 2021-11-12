import React from 'react';
import styles from './section.module.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import styled from 'styled-components';


const Section = (props) => {
    const StyledSection = styled.section`
        .fc {
            width:90%;
            height:80vh;
            margin-top:2rem;
            
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
        .fc--button {
            display:none;
        }

    `

    return (
        <StyledSection>
            <FullCalendar

                plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
                initialView="dayGridMonth"
                headerToolbar = {{
                    start: 'prev, prevYear',
                    center: 'title',   
                    end: 'nextYear, dayGridMonth, timeGridWeek, timeGridDay, listWeek,  next',
                    
                }}
                views={{
                    dayGridMonth: { 
                        titleFormat: { year: 'numeric', month: 'short', }
                    },
                    week: {
                        titleFormat: { year: 'numeric', month: 'short', }
                    },
                    timeGrid: {
                        titleFormat: { year: 'numeric', month: 'short', }
                    }
                }}

                navLinks='true'  
                
            />
        </StyledSection>
    )
}

export default Section;
