import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Report from './components/Report'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from './components/Error'
import Footer from './components/Footer'
import Faq from './components/Faq'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
         <Routes>
            <Route path='/'Component={Home}/>
            <Route path='/report' Component={Report}/>
            <Route path='*' Component={ErrorPage}/>
         </Routes>
         <Faq />
         <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App