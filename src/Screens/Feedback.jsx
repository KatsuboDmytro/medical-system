import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import FeedbackList from '../component/FeedbackList';
import { useGetAllFeedbackQuery } from '../store/api';
import Loader from '../component/Loader';
import { transformFeedbackData } from '../utils';

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
          ? <FeedbackList data={feedbackData} />
          : <Loader />
      }
      
    </>
  );
};

export default Feedback;
