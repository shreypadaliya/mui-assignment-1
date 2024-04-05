import React from 'react';
import { Card, CardMedia } from '@mui/material';
import '../assets/styles/Mycard.css';

const Mycard = (props) => {
    console.log(props);
    return (
        <Card className='mycard'>
            <CardMedia component="img" className='sliderimg' image={props.imageSrc} alt="" />
        </Card>
    );
}

export default Mycard;
