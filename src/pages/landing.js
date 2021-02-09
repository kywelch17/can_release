import React from 'react';
import { HeaderContainer } from '../container/header';
import { FooterContainer } from '../container/footer';
import { TableContainer } from '../container/table';
import { CalendarContainer } from '../container/calendar';


const Landing = () => {

    return (
        <>
            <HeaderContainer />
            <TableContainer />
            <CalendarContainer />
            <FooterContainer />
        </>
    );
}

export default Landing;