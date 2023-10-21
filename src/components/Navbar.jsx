import { Notifications } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, Stack, Toolbar, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
// import { AvatarIcon } from '../../static/';

function Navbar() {
  return (
    <AppBar position='sticky'>
      <Toolbar sx={{
        display: "flex",
        justifyContent: "space-around",
        gap: '20px',
      }}>
        <Box>
          
        </Box>
        <Stack direction='row' gap={20}>
          <Typography sx={{fontSize: '16px'}}>
            <Link to="/" >Store</Link>
          </Typography>
          <Typography sx={{fontSize: '16px'}}>
            <Link to="/library" >Library</Link>
          </Typography>
          <Typography sx={{fontSize: '16px'}}>
            <Link to="/downloads">Downloads</Link>
          </Typography>
        </Stack>

        <Stack direction='row' gap={5} alignItems='center'>
          <Badge badgeContent={2} color="success">
            <Notifications />
          </Badge>
          <Avatar 
            sx={{ width: 40, height: 40}}
            // src={AvatarIcon}
           />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
