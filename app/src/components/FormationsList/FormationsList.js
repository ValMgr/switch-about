/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import Toaster from '../Toaster';
import Card from '../Card';
import { IconCard } from '../assets/Svg';
import {
  ContainerFormations,
  ListResult,
  CategoryTitle,
  Container,
  ContainerContentMore
} from './styledComponents';

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
    <div>
      {filteredFormations && (
        <Container>
          <ListResult>{filteredFormations.length} résultats</ListResult>
          <ContainerFormations>
            {filteredFormations.map(formation => (
              <Card 
                key={formation.id}
                Icon={<IconCard />}
                title={formation.name}
                subtitle={formation.category}
                description={formation.description}
                duration={`${formation.duration} ${formation.unit}`}
                price={formation.price}
                location={formation.cities}
                ContentMore={() => <ContentMore formation={formation} />}
              />
            ))}
          </ContainerFormations>
        </Container>
      )}
      {filteredFormations && filteredFormations.length === 0 && !inputSelectValueIsEmpty && (
        <Toaster Component={<ToasterContent inputValue={inputValue} />} type="information" />
      )}
      {inputSelectValueIsEmpty && (
        <Toaster message="Selectionner une catégorie pour effectuer une recherche" type="warning" />
      )}
    </div>
  );
}

export default FormationList;