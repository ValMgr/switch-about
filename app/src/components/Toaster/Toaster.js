/* eslint-disable react/prop-types */
import React from 'react';

import { ContainerToaster } from './styledComponents';

export function Toaster({ message, type }) {
  return(
    <ContainerToaster type={type} >
      <p>{message}</p>
    </ContainerToaster>
  );
}

export default Toaster;