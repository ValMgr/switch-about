import React, { useEffect, useState } from 'react';

import { Form, Error, Loader, Menu } from '../components';
import { PageContainer } from './styledComponents';
import { getFormDetailsApi } from '../services.api';

export function Home() {
  const [form, setForm] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const menuItems = [
    {
      id: 0,
      label: 'Trouver une formation',
      linkTo: '/'
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
        <Error message="Une erreur est survenue. Veuillez réessayer ultérieurement." />
      </PageContainer>
    );
  }

  if(loading && !error) {
    return (
      <PageContainer>
        <Loader message="Chargement..." />
      </PageContainer>
    );
  }

  return(
    <PageContainer width={`${100}vw`} height={`${100}vh`} margin="0">
      <Menu items={menuItems} displayButton={true} />
      {form && (
        <Form formId={form.id} />
      )}
    </PageContainer>
  );
}

export default Home;