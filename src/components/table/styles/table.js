import styled from 'styled-components/macro';

export const Container = styled.div`
    margin-top: 20px;
    width: 75%;
    overflow-x: auto;
    overflow-y: auto;
    display: grid;
    font-family: "Verdana", sans-serif;
    align-items: center;
    justify-content: center;
`;

export const Tab = styled.table`
    width: 100%;
    align-items:center;
    justify-content:center;
    border: 1px solid #000;
    border-collapse:collapse;
`;

export const Th = styled.th`
    background-color: #EE6C4D;
    color: white;
    height: 50px;
`;

export const Tr = styled.tr`

    border: 1px solid #000;
    &:hover { background-color: black; color: white;}
    &:nth-child(even) {background-color:grey;}
`;

export const Td = styled.td`
    border: 1px solid #000;
    text-align: center;
`;