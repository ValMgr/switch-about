import React from 'react';

import { PageContainer } from '../../styledComponents';
import { AdminMenu } from '../components';

export function AdminHome() {
  return(
    <PageContainer>
      <AdminMenu />
      <h2>Bienvenue sur la page d administration</h2>
    </PageContainer>
  );
}

export default AdminHome;