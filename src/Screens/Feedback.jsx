import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import FeedbackList from '../component/FeedbackList';
import { useGetAllFeedbackQuery } from '../store/api';
import Loader from '../component/Loader';
import { transformFeedbackData } from '../utils';

function createData(id, name, helpDate, feedback) {
  return { id, name, helpDate, feedback };
}

const rows = [
  createData(1, 'Вале́рій Фе́дорович Залу́жний', '2023-04-25', 'Ви недостатньо затягнули йому шину'),
  createData(2, 'Вале́рій Фе́дорович Залу́жний', '2023-04-28', 'Ви недостатньо затягнули йому шину'),
  createData(3, 'Вале́рій Фе́дорович Залу́жний', '2023-04-29', 'Ви недостатньо затягнули йому шину'),
];

const Feedback = () => {
  const [feedbackData, setFeedbackData] = useState(null);
  const { data, isLoading } = useGetAllFeedbackQuery();

  useEffect(() => {
    if (!isLoading && data) {
      setFeedbackData(data.map(item => transformFeedbackData(item)));
    }
  }, [data, isLoading]);

  return (
    <>
      <Header />
      {
        feedbackData
          ? <FeedbackList data={rows} />
          : <Loader />
      }
      
    </>
  );
};

export default Feedback;
