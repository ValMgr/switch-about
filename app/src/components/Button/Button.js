/* eslint-disable react/prop-types */
import React from 'react';

import { ContainerButton } from './styledComponents';

export function Button({ content, onClick, Component, width, margin, borderRadius, backgroundColor, color }) {
  return(
    <ContainerButton
      onClick={onClick}
      width={width}
      margin={margin}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      color={color}
    >
      {content || Component}
    </ContainerButton>
  );
}

export default Button;