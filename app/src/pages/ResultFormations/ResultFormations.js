/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import Menu from '../../components/Menu';
import { PageContainer } from '../styledComponents';
import Toaster from '../../components/Toaster';
import Loader from '../../components/Loader';
import { getFormSubmissionIdApi, getUserFormationsAnswersApi } from '../../services/users/users.services';
import { useParams } from 'react-router-dom';
import FormationsList from '../../components/FormationsList';
import { InputSearch } from '../../components/Input';
import { ContainerFormations } from '../../components/FormationsList/styledComponents';

export function ResultFormations() {
  const [formationsAnswers, setFormationsAnswers] = useState();
  const[profilId, setProfilId] = useState();
  const[loadingFormationsAnswers, setLoadingFormationsAnswers] = useState();
  const[loadingFormDetail, setLoadingFormDetail] = useState();
  const[errorFormationsAnswers, setErrorFormationsAnswers] = useState();
  const[errorFormDetail, setErrorFormDetail] = useState();
  const { submissionId } = useParams();
  const [research, setResearch] = useState('');
  const [category, setCategory] = useState();
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

  const menuItems = [
    {
      id: 0,
      label: 'Trouver une formation',
      linkTo: '/trouver-une-formation'
    }
  ];

  async function getProfilsDetails() {
    setLoadingFormDetail(true);
    try {
      const response = await getFormSubmissionIdApi({ id: submissionId });
      setProfilId(response.data[0].id);
    } catch (error) {
      setLoadingFormDetail(false);
      setErrorFormDetail(true);
    } finally {
      setLoadingFormDetail(false);
    }
  }

  async function getUserFormationsAnswers() {
    setLoadingFormationsAnswers(true);
    try {
      const response = await getUserFormationsAnswersApi({ profilId: profilId });
      setFormationsAnswers(response.data);
    } catch (error) {
      setLoadingFormationsAnswers(false);
      setErrorFormationsAnswers(true);
    } finally {
      setLoadingFormationsAnswers(false);
    }
  }

  function onSearch(event) {
    setResearch(event.target.value.toLowerCase());
  }

  function onSelectSearchType(event) {
    setCategory(event.target.value.toLowerCase());
  }
	
  useEffect(() => {
    getProfilsDetails();
  }, []);

  useEffect(() => {
    if(profilId) {
      getUserFormationsAnswers();
    }
  }, [profilId]);

  if(errorFormDetail) {
    return (
      <PageContainer>
        <Menu items={menuItems} displayButton={true} buttonContent="Se connecter" />
        <Toaster
          message="Une erreur est survenue. Veuillez réessayer ultérieurement."
          type="error"
        />
      </PageContainer>
    );
  }
	
  if(loadingFormDetail && !errorFormDetail) {
    return (
      <PageContainer>
        <Menu items={menuItems} displayButton={true}  buttonContent="Se connecter" buttonTo="/login" />
        <Loader message="Chargement des formations..." />
      </PageContainer>
    );
  }
	
  return(
    <PageContainer>
      <Menu
        items={menuItems}
        displayButton={true}
        buttonContent="Se connecter"
        buttonTo="/login"
      />
      <h2>Les formations qui vous correspondent :</h2>
      {errorFormationsAnswers ? (
        <Toaster message="Une erreur est survenue. Veuillez réessayer utlérieurement." type="error" />
      ) : (
        <>
          <InputSearch
            options={options}
            onInputSelectValueChange={onSelectSearchType}
            onInputValueChange={onSearch}
          />
          <ContainerFormations>
            {loadingFormationsAnswers ? (
              <p>loading</p>
            ) : (
              <FormationsList
                formations={formationsAnswers}
                inputValue={research}
                inputSelectValue={category}
              />
            )}
          </ContainerFormations>
        </>
      )}
    </PageContainer>
  );
}

export default ResultFormations;