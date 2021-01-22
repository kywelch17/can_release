import React, { useState } from 'react';
import Table from '../components/table';

export function TableContainer({ children }) {

    return (
       <Table>
           <Table.Tab/>
       </Table>
    )
}