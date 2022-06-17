/* eslint-disable react/prop-types */
import React from 'react';

import { ContainerButton } from './styledComponents';

export function Button({ content, onClick, Component }) {
  return(
    <ContainerButton onClick={onClick}>
      {content || Component}
    </ContainerButton>
  );
}

export default Button;