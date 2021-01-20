/*
* https://dev.to/zhiyueyi/how-to-create-a-simple-react-calendar-with-styled-component-42n6
* 
* Used simple-react-calendar from link above as base.
*/

import React, { useEffect, useState } from 'react';
import { Container, Frame, Header, Button, Body, Day} from './styles/calendar'

export default function Calendar ({ children, ...restProps }) {
    return <Container {...restProps}>{ children }</Container>;
}

Calendar.Cal = function CalendarCal({ children, ...restProps }) {
    const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_OF_THE_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    const today = new Date();
    const [date, setDate] = useState(today);
    const [day, setDay] = useState(date.getDate());
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear());
    const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

    useEffect(() => {
        setDay(date.getDate());
        setMonth(date.getMonth());
        setYear(date.getFullYear());
        setStartDay(getStartDayOfMonth(date));
    }, [date]);

    function getStartDayOfMonth(date) {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 ===0;
    }

    const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;

    return (
        <Frame>
            <Header>
                <Button onClick={() => setDate(new Date(year, month-1, day))}>Prev</Button>
                <div>
                    {MONTHS[month]} {year}
                </div>
                <Button onClick={() => setDate(new Date(year, month + 1, day))}>Next</Button>
            </Header>
            <Body>
                {DAYS_OF_THE_WEEK.map(d => (
                    <Day key={d}>
                        <strong>{d}</strong>
                    </Day>
                ))}
                {Array(days[month] + (startDay - 1))
                    .fill(null)
                    .map((_, index) => {
                        const d = index - (startDay-2);
                        return (
                            <Day
                                key={index}
                                isToday={d === today.getDate()}
                                isSelected={d === day}
                                onClick={() =>setDate(new Date(year, month, d))}
                                >
                                    {d > 0 ? d : ''}
                                </Day>
                        );
                    })
                }
            </Body>
        </Frame>
    );
}