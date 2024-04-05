import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const LatesNewsCard = ({ data }) => {
  console.log("data", data);

  return (
    <Box key={data.id} display="flex" flexDirection="column" alignItems="center" mb={3}>
      <Box display="flex" justifyContent="center">
        <img src={data.img} alt=""
        /> {/* Add margin to the img element */}
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
        <Typography variant="subtitle2" color="#F6623E" mb={1}>{data.date}</Typography>
        <Typography variant="h6" align="center" mb={1}>{data.title}</Typography>
        <Typography variant="body1" align="center" color="#828181" mb={1}>{data.text}</Typography>
        <Box mt={2}>
          <Button variant="contained" size="medium" sx={{ backgroundColor: "#F6623E", color: "white" }}>Read more</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default LatesNewsCard;

