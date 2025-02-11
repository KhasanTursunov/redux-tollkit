import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'

const RouterMain = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Route>
    </Routes>
  )
}

export default RouterMain