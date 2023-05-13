import { Box } from '@mui/material';
import React, { useMemo } from 'react';
import CardItem from '../CardItem';
import { FEEDBACK_DATA_ORDER, FEEDBACK_TABLE_HEADERS } from '../../constants/common';
import { transformToCardItemData } from '../../utils';

const FeedbackCards = ({ data }) => {
  const cardData = useMemo(
    () => data.map(item => transformToCardItemData(Object.values(FEEDBACK_TABLE_HEADERS), item, FEEDBACK_DATA_ORDER)),
    [data],
  );

  return (
    <Box>
      {cardData.map(dataItem => (
        <CardItem cardData={dataItem} />
      ))}
    </Box>
  );
};

export default FeedbackCards;
