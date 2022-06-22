import React, { useState, useEffect } from 'react';

import Menu from '../../components/Menu';
import { PageContainer } from '../styledComponents';
import Toaster from '../../components/Toaster';
import Loader from '../../components/Loader';
import { getUserFormAnswersApi } from '../../services/users/users.services';

export function ResultFormations() {
  const[formationAnswers, setFormationsAnswers] = useState();
  const[loading, setLoading] = useState();
  const[error, setError] = useState();

  const menuItems = [
    {
      id: 0,
      label: 'Trouver une formation',
      linkTo: '/trouver-une-formation'
    }
  ];

  async function getFormDetails() {
    setLoading(true);
    try {
      const response = await getUserFormAnswersApi({ id: 1 });
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
    getFormDetails();
  }, []);

  if(formationAnswers) {
    console.log(formationAnswers);
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
      {formationAnswers && formationAnswers.map(formationAnswer => (
        <div key={formationAnswer.id}>
          <p>{formationAnswer.name}</p>
        </div>
      ))}
      <h2>Les formations qui vous correspondent :</h2>
    </PageContainer>
  );
}

export default ResultFormations;