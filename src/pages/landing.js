import React from 'react';
import { HeaderContainer } from '../container/header';
import { FooterContainer } from '../container/footer';
import { TableContainer } from "../container/table";

const Landing = () => {
    return (
        <>
            <HeaderContainer />
            <TableContainer />
            <FooterContainer />
        </>
    );
}

export default Landing;