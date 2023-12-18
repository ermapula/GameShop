import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Store from './pages/Store'
import Library from './pages/Library'
import NotFoundPage from './pages/NotFoundPage'
import Downloads from './pages/Downloads'
import GamePage from './pages/GamePage'
import { Box, ThemeProvider, createTheme } from '@mui/material'
import Login from './pages/Login'
import {users} from './data/users.json';

function App() {
  const [user, setUser] = useState(null);
  const userId = localStorage.getItem('user');

  useEffect(() => {
    if(user){
      return;
    }
    if(userId){
      const filteredUser = users.find(user => user.id == userId);
      if(filteredUser){
        setUser(filteredUser)
      }
    }
  }, [userId, user])

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"Background.default"} color={"text.primary"} height="100%">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path='/' element={<Store user={user} />} />
          <Route path='/library' element={<Library user={user} />} />
          <Route path='/game/:game_id' element={<GamePage user={user}/>}/>
          <Route path='/downloads' element={<Downloads />} />
          <Route path='/login' element={<Login setUser={setUser} />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  )
}

export default App;
