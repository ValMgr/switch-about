/* eslint-disable react/prop-types */
import React from 'react';

import { DefaultInput, InputLabel, ContainerInput } from './styledComponents';

export function Input({ onChange, label }) {
  return (
    <ContainerInput>
      <InputLabel>{label}</InputLabel>
      <DefaultInput onChange={onChange} />
    </ContainerInput>
  );
}

export default Input;