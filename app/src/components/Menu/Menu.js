/* eslint-disable react/prop-types */
import React from 'react';

import Button from '../Button';
import { IconographicLogo } from '../assets/Svg';
import {
  ContainerMenu,
  DefaultLink,
  ItemMenu,
  ItemsMenu,
  LogoLink
} from './styledComponents';

export function Menu({ items, displayButton, buttonContent, buttonTo }) {
  return (
    <ContainerMenu>
      <LogoLink to="/">
        <IconographicLogo />
      </LogoLink>
      <ItemsMenu>
        {items.map(item => (
          <ItemMenu key={item.id}>
            <DefaultLink to={item.linkTo}>
              {item.label}
            </DefaultLink>
          </ItemMenu>
        ))}
        {displayButton && (
          <Button
            margin={false}
            Component={
              <DefaultLink to={buttonTo}>{buttonContent}</DefaultLink>
            } />
        )}
      </ItemsMenu>
    </ContainerMenu>
  );
}

export default Menu;