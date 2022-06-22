/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { CategoryTitle } from '../FormationsList/styledComponents';
import {
  ContainerProfil,
  ContainerTabFirstPart,
  ContainerName,
  ProfilName,
  ContainerMore,
  ProfilActivity,
  Item
} from './styledComponents';

export function Tab({ profil }) {
  const [show, setShow] = useState();

  function onClick() {
    if(show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  return (
    <ContainerProfil onClick={onClick} >
      <ContainerTabFirstPart>
        <ContainerName>
          <ProfilName>{profil.firstname}</ProfilName>
          <ProfilName>{profil.lastname}</ProfilName>
        </ContainerName>
        <ProfilActivity>{profil.activity}</ProfilActivity>
      </ContainerTabFirstPart>
      {show ? (
        <ContainerMore>
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
          <CategoryTitle>Email</CategoryTitle>
          <p>{profil.email}</p>
          <CategoryTitle>Numéro de téléphone</CategoryTitle>
          <p>{profil.phone}</p>
          <CategoryTitle>Âge</CategoryTitle>
          <p>{profil.age}</p>
          <CategoryTitle>Formations :</CategoryTitle>
          {profil.formations && profil.formations.map(formation => (<p key={profil.id + '-' + formation.id}>{formation.name}</p>))}
        </ContainerMore>
      ) : null}
    </ContainerProfil>
  );
}

export default Tab;