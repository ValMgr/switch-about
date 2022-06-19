/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import Loader from '../../components/Loader';
import Toaster from '../../components/Toaster';
import { Input } from '../../components/Input';
import Button from '../../components/Button';
import Menu from '../../components/Menu';
import { PageContainer } from '../styledComponents';
import { ContainerForm, Subtitle } from './styledComponents';

export function Login({
  users,
  onSubmit,
  onUserNameChange,
  onPasswordChange,
  isAuthorize,
  currentUserId,
  loading,
  error,
  email,
  password,
  authentificationFail
}) {
  const [inputValue, setInputValue] = useState(false);
  const items = [
    {
      id: 0,
      label:'Trouver une formation',
      linkTo: '/'
    }
  ];

  function checkInputValue() {
    setInputValue(true);
  }

  if(loading) {
    return(
      <PageContainer>
        <Loader message="Chargement..." />
      </PageContainer>
    );
  }

  if(error) {
    return(
      <PageContainer>
        <Toaster
          message="Une erreur s'est produite. Veuillez réessayer utérieurement"
          type="error"
        />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Menu items={items} displayButton={true} buttonContent="Se connecter" buttonTo="/login" />
      {inputValue && email === '' &&
        <Toaster type="error" message="Le champs email est vide" />
      }
      {inputValue && password === '' &&
        <Toaster type="error" message="Le champs mot de passe est vide" />
      }
      {authentificationFail &&
        <Toaster type="error" message="L'email ou le mot de passe est incorrecte" />
      }
      <ContainerForm>
        <h2>Se connecter</h2>
        <Subtitle>( Réservé aux membres )</Subtitle>
        <Input onChange={onUserNameChange} label="Email" />
        <Input onChange={onPasswordChange} label="Mot de passe" />
        <Button
          content="Se connecter"
          width={`${100}%`}
          margin={true}
          onClick={event => {
            onSubmit(event);
            checkInputValue();
          }}
        />
      </ContainerForm>
      {isAuthorize && currentUserId && (
        <div>
          <div>Nom : {users[currentUserId].firstname}</div>
          <div>Prénom : {users[currentUserId].lastname}</div>
        </div>
      )}
    </PageContainer>
  );
}

export default Login;