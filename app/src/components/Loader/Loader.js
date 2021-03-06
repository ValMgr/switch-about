/* eslint-disable react/prop-types */
import React from 'react';
import '../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { BallTriangle } from  'react-loader-spinner';

import { colors } from '../../theme';
import { ContainerLoader } from './styledComponents';

export function Loader({ message }) {
  return(
    <ContainerLoader>
      <BallTriangle
        color={colors.darkBlue}
        height={80}
        width={80} />
      <p>{message}</p>
    </ContainerLoader>
  );
}

export default Loader;