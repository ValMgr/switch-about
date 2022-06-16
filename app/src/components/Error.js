/* eslint-disable react/prop-types */
import React from 'react';

import { ContainerError } from './styledComponents';

export function Error({ message }) {
  return(
    <ContainerError>
      <p>{message}</p>
    </ContainerError>
  );
}

export default Error;