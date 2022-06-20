import React, { useState, useEffect } from 'react';

import { AdminMenu } from '../components';
import { PageContainer } from '../../styledComponents';
import ProfilsList from '../../../components/ProfilsList';
import Toaster from '../../../components/Toaster';
import Loader from '../../../components/Loader';
import { InputSearch } from '../../../components/Input';
import { getUserFormAnswersApi } from '../../../services/users/users.services';

export function Profiles() {
  const [profils, setProfils] = useState();
  const [loading, setLoading] = useState();
  const [research, setResearch] = useState('');
  const [category, setCategory] = useState();
  const [error, setError] = useState();
  const options = [
    {
      id: 0,
      value: 'Activite',
    },
    {
      id: 1,
      value: 'Diplome',
    },
    {
      id: 2,
      value: 'Situation actuelle',
    },
    {
      id: 3,
      value: 'Domaines',
    },
    {
      id: 4,
      value: 'Prenom',
    },
    {
      id: 5,
      value: 'Nom',
    },
    {
      id: 6,
      value: 'Email',
    },
  ];

  function getUserFormAnswers() {
    setLoading(true);

    getUserFormAnswersApi().then(response => {
      setLoading(false);
      setProfils(response.data);
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
    getUserFormAnswers();
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
        <h2>Les profiles</h2>
        <Loader message="Chargement des profiles..." />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <AdminMenu />
      <h2>Les profiles</h2>
      <p>Consulter les réponses des formulaires remplis par les utilisateurs.</p>
      <InputSearch
        options={options}
        onInputSelectValueChange={onSelectSearchType}
        onInputValueChange={onSearch}
      />
      <ProfilsList
        profils={profils}
        inputValue={research}
        inputSelectValue={category}
      />
    </PageContainer>
  );
}

export default Profiles;