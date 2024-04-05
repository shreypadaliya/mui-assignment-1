import React from 'react';
import { Box, Typography } from '@mui/material';

const OurFeatuesCard = (props) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box position="relative" >
        <img src={props.svgs} alt="" />
        <img src={props.svgsPoint} alt="" style={{ position: 'absolute', right: -12, bottom: -6, zIndex: -1 }} />
      </Box>
      <Typography variant="h6" mt={2} mb={1} align="center" fontWeight="medium">{props.title}</Typography>
      <Typography variant="body1" align="center" color="#828181">{props.text}</Typography>
    </Box>
  );
}

export default OurFeatuesCard;
