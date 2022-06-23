/* eslint-disable react/prop-types */
import React from 'react';

import { DefaultInput, InputLabel, ContainerInput } from './styledComponents';

export function Input({ onChange, label, type, pattern, margin }) {
  return (
    <ContainerInput>
      {label && (
        <InputLabel>{label}</InputLabel>
      )}
      <DefaultInput type={type} pattern={pattern} onChange={onChange} margin={margin} />
    </ContainerInput>
  );
}

export default Input;