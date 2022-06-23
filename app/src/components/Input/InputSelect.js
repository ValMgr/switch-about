/* eslint-disable react/prop-types */
import React from 'react';

import { DefaultSelectInput } from './styledComponents';

export function InputSelect({ label, options, onChange }) {
  return(
    <DefaultSelectInput onChange={onChange} >
      <option value="">{label}</option>
      {options && options.map(option => 
        <option key={option.id} value={option.value}>{option.value}</option>
      )}
    </DefaultSelectInput>
  );
}

export default InputSelect;