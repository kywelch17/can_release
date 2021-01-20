import React from 'react';
import Calendar from '../components/calendar';

export function CalendarContainer({ children }) {

    return (
       <Calendar>
           <Calendar.Cal/>
       </Calendar>      
    )
}