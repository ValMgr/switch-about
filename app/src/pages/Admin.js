import React from 'react';
import { PageContainer } from './styledComponents';
import { AdminMenu } from './components';

export function Admin() {
  return(
    <PageContainer margin={`${4}rem 0`}>
      <AdminMenu />
      <h1>Bienvenue sur la page d administration</h1>
    </PageContainer>
  );
}

export default Admin;