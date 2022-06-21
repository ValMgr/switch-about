/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { colors } from '../../theme';

import Button from '../Button';
import {
  ContainerInformations,
  ContainerImage,
  Subtitle,
  ContainerFormation,
  Title,
  Description,
  ContainerButton,
  BackgroundPopup,
  ContainerPopup
} from './styledComponents';

export function Card({ src, subtitle, title, description, ContentMore }) {
  const [displayMore, setDisplayMore] = useState(false);

  return (
    <>
      <ContainerFormation>
        <ContainerImage src={src} />
        <ContainerInformations>
          <Subtitle>
            {subtitle}
          </Subtitle>
          <Title>
            {title}
          </Title>
          <Description>
            {description}
          </Description>
          <ContainerButton>
            <Button
              content="En savoir plus"
              onClick={() => setDisplayMore(true)}
              borderRadius={`${1.3}rem`}
              backgroundColor={colors.cardBackground}
              color={`${colors.black}!important`}
            />
          </ContainerButton>
        </ContainerInformations>
      </ContainerFormation>
      {displayMore ? (
        <ContainerPopup onClick={() => setDisplayMore(false)}>
          <BackgroundPopup />
          <ContentMore />
        </ContainerPopup>
      ) : null}
    </>
  );
}

export default Card;