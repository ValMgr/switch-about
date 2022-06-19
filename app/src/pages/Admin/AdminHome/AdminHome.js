/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../../../components/Button';
import { DefaultLink } from '../../../components/Menu/styledComponents';

import { PageContainer } from '../../styledComponents';
import { AdminMenu } from '../components';
import { ContainerText } from './styledComponents';

export function ButtonContent() {
  return (
    <DefaultLink to="/creer-compte-membre">
      Ajouter un compte membre
    </DefaultLink>
  );
}

export function AdminHome({ userName }) {
  return(
    <PageContainer>
      <AdminMenu />
      <h2>Bonjour {userName},</h2>
      <h3>Bienvenue sur la page d administration !</h3>
      <ContainerText>
        Ici vous pouvez consulter la liste des formations disponibles et les réponses anonymes au questionnaire effectuer par les utilisateurs.
      </ContainerText>
      <h3>Paramètres</h3>
      <ContainerText>
        Ajouter un membre qui aura accès à l administration de votre site web.
      </ContainerText>
      <Button Component={<ButtonContent />}/>
    </PageContainer>
  );
}

export default AdminHome;