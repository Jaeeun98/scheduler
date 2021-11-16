import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Section = (props) => {
    const userId = useSelector(state => state.id);
    console.log(userId);

    const StyledSection = styled.section`
        height : 90vh;
        .fc {
            width:90%;
            height:80vh;
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
                customButtons={{
                    diaryBtn:{
                        text : 'diary',
                        click:''
                    }
                }}
                headerToolbar = {{
                    start: 'prevYear, prev',
                    center: 'title',   
                    end: 'today, next, dayGridMonth, listWeek, timeGridDay, diaryBtn, nextYear',
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
                    }
                }}

                navLinks='true'  
                
            />
        </StyledSection>
    )
}

export default Section;
