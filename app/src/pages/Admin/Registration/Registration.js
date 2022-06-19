import React from 'react';

import { AdminMenu } from '../components';
import { PageContainer } from '../../styledComponents';
import { ContainerForm } from '../../Login/styledComponents';
import Button from '../../../components/Button';
import { Input } from '../../../components/Input';

export function Registration() {

  function onClick() {
    alert('créer un compte');
    // Appeler la route POST qui créer un user
  }

  return (
    <PageContainer>
      <AdminMenu />
      <ContainerForm>
        <h2>Créer un compte membre</h2>
        <Input label="Prénom" />
        <Input label="Nom" />
        <Input type="number" label="Âge" />
        <Input
          type="tel"
          ppattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
          label="Tel" />
        <Input type="email" label="Email" />
        <Input label="Mot de passe" />
        <Button
          content="Créer un compte"
          width={`${100}%`}
          margin={true}
          onClick={onClick}
        />
      </ContainerForm>
    </PageContainer>
  );
}

export default Registration;