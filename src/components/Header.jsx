import React from 'react';
import { AppBar, Toolbar, Typography, Link, Box, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import amerikaMap from '../assets/imgs/svgs/amerika.svg';
import search from '../assets/imgs/svgs/search.svg';
import basket from '../assets/imgs/svgs/basket.svg';
import Logo from '../assets/imgs/Logo.png';

const Header = () => {
    return (
        <AppBar position="fixed">
            <Toolbar sx={{ justifyContent: 'space-between', px: { xs: '30px', md: '60px', lg: '120px' }, py: '15px', bgcolor: '#F6623F', color: 'white' }}>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Typography variant="body2" sx={{ marginLeft: 10 }}>
                        Afterpay, Laybuy & Genoapay | Free Delivery New Zealand + Australia*
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                        <Link href="#" variant="body1" sx={{ marginRight: 5 ,color: 'white',textDecoration: 'none'}}>
                            Sign In
                        </Link>
                        <span>/</span>
                        <Link href="#" variant="body1" sx={{ marginLeft: 5,color: 'white',textDecoration: 'none' }}>
                            Register
                        </Link>
                    </Box>
                    <Box sx={{ width: '2px', height: '27px', opacity: 0.3, bgcolor: 'white', mx: 3 }} />
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={amerikaMap} alt="" width={24} height={16} />
                        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 2 }}>
                            <Typography variant="body2" sx={{ marginRight: 1 }}>USD</Typography>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4" viewBox="0 0 8 4" fill="none">
                                <path d="M0 0L4 4L8 0H0Z" fill="white" />
                            </svg>
                        </Box>
                    </Box>
                </Box>
            </Toolbar>
            <Toolbar sx={{ justifyContent: 'space-between', px: { xs: '30px', md: '60px', lg: '120px' }, py: '28px', bgcolor: '#FFFFFF', borderBottom: '1px solid #E0E0E0', }}>
                <Box>
                    <Link href="#" variant="body1">
                        <img src={Logo} alt="Logo" width={198} height={47} />
                    </Link>
                </Box>
                <Box>
  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '55px'}}>
    <li>
      <Link href="#" variant="body1" style={{ color: 'black',textDecoration: 'none' }}>Home</Link>
    </li>
    <li>
      <Link href="#" variant="body1" style={{ color: 'black',textDecoration: 'none' }}>Shop</Link>
    </li>
    <li>
      <Link href="#" variant="body1" style={{ color: 'black',textDecoration: 'none' }}>Faq's</Link>
    </li>
    <li>
      <Link href="#" variant="body1" style={{ color: 'black',textDecoration: 'none' }}>Stocklist</Link>
    </li>
    <li>
      <Link href="#" variant="body1" style={{ color: 'black',textDecoration: 'none' }}>Wholesale</Link>
    </li>
    <li>
      <Link href="#" variant="body1" style={{ color: 'black',textDecoration: 'none' }}>Contact</Link>
    </li>
  </ul>
</Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                        <Link href="#">
                            <img src={search} alt="" />
                        </Link>
                    </Box>
                    <Box sx={{ position: 'relative', marginLeft: 2 }}>
                        <Link href="#">
                            <img src={basket} alt="" />
                            <Typography variant="body2" sx={{ position: 'absolute', left: '100%', top: 0, bgcolor: '#F6623E', color: 'white', fontWeight: 'bold', transform: 'translate(-50%, -50%)', borderRadius: '10px', px: '5px', fontSize: '14px' }}>
                                0
                            </Typography>
                        </Link>
                    </Box>
                    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                        <IconButton color="inherit">
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
