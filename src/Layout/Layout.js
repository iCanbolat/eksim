import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';

const StyledButton = styled(Button)(({ theme }) => ({
    '&:active': {
      border: '2px dotted',


    }
}))
 
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'transparent',
    color:'black',
    
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(3)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      
      [theme.breakpoints.up('sm')]: {
        width: '1ch',
        '&:focus': {
          width: '20ch',
        },
      },
      [theme.breakpoints.down('sm')]: {
        width: '1ch',
        '&:focus': {
          width: '7ch',
        },
      },
    },
  }));
  

const pages = 
    [
      {
        "name" : 'Kurumsal',
        "path" : "/kurumsal"
      },
      {
        "name" : "Enerji Üretim",
        "path" : "/enerji"
      },
      {
        "name" : "Elektrik Toptan Satış",
        "path" : "/elektrik-satis"
      },
      {
        "name" : "Doğal Gaz İthalat",
        "path" : "/dogalgaz"
      },
      {
        "name" : "İnsan Kaynakları",
        "path" : "/insan-kaynaklari"
      },
      {
        "name" : "Bilgi Toplum Hizmetleri",
        "path" : "/bilgi"
      },
      {
        "name" : "İletişim",
        "path" : "/iletisim"
      }
    ];

const Layout = ({ children }) => {
    const history = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (path) => {
      history(path)
      setAnchorElNav(null);
    };


  return (
      <>
    <AppBar position="static" style={{ backgroundColor:'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex', color:'black' } }}
          >
            EKSİM <br></br> ENERJİ
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ flexGrow: 1,   display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} 
                  sx={{ justifyContent: 'flex-end' }} 
                  onClick={() => {handleCloseNavMenu(page.path)} }>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, mb:1, justifyContent: 'flex-end', display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {handleCloseNavMenu(page.path)} }
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Divider orientation="vertical" flexItem />
          <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </Container>
    </AppBar>
 
    
        {children}
    
    </>
  );
}

export default Layout