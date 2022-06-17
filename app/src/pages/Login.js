/* eslint-disable react/prop-types */
import React from 'react';

import { PageContainer } from './styledComponents';
import { Loader, Error } from '../components';

export function Login({ users, onSubmit, onUserNameChange, onPasswordChange, isAuthorize, currentUserId, loading, error }) {
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
        <Error message="Une erreur s'est produite. Veuillez réessayer utérieurement" />
      </PageContainer>
    );
  }

  return(
    <PageContainer>
      <form onSubmit={onSubmit}>
        <input onChange={onUserNameChange} />
        <input onChange={onPasswordChange} />
        <button>Se connecter</button>
      </form>
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