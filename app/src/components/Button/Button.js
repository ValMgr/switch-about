/* eslint-disable react/prop-types */
import React from 'react';

import { ContainerButton } from './styledComponents';

export function Button({ content, onClick, Component, width, margin }) {
  return(
    <ContainerButton
      onClick={onClick}
      width={width}
      margin={margin}
    >
      {content || Component}
    </ContainerButton>
  );
}

export default Button;