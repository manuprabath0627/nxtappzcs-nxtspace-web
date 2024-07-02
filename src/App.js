import './App.css'
import './resources/fontawesome-free/css/all.min.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contact from '../src/components/pages/Contact'
// import Header from './components/common/Header'
// import Footer from './components/common/Footer'
import Login from '../src/components/pages/Login'
import { SbTemplate } from './components/common/SbTemplate'

function App () {
  return (
    <div className="App" id="page-top">
      <Routes>
        <Route path="/" element={<SbTemplate />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
      </Routes>

      <div id="wrapper">
        {/* <Header/>
      <Routes>
      <Route path="/" element={<Navigate to="/Dashboard" />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer/> */}
      </div>
    </div>
  )
}

export default App
