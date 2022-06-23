/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { colors } from '../../theme';

import Button from '../Button';
import { ClockSvg, PriceSvg, PinSvg } from '../assets/Svg';
import {
  Subtitle,
  ContainerFormation,
  Title,
  Description,
  ContainerButton,
  BackgroundPopup,
  ContainerPopup,
  ContainerIcon,
  ContainerDetails,
  ContainerClockPin,
  ContainerItem,
  TextItem
} from './styledComponents';

export function Card({ subtitle, title, description, ContentMore, Icon, duration, price, location }) {
  const [displayMore, setDisplayMore] = useState(false);

  return (
    <>
      <ContainerFormation>
        <ContainerIcon>
          {Icon}
        </ContainerIcon>
        <Subtitle>
          {subtitle}
        </Subtitle>
        <Title>
          {title}
        </Title>
        <Description>
          {description}
        </Description>
        <ContainerDetails>
          <ContainerClockPin>
            <ContainerItem width={`${50}%`}>
              <ClockSvg />
              <TextItem>{duration}</TextItem>
            </ContainerItem>
            <ContainerItem width={`${50}%`}>
              <PriceSvg />
              <TextItem>{price}</TextItem>
            </ContainerItem>
          </ContainerClockPin>
          <ContainerItem width={`${100}%`}>
            <PinSvg />
            <TextItem>{location}</TextItem>
          </ContainerItem>
        </ContainerDetails>
        <ContainerButton>
          <Button
            content="En savoir plus"
            onClick={() => setDisplayMore(true)}
            borderRadius={`${1.3}rem`}
            backgroundColor={colors.cardBackground}
            color={`${colors.black}!important`}
          />
        </ContainerButton>
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