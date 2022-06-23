/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import { ContainerProfils } from './styledComponents';
import Toaster from '../Toaster';
import { ListResult } from '../FormationsList/styledComponents';
import Tab from '../Tab';

export function ToasterContent({ inputValue }) {
  return(
    <p>Pas de profiles disponibles pour cette recherche : 
      <strong>{` "${inputValue}"`}</strong>
    </p>
  );
}

export function ProfilsList({ profils, inputValue, inputSelectValue }) {
  const [filteredProfils, setFilteredProfils] = useState([]);
  const [inputSelectValueIsEmpty, setInputSelectValueIsEmpty] = useState(false);

  useEffect(() => {
    setFilteredProfils(profils?.filter(answer => {
      if (inputValue === '') {
        return profils;
      } else {
        setInputSelectValueIsEmpty(false);
        switch (inputSelectValue) {
        case 'activite':
          return answer.activity.toLowerCase().includes(inputValue);
        case 'diplome':
          return answer.degree.toLowerCase().includes(inputValue);
        case 'a propos':
          return answer.situation.toLowerCase().includes(inputValue);
        case 'domaines':
          return answer.category.toLowerCase().includes(inputValue);
        case 'situation actuelle':
          return answer.situation.toLowerCase().includes(inputValue);
        case 'prenom':
          return answer.firstname.toLowerCase().includes(inputValue);
        case 'nom':
          return answer.lastname.toLowerCase().includes(inputValue);
        case 'email':
          return answer.email.toLowerCase().includes(inputValue);
        default:
          setInputSelectValueIsEmpty(true);
        }
      }
    }));
  }, [inputValue, profils]);

  return(
    <ContainerProfils>
      {filteredProfils && (
        <div>
          <ListResult>{filteredProfils.length} résultats</ListResult>
          {filteredProfils.map(profil => 
            <Tab key={profil.id} profil={profil} />
          )}
        </div>
      )}
      {filteredProfils && filteredProfils.length === 0 && !inputSelectValueIsEmpty && (
        <Toaster Component={<ToasterContent inputValue={inputValue} />} type="information" />
      )}
      {inputSelectValueIsEmpty && inputValue && (
        <Toaster message="Selectionner une catégorie pour effectuer une recherche" type="warning" />
      )}
    </ContainerProfils>
  );
}

export default ProfilsList;