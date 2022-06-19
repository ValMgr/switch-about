/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import Toaster from '../Toaster';
import { ContainerFormation, ContainerFormations, ListResult, CategoryTitle } from './styledComponents';

export function ToasterContent({ inputValue }) {
  return(
    <p>Pas de formations disponibles pour cette recherche : 
      <strong>{` "${inputValue}"`}</strong>
    </p>
  );
}

export function FormationList({ formations, inputValue, inputSelectValue }) {
  const [filteredFormations, setFilteredFormations] = useState();
  const [inputSelectValueIsEmpty, setInputSelectValueIsEmpty] = useState(false);

  useEffect(() => {
    setFilteredFormations(formations?.filter(formation => {
      if (inputValue === '') {
        return formations;
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

  return(
    <ContainerFormations>
      {filteredFormations && (
        <div>
          <ListResult>{filteredFormations.length} résultats</ListResult>
          {filteredFormations.map(formation => (
            <ContainerFormation key={formation.id}>
              <CategoryTitle>Nom de la formation :</CategoryTitle>
              <p>{formation.name}</p>
              <CategoryTitle>Lieu :</CategoryTitle>
              <p>{formation.cities}</p>
              <CategoryTitle>Durée :</CategoryTitle>
              <p>{formation.duration} {formation.unit}</p>
              <CategoryTitle>Compétences requises :</CategoryTitle>
              <p>{formation.level}</p>
              <CategoryTitle>Description :</CategoryTitle>
              <p>{formation.description}</p>
            </ContainerFormation>
          ))}
        </div>
      )}
      {filteredFormations && filteredFormations.length === 0 && !inputSelectValueIsEmpty && (
        <Toaster Component={<ToasterContent inputValue={inputValue} />} type="information" />
      )}
      {inputSelectValueIsEmpty && (
        <Toaster message="Selectionner une catégorie pour effectuer une recherche" type="warning" />
      )}
    </ContainerFormations>
  );
}

export default FormationList;