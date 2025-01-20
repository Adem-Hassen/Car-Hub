import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Main from './pages/Main'

import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cars" element={<Main/>} />
        
      </Routes>
      </BrowserRouter>
<Footer></Footer>
    </div>
  )
}

export default App