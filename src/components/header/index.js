import React, { useState } from 'react';
import { Container, TitleLink, TitleLinkText, Items, Search, Input, Submit } from './style/header';

export default function Header({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
    return (
        <TitleLink {...restProps}>
            <TitleLinkText>{children}</TitleLinkText>
        </TitleLink>
    );
}

Header.Items = function HeaderItems({ children, ...restProps }) {
    return <Items {...restProps}>{children}</Items>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [active, setActive] = useState(false);

    return (
        <Search {...restProps}>
            <Input
                value={searchTerm}
                onChange={({ target}) => setSearchTerm(target.value)}
                placeholder="Search..."
                active={active}
            />
            <Submit 
                onClick={() => setActive(!active)}
            >
                Search
            </Submit>
        </Search>
    )
}