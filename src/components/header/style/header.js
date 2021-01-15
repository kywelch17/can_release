import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    padding: 16px 24px;
    line-height: 1.5;
    color: #000;
    border-bottom: 2px solid #000;

    a {
        color: #000;
    }
`;

export const TitleLink = styled.a`
    text-decoration: none;
    display: flex;
    margin: auto 10px;
`;

export const TitleLinkText = styled.h1`
    flex: none;
    font-size: 28px;
`;

export const Items = styled.div`
    padding-left: 52px;

    align-items: center;
    display: none;

    @media (min-width: 768px) {
        display: flex;
    }
`;

export const Search = styled.div`
    justify-content: center
    display: flex;
`;

export const Input = styled.input`
    outline: none;
    text-align: center;   
    background-color: inherit;
    color: inherit;
    border: 1.5px solid #000;
    border-radius: 10px;
    height: 34px;
    width: 100%;
`;

export const Submit = styled.button`
    outline: none;
    background-color: inherit;
    color: #000;
    border: 1.5px solid #000;
    border-radius: 10px;
    height: 30px;
    width: 150px;
    margin-left: 8px;

    &:hover {
        background-color: #000;
        color: #fff;
        cursor: pointer;
    }
`;

export const Buttons = styled.div`

`;

export const Dropdown = styled.div`

`;