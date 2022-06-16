import React, { useEffect, useState } from 'react';

import { Form } from '../components';
import { PageContainer } from './styledComponents';
import { getFormDetailsApi } from '../services.api';

export function Home() {
  const [form, setForm] = useState();
	
  async function getFormDetails() {
    try {
      const response = await getFormDetailsApi();
      setForm(response.data.content[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getFormDetails();
  }, []);

  return(
    <PageContainer>
      {form && (
        <Form formId={form.id} />
      )}
    </PageContainer>
  );
}

export default Home;