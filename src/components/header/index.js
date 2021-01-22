import React, { useState } from 'react';
import { Container, Dropdown, TitleLink, TitleLinkText, Items, Search, Input, Submit, Buttons, ButtonArea } from './styles/header';
import { useHistory } from 'react-router-dom';

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

Header.Login = function HeaderLogin({ childern, ...restProps}){
    let history = useHistory();

    return (
        <ButtonArea>
            <Buttons {...restProps} onClick={() => history.push('/login')}>
                Login
            </Buttons>
            <Buttons {...restProps} onClick={() => history.push('/register')}>
                Register
            </Buttons>
            <Buttons {...restProps}>
                Logout
            </Buttons>
        </ButtonArea>
    )
}

/*
Header.Register = function HeaderRegister({ childern, ...restProps}){
    return (
        <Buttons {...restProps}>
            Register
        </Buttons>
    )
}

Header.Logout = function HeaderLogout({ childern, ...restProps}){
    return (
        <Buttons {...restProps}>
            Logout
        </Buttons>
    )
}
*/
Header.Dropdown = function HeaderDropdown({ childern, ...restProps}){
    return (
        <Dropdown>Dropdown Button Here</Dropdown>
    )
}