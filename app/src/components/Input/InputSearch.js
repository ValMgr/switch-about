/* eslint-disable react/prop-types */
import React from 'react';

import InputSelect from './InputSelect';
import Input from './Input';
import { ContainerInputsSearch } from './styledComponents';

export function InputSearch({ options, onInputSelectValueChange, onInputValueChange }) {
  return (
    <ContainerInputsSearch>
      <InputSelect label="Selectionner une catégorie" options={options} onChange={onInputSelectValueChange} />
      <Input placeholder="Rechercher" onChange={onInputValueChange} margin={0} />
    </ContainerInputsSearch>
  );
}

export default InputSearch;