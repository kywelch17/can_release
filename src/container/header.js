import React, { useState } from 'react';
import Header from '../components/header';

export function HeaderContainer({ children }) {
    const [searchTerm, setSearchTerm] = useState('');

    return (
       <Header>
            <Header.Title href="/">CAN RELEASE</Header.Title>
            <Header.Items>
                <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </Header.Items>
       </Header>
    )
}