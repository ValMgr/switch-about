/* eslint-disable react/prop-types */
import React from 'react';

import { ContainerToaster } from './styledComponents';

export function Toaster({ message, type, Component }) {
  return(
    <ContainerToaster type={type}>
      {message && <p>{message}</p>}
      {Component && Component}
    </ContainerToaster>
  );
}

export default Toaster;