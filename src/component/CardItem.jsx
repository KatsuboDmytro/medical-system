/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';

const CardItem = ({ cardData }) => (
  <Card sx={{ minWidth: 275 }}>
    <CardContent>
      {cardData.map((data, index) => (
        <Box key={index} marginBottom="5px">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" component="span">
            {`${data.title}:`}
          </Typography>
          <Typography sx={{ fontSize: 14 }} component="span">
            {data.value}
          </Typography>
        </Box>
      ))}
    </CardContent>
    <CardActions>
      <Button size="small">Деталі</Button>
    </CardActions>
  </Card>
);

export default CardItem;
