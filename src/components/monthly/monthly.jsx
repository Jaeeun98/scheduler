import React, { useState, useEffect} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import styled from 'styled-components';


const Section = ({ schedule }) => {
    const [event, setEvent] = useState([]);

    useEffect(() => {
        if(!schedule) return;
        let data = [];
        Object.values(schedule).map(value => (
            data.push(value)
        ))
        setEvent(data);
    }, [schedule])

    const schduleClick = e => {
        console.log(e);
    }
    
    const StyledSection = styled.section`
        height : 90vh;
        .fc {
            width:90%;
            height:80vh;
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
        .fc--button {
            display:none;
        }
        .google {
            color : red;
        }
    `

    return (
        <StyledSection>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, listPlugin, googleCalendarPlugin]}
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
        </StyledSection>
    )
}

export default Section;
