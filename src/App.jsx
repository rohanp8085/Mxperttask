import React from 'react'
// import {Box,AppBar,Toolbar,IconButton,Typography,Button} from "@mui/material"
import Home from './Components/Home'
import HeroSection from './Components/HeroSection'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AllData from './Components/AllData'
const App = () => {
  return (<>


    <Router>
      <Home />
      <Routes>
       <Route path='/' element={<HeroSection />}/>
        <Route path='/alldata' element={<AllData />} />

      </Routes>
    </Router>

  </>
  )
}

export default App
