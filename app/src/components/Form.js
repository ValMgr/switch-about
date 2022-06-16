/* eslint-disable react/prop-types */
import React from 'react';

import { DefaultIframe } from './styledComponents';

export function Form({ formId }) {
  return(
    <DefaultIframe
      title="Formulaire"
      src={`https:form.jotform.com/${formId}`}
    >
    </DefaultIframe>
  );
}

export default Form;