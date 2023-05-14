import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import FeedbackCards from './FeedbackCards';
import { FeedbackTable } from './FeedbackTable';

const FeedbackList = ({ data }) => {
  const isMobile = useWindowSize();

  return isMobile ? <FeedbackCards data={data} /> : <FeedbackTable rows={data} />;
};

export default FeedbackList;
