import styled from 'styled-components/macro';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr 1fr 1fr;
    padding: 16px 24px;
    line-height: 1.5;
    color: #000;
    border-bottom: 2px solid #000;

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

export const TitleLinkText = styled.h1`
    flex: none;
    font-size: 28px;
`;

export const Items = styled.div`
    grid-column-start: 2;
    grid-column-end: 2;
    padding-left: 52px;

    align-items: center;
    display: none;

    @media (min-width: 768px) {
        display: grid;
    }
`;

export const Search = styled.div`
    justify-content: center;
    display: grid;
    grid-template-rows: 1fr 1fr;
    padding-right: 15px;
`;

export const Input = styled.input`
    outline: none;
    text-align: center;   
    background-color: inherit;
    color: inherit;
    border: 1.5px solid #000;
    border-radius: 10px;
    height: 34px;
    width: 125%;
    margin-bottom: 5px;
`;

export const Submit = styled.button`
    outline: none;
    background-color: inherit;
    color: #000;
    border: 1.5px solid #000;
    border-radius: 10px;
    height: 25px;
    width: 100px;
    margin-left: 8px;

    &:hover {
        background-color: #000;
        color: #fff;
        cursor: pointer;
    }
`;

export const buttonArea = styled.div`
    grid-column-start: 3;
    grid-column-end: 3;
    justify-content: center;
    align-items: center;
    
`;
export const Buttons = styled.button`
    display: none;

    @media (min-width: 768px) {
        display:grid;
        grid-template-rows: 1fr 1fr 1fr;
        justify-content: center;
        align-items: center;
        outline: none;
        background-color: inherit;
        color: #000;
        border: 1.5px solid #000;
        border-radius: 10px;
        height: 25px;
        width: 75px;
        margin-left: 8px;
        margin-bottom: 5px;
        padding-top: 5px;
        

        &:hover {
            background-color: #000;
            color: #fff;
            cursor: pointer;
        }
    }
    
`;

export const Dropdown = styled.div`
    grid-column-start: 4;
    grid-column-end: 4;
    justify-content: center;
    align-items: center;
    align-content: center;
    outline: none;
    background-color: inherit;
    color: #000;
    border: 1.5px solid #000;
    border-radius: 10px;
    height: 75px;
    width: 75px;
    margin-left: 8px;
    margin-bottom: 5px;
    margin-top: 2px;

    &:hover {
        background-color: #000;
        color: #fff;
        cursor: pointer;
    }
`;