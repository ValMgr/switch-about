import React from 'react';

import { AdminMenu } from '../components';
import { PageContainer } from '../../styledComponents';

export function Profiles() {
  return (
    <PageContainer>
      <AdminMenu />
      <h2>Les profiles</h2>
    </PageContainer>
  );
}

export default Profiles;