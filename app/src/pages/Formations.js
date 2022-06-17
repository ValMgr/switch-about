import React, { useState, useEffect } from 'react';

import { FormationsList, Loader, Error } from '../components';
import { getFormationsApi } from '../services.api';
import { PageContainer } from './styledComponents';
import { AdminMenu } from './components/';

export function Formations() {
  const [formations, setFormations] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
	
  function getFormations() {
    setLoading(true);

    getFormationsApi().then(response => {
      setLoading(false);
      setFormations(response.data);
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    });
  }

  useEffect(() => {
    getFormations();
  }, []);

  if(error) {
    return (
      <PageContainer>
        <AdminMenu />
        <Error message="Une erreur est survenue lors de la récupération des formations. Veuillez recharger la page." />
      </PageContainer>
    );
  }

  if(loading && !error) {
    return (
      <PageContainer>
        <AdminMenu />
        <Loader message="Récupération de la liste des formations en cours..." />
      </PageContainer>
    );
  }

  return(
    <PageContainer>
      <AdminMenu />
      <FormationsList formations={formations} />
    </PageContainer>
  );
}

export default Formations;