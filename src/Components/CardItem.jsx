import { Box, Button, Card, CardActionArea, CardContent, Typography } from '@mui/material'
import React from 'react'
import images from "../assets/dds.avif"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchSingle } from '../features/Slice'




const CardItem = ({ item }) => {
  // console.log(item)

  const dispatch = useDispatch()

  const handleClick = (id) =>{
      dispatch(fetchSingle(id))
  }

  return (
    <Link to={"/alldata"}>
     <Card sx={{ width: "330px", height: "350px", boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;", mt: 2, display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: 'center', bgcolor: "#35c4ed" }}>
      <img src={images} alt="" />
      {/* <Typography>` https://ik.imagekit.io/dev24/`</Typography> */}
      {/* <Box sx={{}}> */}
      <Typography variant='h5'>{item.Title}</Typography>
      <Button onClick={()=>handleClick(item._id)} sx={{ width: "300px", bgcolor: "white", color: "black" }} variant="contained">{item.Status}</Button>
      {/* </Box> */}
    </Card>
    </Link>
  )
}

export default CardItem
