import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import FeedbackCards from './FeedbackCards';
import { FeedbackTable } from './FeedbackTable';

function createData(id, name, helpDate, feedback) {
  return { id, name, helpDate, feedback };
}

const rows = [
  createData(1, 'Вале́рій Фе́дорович Залу́жний', '2023-04-25', 'Ви недостатньо затягнули йому шину'),
  createData(2, 'Вале́рій Фе́дорович Залу́жний', '2023-04-28', 'Ви недостатньо затягнули йому шину'),
  createData(3, 'Вале́рій Фе́дорович Залу́жний', '2023-04-29', 'Ви недостатньо затягнули йому шину'),
];

const FeedbackList = () => {
  const isMobile = useWindowSize();

  return isMobile ? <FeedbackCards data={rows} /> : <FeedbackTable rows={rows} />;
};

export default FeedbackList;
