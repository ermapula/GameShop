import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { users } from '../data/users.json'

import { useNavigate, useLocation } from 'react-router-dom';

function Login({setUser}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const [error, setError] = useState(false);
  function handleChange(e) {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    setError(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const user = users.find((u) => (
      u.username === formData.username && u.password === formData.password
    ))
    if(user){
      localStorage.setItem('user', user.id);
      setUser(user);

      const redirect = location.state?.from || '/'; 
      navigate(redirect);
    } else {
      setError(true)
    }
  }

  return (
    <Stack
      bgcolor={"background.default"}
      sx={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
      gap={3}
    > 
      <Typography variant="h4">
        Login
      </Typography>
      <form 
        onSubmit={handleSubmit}
      >
        <Stack
          direction="column"
          gap={1}
        >

          <TextField
            required
            id="username"
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        
        
          <TextField
            required
            type="password"
            id="password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        
          {
            error && (
              <Typography sx={{color: "red"}}>Incorrect username or password</Typography>
            )
          }
        
          <Button
            variant="contained"
            type="submit"
            color="primary"
          >
            Sign In
          </Button>
          
        </Stack>
      </form>
      
      
      
    </Stack>
  )
}

export default Login;
