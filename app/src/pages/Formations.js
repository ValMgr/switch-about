import React, { useState, useEffect } from 'react';

import { FormationsList, Loader } from '../components';
import { getFormationsApi } from '../services.api';

export function Formations() {
  const [formations, setFormations] = useState();
	
  async function getFormations() {
    try {
      const response = await getFormationsApi();
      console.log(response);
    } catch (error) {
      console.log(error, setFormations);
    }
  }

  useEffect(() => {
    getFormations();
  }, []);

  if(!formations) {
    return (
      <Loader />
    );
  }

  return(
    <FormationsList formations={formations} />
  );
}

export default Formations;