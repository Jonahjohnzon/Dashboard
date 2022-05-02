import React from 'react'
import Login from '../Login/Login'
import Frontdash from '../Dashboard/Frontdash'
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom'
const Front = () => {
  return (
    <Router>
        <Routes>
       <Route exact path="/" element={ <Login/>}/>
       <Route exact path="/main/*" element={ <Frontdash/>}/>
        </Routes>
    </Router>
  )
}

export default Front