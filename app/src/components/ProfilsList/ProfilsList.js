/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import { ContainerProfil, ContainerProfils } from './styledComponents';
import { CategoryTitle } from '../FormationsList/styledComponents';
import { Item } from './styledComponents';
import Toaster from '../Toaster';
import { ListResult } from '../FormationsList/styledComponents';

export function ToasterContent({ inputValue }) {
  return(
    <p>Pas de profiles disponibles pour cette recherche : 
      <strong>{` "${inputValue}"`}</strong>
    </p>
  );
}

export function ProfilsList({ profils, inputValue, inputSelectValue }) {
  const [filteredProfils, setFilteredProfils] = useState();
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
  }, [inputValue]);

  return(
    <ContainerProfils>
      {filteredProfils && (
        <div>
          <ListResult>{filteredProfils.length} résultats</ListResult>
          {filteredProfils.map(profil => (
            <ContainerProfil key={profil.id}>
              <CategoryTitle>Mon activité</CategoryTitle>
              <p>{profil.activity}</p>
              <CategoryTitle>Mon niveau de diplôme</CategoryTitle>
              <p>{profil.degree}</p>
              <CategoryTitle>Quelle est votre situation actuelle</CategoryTitle>
              <p>{profil.situation}</p>
              <CategoryTitle>La formation</CategoryTitle>
              <ul>
                <Item>
                  <p>Comment souhaitez-vous vous formez ?</p>
                  {profil.formation_cpf}
                </Item>
                <Item>
                  <p>Quelle durée de formation préfèreriez-vous ?</p>
                  {profil.formation_duration}
                </Item>
                <Item>
                  <p>Quand souhaiteriez-vous débuter votre formation ?</p>
                  {profil.formation_start}
                </Item>
                <Item>
                  <p>Comment voulez-vous financer votre formations ?</p>
                  {profil.formation_payment}
                </Item>
              </ul>
              <CategoryTitle>Sélectionnez des domaines qui pourraient vous intéresser</CategoryTitle>
              <p>{profil.category}</p>
              <CategoryTitle>Quelles sont les raisons de votre épanouissement dans le cadre professionnel ?</CategoryTitle>
              <p>{profil.personality}</p>
              <CategoryTitle>Qui êtes-vous</CategoryTitle>
              <ul>
                <Item>
                  <p>D après vous, l importance d un métier c est ?</p>
                  {profil.desire_1}
                </Item>
                <Item>
                  <p>Ce qui vous représente le plus :</p>
                  {profil.desire_2}
                </Item>
                <Item>
                  <p>lorsque vous faites face à une situation :</p>
                  {profil.desire_3}
                </Item>
                <Item>
                  <p>Qu est ce que le travail doit vous apporter ?</p>
                  {profil.desire_4}
                </Item>
              </ul>
              <CategoryTitle>Prénom</CategoryTitle>
              <p>{profil.firstname}</p>
              <CategoryTitle>Nom</CategoryTitle>
              <p>{profil.lastname}</p>
              <CategoryTitle>Email</CategoryTitle>
              <p>{profil.email}</p>
              <CategoryTitle>Numéro de téléphone</CategoryTitle>
              <p>{profil.phone}</p>
              <CategoryTitle>Âge</CategoryTitle>
              <p>{profil.age}</p>
            </ContainerProfil>
          ))}
        </div>
      )}
      {filteredProfils && filteredProfils.length === 0 && !inputSelectValueIsEmpty && (
        <Toaster Component={<ToasterContent inputValue={inputValue} />} type="information" />
      )}
      {inputSelectValueIsEmpty && (
        <Toaster message="Selectionner une catégorie pour effectuer une recherche" type="warning" />
      )}
    </ContainerProfils>
  );
}

export default ProfilsList;