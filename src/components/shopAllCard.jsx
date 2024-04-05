import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

// Define styled components for styling
const StyledCard = styled(Card)({
  width: 350,
  height: 337,
  position: 'relative',
  backgroundColor: '#E8E8E8',
});

const OnSaleBadge = styled('span')({
  position: 'absolute',
  top: 11,
  right: 11,
  padding: '5px 9px',
  backgroundColor: '#F6623E',
  color: 'white',
  fontSize: 10,
  textTransform: 'uppercase',
});

const StyledImage = styled(CardMedia)({
  width: '100%',
  height: '100%',
});

const PriceContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

const ShopAllCard = ({ data }) => {
    console.log("data is ",data)
  return (
    <StyledCard>
      <CardContent>
        <OnSaleBadge>On Sale</OnSaleBadge>
        <StyledImage component="img" image={data.img} alt="" />
        <PriceContainer>
          <Typography variant="body1" align="center" gutterBottom>
            {data.title}
          </Typography>
        </PriceContainer>
        <PriceContainer>
          <Typography variant="body1" color="primary" gutterBottom>
            ${data.newPrice} NZD
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            ${data.price} NZD
          </Typography>
        </PriceContainer>
      </CardContent>
    </StyledCard>
  );
};

export default ShopAllCard;
