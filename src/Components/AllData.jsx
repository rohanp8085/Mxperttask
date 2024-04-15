import { Box, Button, Card, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import AllCardItems from './AllCardItems'

const AllData = () => {

    const { Singledata } = useSelector(state => state.Auth)
    console.log(Singledata)
    return (
        <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", minHeight: "100vh" }} className='hero-sec'>

        <AllCardItems />
        </Box>
       

    )
}

export default AllData
