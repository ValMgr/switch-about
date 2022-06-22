/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import Menu from '../../components/Menu';
import { PageContainer } from '../styledComponents';
import Toaster from '../../components/Toaster';
import Loader from '../../components/Loader';
import Card from '../../components/Card';
import { getFormSubmissionIdApi, getUserFormationsAnswersApi } from '../../services/users/users.services';
import { useParams } from 'react-router-dom';
import { IconCard } from '../../components/assets/Svg';
import { ContainerContentMore, CategoryTitle, ContainerFormations } from '../../components/FormationsList/styledComponents';

function ToasterContent({ inputValue }) {
  return(
    <p>Pas de formations disponibles pour cette recherche : 
      <strong>{` "${inputValue}"`}</strong>
    </p>
  );
}

function ContentMore({ formation }) {
  return (
    <ContainerContentMore>
      <CategoryTitle>Description :</CategoryTitle>
      <p>{formation.description}</p>
      <CategoryTitle>Compétences requises :</CategoryTitle>
      <p>{formation.level}</p>
      <CategoryTitle>Organisme de financement :</CategoryTitle>
      <p>{formation.organism}</p>
      <CategoryTitle>CPF :</CategoryTitle>
      <p>{formation.cpf === 1 ? 'Oui' : 'Non'}</p>
      <CategoryTitle>Formation en ligne :</CategoryTitle>
      <p>{formation.online === 1 ? 'Oui' : 'Non'}</p>
    </ContainerContentMore>
  );
}

export function ResultFormations({ inputValue, inputSelectValue }) {
  const [formationsAnswers, setFormationsAnswers] = useState();
  const[profilId, setProfilId] = useState();
  const[loading, setLoading] = useState();
  const[error, setError] = useState();
  const { submissionId } = useParams();
  const [filteredFormations, setFilteredFormations] = useState();
  const [inputSelectValueIsEmpty, setInputSelectValueIsEmpty] = useState(false);

  useEffect(() => {
    setFilteredFormations(formationsAnswers?.filter(formation => {
      if (inputValue === '') {
        return formationsAnswers;
      } else {
        setInputSelectValueIsEmpty(false);
        switch (inputSelectValue) {
        case 'nom':
          return formation.name.toLowerCase().includes(inputValue);
        case 'ville':
          return formation.cities.toLowerCase().includes(inputValue);
        case 'durée':
          return formation.unit.toLowerCase().includes(inputValue);
        case 'compétences':
          return formation.level.toLowerCase().includes(inputValue);
        default:
          setInputSelectValueIsEmpty(true);
        }
      }
    }));
  }, [inputValue]);

  const menuItems = [
    {
      id: 0,
      label: 'Trouver une formation',
      linkTo: '/trouver-une-formation'
    }
  ];

  async function getProfilsDetails() {
    setLoading(true);
    try {
      const response = await getFormSubmissionIdApi({ id: submissionId });
      setProfilId(response.data[0].id);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function getUserFormationsAnswers() {
    setLoading(true);
    try {
      const response = await getUserFormationsAnswersApi({ profilId: profilId });
      setFormationsAnswers(response.data);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
	
  useEffect(() => {
    getProfilsDetails();
  }, []);

  useEffect(() => {
    if(profilId) {
      getUserFormationsAnswers();
    }
  }, [profilId]);

  if(formationsAnswers) {
    console.log(formationsAnswers);
  }

  if(error) {
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
	
  if(loading && !error) {
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
      <ContainerFormations>
        {filteredFormations && filteredFormations.map(formationAnswer => (
          <Card
            key={formationAnswer.id}
            Icon={<IconCard />}
            title={formationAnswer.name}
            subtitle={formationAnswer.category}
            description={formationAnswer.description}
            duration={`${formationAnswer.duration} ${formationAnswer.unit}`}
            price={formationAnswer.price}
            location={formationAnswer.cities}
            ContentMore={() => <ContentMore formation={formationAnswer} />}
          />
        ))}
        {filteredFormations && filteredFormations.length === 0 && !inputSelectValueIsEmpty && (
          <Toaster Component={<ToasterContent inputValue={inputValue} />} type="information" />
        )}
        {inputSelectValueIsEmpty && (
          <Toaster message="Selectionner une catégorie pour effectuer une recherche" type="warning" />
        )}
      </ContainerFormations>
    </PageContainer>
  );
}

export default ResultFormations;