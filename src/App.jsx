import React from 'react'
import { Routes, Route } from "react-router"
import Home from './pages/Home'
import Login from './pages/Login'



const App = () => {
return (
   <Routes>
  <Route index element={<div>hi</div>}/>
   <Route path='login' element={<Login/>}/>
    <Route path='signup' element={<div>hi</div>}/>

</Routes>
 
)
}

export default App
