import { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Store from './pages/Store'
import Library from './pages/Library'
import NotFoundPage from './pages/NotFoundPage'
import Game from './pages/Game'


function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Store />} />
        <Route path='/library' element={<Library />} />
        <Route path='/game' element={<Game />}/>          {/** change to dynamic route */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App;
