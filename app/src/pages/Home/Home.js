import React from 'react';

import Menu from '../../components/Menu';
import { PageContainer } from '../styledComponents';
import Button from '../../components/Button';
import { DefaultLink } from '../../components/Menu/styledComponents';

export function ButtonContent() {
  return (
    <DefaultLink to="/trouver-une-formation">
      Trouver une formation
    </DefaultLink>
  );
}

export function Home() {
  const menuItems = [
    {
      id: 0,
      label: 'Trouver une formation',
      linkTo: '/trouver-une-formation'
    }
  ];
	
  return(
    <PageContainer width={`${100}vw`} height={`${100}vh`}>
      <Menu items={menuItems} displayButton={true} buttonContent="Se connecter" buttonTo="/login" />
      <h2>Bienvenue sur Switch About !</h2>
      <p>Texte introductif</p>
      <Button Component={<ButtonContent />} />
    </PageContainer>
  );
}

export default Home;