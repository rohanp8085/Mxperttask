import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import CardItem from './CardItem'
import { useDispatch, useSelector } from 'react-redux'
import { FetchData } from '../features/Slice'

const HeroSection = () => {

    const { user } = useSelector(state => state.Auth)
    // const user = useSelector(state => state.auth)


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(FetchData())
    }, [])

    return (
        <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", minHeight: "100vh" }} className='hero-sec'>
            {
                user.map(item => <CardItem key={item._id} item={item} />)
            }


        </Box>
    )
}

export default HeroSection
