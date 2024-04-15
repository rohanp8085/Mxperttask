import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
// import png from "../assets/svg.png"

const Home = () => {
    return (
        <>
            <div className='home'>
                <nav className='navbar'>
                    <Link to={"/"}> <Typography variant='h5'>BrainyLingo</Typography></Link>
                    <span className='nave-links'>
                        <a href="#">Home</a>
                        <a href="#">Leaderboard</a>
                        <a href="#">Daily Quit</a>
                    </span>
                    <button className='sign-btn'>sign Out</button>
                </nav>

                <Box sx={{ width: "100%", minHeight: "300px", display: "flex", alignItems: "center", justifyContent: "space-evenly", flexDirection: "column" }}>
                    <Typography variant='h3' sx={{ color: "white" }}>Science Fiction Stories</Typography>
                    <Box className="btn-group" sx={{display:"flex", justifyContent:"space-between" , width:"500px"}}>
                        <Button sx={{ borderRadius: "20px" }} variant="contained">Contained</Button>
                        <Button sx={{ borderRadius: "20px", bgcolor: "gold" }} variant="contained">Contained</Button>
                        <Button sx={{ borderRadius: "20px", bgcolor: "greenyellow" }} variant="contained">Contained</Button>
                        <Button sx={{ borderRadius: "20px" }} variant="contained">Contained</Button>
                    </Box>


                </Box>

            </div>

           

        </>

    )
}

export default Home
