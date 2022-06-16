/* eslint-disable react/prop-types */
import React from 'react';

import '../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { BallTriangle } from  'react-loader-spinner';
import { ContainerLoader } from './styledComponents';
import colors from '../utils/theme/colors';

export function Loader({ message }) {
  return(
    <ContainerLoader>
      <BallTriangle color={colors.main} height={80} width={80} />
      <p>{message}</p>
    </ContainerLoader>
  );
}

export default Loader;