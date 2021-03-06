import React, { useState, useEffect } from 'react';

import { AdminMenu } from '../components';
import { PageContainer } from '../../styledComponents';
import ProfilsList from '../../../components/ProfilsList';
import Toaster from '../../../components/Toaster';
import Loader from '../../../components/Loader';
import { InputSearch } from '../../../components/Input';
import { getUserFormAnswersApi, getUserFormationsAnswersApi } from '../../../services/users/users.services';

export function Profils() {
  const [profils, setProfils] = useState([]);
  const [loading, setLoading] = useState();
  const [research, setResearch] = useState('');
  const [category, setCategory] = useState();
  const [error, setError] = useState();
  const [show, setShow] = useState(false);
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
    }
  ];

  function getUserFormAnswers() {
    setLoading(true);
    getUserFormAnswersApi().then(response => {
      response.data.forEach(async (profil) => {
        profil.formations = await getUserFormationsAnswersApi({ profilId: profil.id}).then(res => res.data);
        setProfils(profils => [...profils, profil]);
      });
      setLoading(false);
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

  function onClick() {
    if(show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  useEffect(() => {
    getUserFormAnswers();
  }, []);

  if(error) {
    return (
      <PageContainer>
        <AdminMenu />
        <Toaster
          message="Une erreur est survenue lors de la r??cup??ration des formations. Veuillez r??essayer ult??rieurement."
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
        <Loader message="Chargement des profils..." />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <AdminMenu />
      <h2>Les profils</h2>
      <p>Consulter les r??ponses des formulaires remplis par les utilisateurs.</p>
      <InputSearch
        options={options}
        onInputSelectValueChange={onSelectSearchType}
        onInputValueChange={onSearch}
      />
      <ProfilsList
        profils={profils}
        inputValue={research}
        inputSelectValue={category}
        onClick={onClick}
        show={show}
      />
    </PageContainer>
  );
}

export default Profils;