import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/userSlice';

const pages = ['About', 'Chat'];

export const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const to = '/'
  const { isAuth } = useAuth()
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    dispatch(removeUser())
    navigate(to)
  }

  const handleRouteTo = (to) => {
    navigate(to)
  }


  return (
    <AppBar
      position="static"
      sx={{
        background: '#cddc39'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="h6"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to={'/'}>
              LOGO
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography
                    sx={{ textAlign: 'center' }}
                    onClick={() => handleRouteTo(`/${page === 'About' ? '' : page.toLowerCase()}`)}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
              {
                isAuth
                  ? <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      sx={{ textAlign: 'center' }}
                      onClick={handleLogout}
                    >
                      Logout
                    </Typography>
                  </MenuItem>
                  : <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      sx={{ textAlign: 'center' }}
                      onClick={() => handleRouteTo('/logout')}
                    >
                      Login
                    </Typography>
                  </MenuItem>
              }

            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="h5"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            onClick={() => handleRouteTo('/')}
          >
            LOGO
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            onClick={handleCloseNavMenu}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleRouteTo(`/${page === 'About' ? '' : page.toLowerCase()}`)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {isAuth
              ? <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={handleLogout}
              >
                Logout
              </Button>
              : <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={() => handleRouteTo('/login')}
              >
                Login
              </Button>
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
