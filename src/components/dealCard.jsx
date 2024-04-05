import React from 'react';
import { Box, CardMedia, Typography } from '@mui/material';

const DealCard = (props) => {
  const { id, title, img } = props.data;

  return (
    <Box key={id} display="flex" flexDirection="column" alignItems="center">
      <Box bgcolor="#F4F3F4" border="1px solid #E8E8E8">
        <CardMedia
          component="img"
          height="350"
          width="350"
          image={img}
          alt=""
          style={{ objectFit: 'cover' }} // You can adjust object-fit to fit your design
        />
      </Box>
      <Typography variant="body1" mt={2} textAlign="center" fontWeight="bold">
        {title}
      </Typography>
    </Box>
  );
};

export default DealCard;
