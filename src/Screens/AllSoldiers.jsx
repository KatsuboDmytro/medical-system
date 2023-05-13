import React, { useState } from 'react'
import { TextField, Button, Box } from '@mui/material';

import { SoldiersTable } from '../component/SoldiersTable'
import { Header } from '../component/Header';

export const AllSoldiers = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = ({ target: { value } }) => {
        setSearchValue(value);
    };

    return (
        <>
            <Header />
            <Box>
                <TextField
                style={{margin: '25px 10px 20px 25px'}}
                label="Знайти військового"
                variant="outlined"
                value={searchValue}
                onChange={handleInputChange}
                />
            </Box>
            <SoldiersTable />
        </>
    )   
}
