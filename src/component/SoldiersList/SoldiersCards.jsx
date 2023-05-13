import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import CardItem from '../CardItem';
import { SOLDIERS_DATA_ORDER, SOLDIERS_TABLE_HEADERS } from '../../constants/common';
import { transformToCardItemData } from '../../utils';
import endpoints from '../../Router/endpoints';

const SoldiersCards = ({ data }) => {
  const navigate = useNavigate();

  const cardData = useMemo(
    () => data.map(item => transformToCardItemData(SOLDIERS_TABLE_HEADERS, item, SOLDIERS_DATA_ORDER)),
    [data],
  );

  const cardAction = () => {
    navigate(`${endpoints.soldiers}/${data.id}`);
  };

  return (
    <Box>
      {cardData.map(dataItem => (
        <CardItem cardData={dataItem} action={cardAction} />
      ))}
    </Box>
  );
};

export default SoldiersCards;
