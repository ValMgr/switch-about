/* eslint-disable react/prop-types */
import React from 'react';

import { InformationSvg, WarningSvg } from '../assets/Svg';
import { ContainerToaster, ContainerSvg } from './styledComponents';

export function Toaster({ message, type, Component }) {
  return(
    <ContainerToaster type={type}>
      <ContainerSvg type={type}>
        {type === 'information' ? (
          <InformationSvg />
        ) : (
          <WarningSvg />
        )}
      </ContainerSvg>
      {message && <p>{message}</p>}
      {Component && Component}
    </ContainerToaster>
  );
}

export default Toaster;