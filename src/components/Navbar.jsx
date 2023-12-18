import { Notifications, Gamepad } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, Menu, MenuItem, Stack, Toolbar, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const MLink = styled(Link)({
  height: "100%",
  color: "white",
  textDecoration: "none",
  padding: "20px",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.1)"
  }
})

function Navbar({user, setUser}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [avatarIcon, setAvatarIcon] = useState(null);
  const open = Boolean(anchorEl);

  async function importAvatar() {
    try {
      const { default: AvatarIcon } = await import(`../images/user-avatar/${user.id}.png`);
      setAvatarIcon(AvatarIcon);
    } catch (error) {
      console.log("Error at avatar import:", error)
    }
  }

  useEffect(() => {
    if(user){
      importAvatar();
    }
  }, [user])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


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

        <Stack direction='row' gap={3} alignItems='center'>
          <Badge badgeContent={2} color="success">
            <Notifications />
          </Badge>
          <div>
          {
            user && <Typography>{user.username}</Typography>
          }
          </div>
          <Avatar 
            id="avatar-icon"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{ width: 40, height: 40, cursor: "pointer", "&:hover": {boxShadow: "0 0 5px white"}}}
            src={avatarIcon}
           />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'avatar-icon',
            }}
          >
            <MenuItem onClick={handleClose} sx={{padding: "0"}}>
              {
                user ? (
                  <MLink to='/' onClick={() => {setUser(null); window.location.reload()}} sx={{padding: "5px 15px"}}>
                    <Typography>
                      Logout
                    </Typography>
                  </MLink>
                ) : (
                  <MLink to='/login' sx={{padding: "5px 15px"}}>
                    <Typography>
                      Login
                    </Typography>
                  </MLink>
                )
              }
            </MenuItem>
          </Menu>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
