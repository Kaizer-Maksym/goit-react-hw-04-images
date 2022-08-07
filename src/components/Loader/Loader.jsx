import React from 'react';
import { Oval } from 'react-loader-spinner';
import { Spiner } from './Loader.styled';

const Loader = () => {
  return (
    <Spiner>
      <Oval strokeWidth={5} color="#5c70f0" height={50} width={50} />
    </Spiner>
  );
};

export default Loader;
