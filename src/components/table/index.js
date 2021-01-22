import React from 'react';
import { Container, Tab, Td, Th, Tr } from './styles/table';

export default function Table ({ children, ...restProps }) {
    return <Container {...restProps}>{ children }</Container>;
}

Table.Tab = function TableTab({ children, ...restProps }) {
    
    return (
        <Tab>
            <Tr>
                <Th>Beer Name</Th>
                <Th>Brewery Name</Th>
                <Th>Style</Th>
            </Tr>
            <Tr>
                <Td>Miller</Td>
                <Td>Miller</Td>
                <Td>Light</Td> 
            </Tr>
            <Tr>
                <Td>Lafayette</Td>
                <Td>Great Flats</Td>
                <Td>IPA</Td>
            </Tr>
            <Tr>
                <Td>Ubu</Td>
                <Td>Lake Placid</Td>
                <Td>Brown Ale</Td>
            </Tr>
        </Tab>
    );
}