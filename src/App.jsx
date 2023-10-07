import { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Store from './pages/Store'
import Library from './pages/Library'
import NotFoundPage from './pages/NotFoundPage'
import Game from './pages/GamePage'
import Downloads from './pages/Downloads'


function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Store />} />
        <Route path='/library' element={<Library />} />
        <Route path='/game/:game_id' element={<Game />}/>
        <Route path='/downloads' element={<Downloads />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App;
