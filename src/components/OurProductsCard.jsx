import React from 'react';
import { Box, Typography } from '@mui/material';

const OurProductsCard = ({ data }) => {
  return (
    <Box>
      
      <Box
  sx={{
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '320px',
    backgroundColor: '#E8E8E8', // Set background color
    border: '1px solid #E8E8E8', // Set border color
  }}
>
  {data.onSale && (
    <Box
      sx={{
        position: 'absolute',
        top: '11px',
        right: '11px',
      }}
    >
      <span
        sx={{
          backgroundColor: '#F6623E',
          padding: '5px 9px',
          color: 'white',
          textTransform: 'uppercase',
          fontSize: '10px',
        }}
      >
        On Sale
      </span>
    </Box>
  )}
  <img src={data.img} alt="" style={{ height: '100%' }} /> {/* Use style instead of className for height */}
</Box>
      <Box className="flex flex-col items-center mt-[22px]">
        <Typography variant="body1" fontWeight="medium" mb={1}>
          {data.title}
        </Typography>
        <Box className="mt-[7px]">
          <Typography variant="body1" color="#F6623E" component="span" mr={2}>
            ${data.newPrice} NZD
          </Typography>
          <Typography variant="body1" color="#828181" component="span" textDecoration="line-through">
            ${data.price} NZD
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OurProductsCard;

