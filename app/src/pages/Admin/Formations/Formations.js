import React, { useState, useEffect } from 'react';

import FormationsList from '../../../components/FormationsList/FormationsList';
import Loader from '../../../components/Loader';
import Toaster from '../../../components/Toaster';
import { Input, InputSelect } from '../../../components/Input';
import { getFormationsApi } from '../../../services/formations/formations.services';
import { PageContainer } from '../../styledComponents';
import { AdminMenu } from '../components';
import { ContainerInputsSearch } from './styledComponents';

export function Formations() {
  const [formations, setFormations] = useState();
  const [research, setResearch] = useState('');
  const [category, setCategory] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const options = [
    {
      id: 0,
      value: 'Nom',
    },
    {
      id: 1,
      value: 'Ville',
    },
    {
      id: 2,
      value: 'Durée',
    },
    {
      id: 3,
      value: 'Compétences',
    }
  ];
	
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

  function onSearch(event) {
    setResearch(event.target.value.toLowerCase());
  }

  function onSelectSearchType(event) {
    setCategory(event.target.value.toLowerCase());
  }

  useEffect(() => {
    getFormations();
  }, []);

  if(error) {
    return (
      <PageContainer>
        <AdminMenu />
        <Toaster
          message="Une erreur est survenue lors de la récupération des formations. Veuillez réessayer ultérieurement."
          type="error"
        />
      </PageContainer>
    );
  }

  if(loading && !error) {
    return (
      <PageContainer>
        <AdminMenu />
        <h2>Les formations</h2>
        <Loader message="Chargement des formations..." />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <AdminMenu />
      <h2>Les formations</h2>
      <p>Sélectionner une catégorie pour pouvoir rechercher une formation</p>
      <ContainerInputsSearch>
        <InputSelect label="Selectionner une catégorie" options={options} onChange={onSelectSearchType} />
        <Input placeholder="Rechercher" onChange={onSearch} />
      </ContainerInputsSearch>
      <FormationsList formations={formations} inputValue={research} inputSelectValue={category} />
    </PageContainer>
  );
}

export default Formations;