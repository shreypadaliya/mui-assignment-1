import React from 'react';
import { Grid, Typography, InputBase, Button, Box, Container } from '@mui/material';
import { styled } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import waveTop from '../assets/imgs/wave-top.png';
import Logo from '../assets/imgs/Logo.png';
import pay from '../assets/imgs/pay.png';

// Styled components
const FooterContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#FFF8F6'
  
}));

const WaveTopImage = styled('img')({
  width: '100%',
});

const SubscribeInput = styled(InputBase)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#FFF8F6',
  outline: 'none',
  fontSize: '16px',
  lineHeight:"26px",
  '&::placeholder': {
    color: theme.palette.text.primary,
    
    
  },
}));

const SubscribeButton = styled(Button)(({ theme }) => ({
  fontSize: '16px',
  backgroundColor:'#FFF8F6',
  lineHeight:"26px",
  fontWeight: 600,
  color: '#F6623E',
  paddingTop:"2px",
  borderTop: 'none', // Remove top border
    borderLeft: 'none', // Remove left border
    borderRight: 'none', // Remove right border
    borderBottom: '2px solid black',
    borderRadius: 0, 
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container sx>
        <WaveTopImage src={waveTop} alt="" />
        <Grid container spacing={4} justifyContent="space-between" paddingTop={6} paddingBottom={3}>
          {/* Logo and description */}
          <Grid item md={4} xs={12}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <img src={Logo} alt="Logo" width={138} height={33} />
              <Typography variant="body1" align="center" color="textPrimary" marginTop={2} sx={{fontSize:"16px",lineHeight:"26px",fontWeight:400}}>
                Good health is important, so all of our products have been carefully designed to bring out the best in you.
              </Typography>
            </Box>
          </Grid>
          {/* Subscribe section */}
          <Grid item md={4} xs={12}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h4" marginBottom={1} sx={{fontSize:"26px",lineHeight:"26px",fontWeight:"500"}}>
                Keep In Touch
              </Typography>
              <Typography variant="body1" align="center" color="textPrimary" marginBottom={1} sx={{fontSize:"16px",lineHeight:"26px",fontWeight:400}}>
                Subscribe to receive new product updates, be the first to know about sales, and more.
              </Typography>
              <Box display="flex" alignItems="center">
                <SubscribeInput type="email" placeholder="Enter your email address" sx={{borderBottom: '2px solid black',fontSize:"16px",lineHeight:"26px"}}/>
                <SubscribeButton variant="outlined">
                  Subscribe
                </SubscribeButton>
              </Box>
            </Box>
          </Grid>
          {/* More info section */}
          <Grid item md={4} xs={12}>
            <Box display="flex" justifyContent="flex-end">
              <Box >
                <Typography variant="h4" sx={{fontSize:"20px",lineHeight:"26px",fontWeight:500}} >
                  MORE INFO
                </Typography>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li><a href="#" style={{ color: 'black',textDecoration: 'none' }}>Shipping & Delivery</a></li>
                  <li><a href="#" style={{ color: 'black',textDecoration: 'none' }}>Refund Policy</a></li>
                  <li><a href="#" style={{ color: 'black',textDecoration: 'none' }}>Partner Program</a></li>
                  <li><a href="#" style={{ color: 'black',textDecoration: 'none' }}>Wholesale Portal</a></li>
                  <li><a href="#" style={{ color: 'black',textDecoration: 'none' }}>You Buy, We Donate</a></li>
                  <li><a href="#" style={{ color: 'black',textDecoration: 'none' }}>Privacy Policy</a></li>
                  <li><a href="#" style={{ color: 'black',textDecoration: 'none' }}>Terms & Conditions</a></li>
                </ul>
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* Bottom section */}
        <Grid container spacing={4} justifyContent="space-between" paddingTop={3} paddingBottom={2} borderTop="2px solid #828181" borderTopOpacity={0.2}>
          {/* Social icons */}
          <Grid item md={4} xs={12}>
            <Box display="flex" justifyContent="center">
              <Box>
                <a href="#" target='_blank'>
                  <FontAwesomeIcon icon={faFacebook} size="lg" color="#828181" />
                </a>
                <a href="#" target='_blank' style={{ marginLeft: '20px' }}>
                  <FontAwesomeIcon icon={faInstagram} size="lg" color="#828181" />
                </a>
                <a href="#" target='_blank'>
                  <FontAwesomeIcon icon={faTwitter} size="lg" color="#828181" />
                </a>
                <a href="#" target='_blank' style={{ marginLeft: '20px' }}>
                  <FontAwesomeIcon icon={faPinterest} size="lg" color="#828181" />
                </a>
                <a href="#" target='_blank'>
                  <FontAwesomeIcon icon={faYoutube} size="lg" color="#828181" />
                </a>
              </Box>
            </Box>
          </Grid>
          {/* Powered by */}
          <Grid item md={4} xs={12}>
            <Box display="flex" justifyContent="center">
              <Typography variant="body1"align="center">
                © 2021, <a href="#" style={{ color: '#F6623E' }}>GOOD4ME</a>. Powered by Shopify
              </Typography>
            </Box>
          </Grid>
          {/* Payment methods */}
          <Grid item md={4} xs={12}>
            <Box display="flex" justifyContent="center">
              <img src={pay} alt="Payment Methods" width={260} height={24} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
