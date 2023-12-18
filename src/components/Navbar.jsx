import { Notifications, Gamepad } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, Stack, Toolbar, Typography, styled } from "@mui/material";
import { Link } from 'react-router-dom';
// import { AvatarIcon } from '../../static/';

const MLink = styled(Link)({
  height: "100%",
  color: "white",
  textDecoration: "none",
  padding: "20px",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.1)"
  }
})

function Navbar() {
  return (
    <AppBar position='sticky'>
      <Toolbar sx={{
        display: "flex",
        justifyContent: "space-around",
        gap: '20px',
      }}>
        <MLink to='/'>
          <Stack direction='row' alignItems='center'>
            <Gamepad height='50px' width='50px' />
            <Typography variant="h6" noWrap>
              Game Shop
            </Typography>
          </Stack>
        </MLink>
        <Stack direction='row' gap={10}>
          <MLink to='/'>
            <Typography>
              Store
            </Typography>
          </MLink>
          <MLink to='/library'>
            <Typography>
              Library
            </Typography>
          </MLink>
          {/* <MLink to='/downloads'>
            <Typography>
              Downloads
            </Typography>
          </MLink> */}
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
