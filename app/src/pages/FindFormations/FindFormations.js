import React, { useEffect, useState } from 'react';

import Form from '../../components/Form';
import Toaster from '../../components/Toaster';
import Loader from '../../components/Loader';
import Menu from '../../components/Menu';
import { PageContainer } from '../styledComponents';
import { getFormDetailsApi } from '../../services/forms/forms.services';

export function FindFormations() {
  const [form, setForm] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
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
      const response = await getFormDetailsApi();
      setForm(response.data.content[0]);
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
        <Loader message="Chargement..." />
      </PageContainer>
    );
  }
	
  return(
    <PageContainer width={`${100}vw`} height={`${100}vh`} margin="0">
      <Menu items={menuItems} displayButton={true}  buttonContent="Se connecter" buttonTo="/login" />
      {form && (
        <Form formId={form.id} />
      )}
    </PageContainer>
  );
}

export default FindFormations;