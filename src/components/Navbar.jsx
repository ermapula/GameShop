import { AppBar, Avatar, Box, Toolbar } from "@mui/material";
import { Link } from 'react-router-dom';
// import { AvatarIcon } from '../../static/';

function Navbar() {
  return (
    <AppBar position='sticky'>
      <Toolbar sx={{
        display: "flex",
        justifyContent: "center",
        gap: '20px',
      }}>
        <Link to="/" >Store</Link>
        <Link to="/library" >Library</Link>

        <Box>
          <Avatar 
            sx={{ width: 30, height: 30}}
            // src={AvatarIcon}
           />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
