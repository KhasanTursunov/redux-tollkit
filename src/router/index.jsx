import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SuspenseContainer } from '../utils'
// import Home from '../pages/home/Home'
// import About from '../pages/about/About'
// import Contact from '../pages/contact/Contact'
// import Layout from '../pages/layout/Layout'
const Home = lazy(() => import("../pages/home/Home"))
const About = lazy(() => import("../pages/about/About"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const Layout = lazy(() => import("../pages/layout/Layout"));
const RouterMain = () => {
  return (
    <Routes>
        <Route path='/' element={<SuspenseContainer><Layout/></SuspenseContainer>}>
            <Route path='/' element={<SuspenseContainer><Home/></SuspenseContainer>}/>
            <Route path='/about' element={<SuspenseContainer><About/></SuspenseContainer>}/>
            <Route path='/contact' element={<SuspenseContainer><Contact/></SuspenseContainer>}/>
        </Route>
    </Routes>
  )
}

export default RouterMain
