import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <TailSpin
      height="50"
      color="#039be5"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
      }}
      visible
    />
  );
};

export default Loader;
