import styled from 'styled-components/macro';

export const Container = styled.div`
    position:absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: #000;
    border-top: 2px solid #000;

    a {
        color: #000;
    }
`;

export const TitleLink = styled.a`
    grid-column-start: 1;
    grid-column-end: 1;
    text-decoration: none;
    display: flex;
    margin: auto 10px;
    padding-right: 10px;
    
`;

export const TitleLinkText = styled.h4`
    flex: none;
    font-size: 14px;
`;
