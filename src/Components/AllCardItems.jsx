import { Button, Card, Typography } from '@mui/material'
import React from 'react'
import images from "../assets/dds.avif"


const AllCardItems = () => {
    // console.log(item)
    return (
        <Card sx={{ width: "330px", height: "350px", boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;", mt: 2, display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: 'center', bgcolor: "#35c4ed" }}>
            <img src={images} alt="" />
            <Typography>` https://ik.imagekit.io/dev24/`</Typography>

            <Typography variant='h5'></Typography>
            <Button sx={{ width: "300px", bgcolor: "white", color: "black" }} variant="contained">New</Button>

        </Card>
    )
}

export default AllCardItems
