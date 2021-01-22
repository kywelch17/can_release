import React from 'react';
import { Container, TitleLink, TitleLinkText } from './styles/footer';

export default function Footer ({ children, ...restProps }) {
    return <Container {...restProps}>{ children }</Container>;
}

Footer.Title = function FooterTitle({ children, ...restProps }) {
    return (
        <TitleLink {...restProps}>
            <TitleLinkText>{children}</TitleLinkText>
        </TitleLink>
    );
}