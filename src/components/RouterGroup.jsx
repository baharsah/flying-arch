import React from 'react'
import {Route, Routes , BrowserRouter as Router} from 'react-router-dom'
import Home from '../components/Home'
import DetailTour from './DetailTour'
const RouterGroup = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/detail' element={<DetailTour></DetailTour>}></Route>
        </Routes>
    </Router>
  )
}

export default RouterGroup