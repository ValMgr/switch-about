/* eslint-disable react/prop-types */
import React from 'react';

import { Button } from '.';
import { ContainerMenu, DefaultLink } from './styledComponents';

export function Menu({ items, displayButton }) {
  return (
    <ContainerMenu>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <DefaultLink to={item.linkTo}>
              {item.label}
            </DefaultLink>
          </li>
        ))}
      </ul>
      {displayButton && (
        <Button Component={
          <DefaultLink to="/login">Se connecter</DefaultLink>
        } />
      )}
    </ContainerMenu>
  );
}

export default Menu;