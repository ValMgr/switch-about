/* eslint-disable react/prop-types */
import React from 'react';

import { ContainerFormation, ContainerFormations } from './styledComponents';

export function FormationList({ formations }) {

  return(
    <ContainerFormations>
      {formations && (
        <div>
          {formations.map(formation => (
            <ContainerFormation key={formation.id}>
              <p>
                NOM DE LA FORMATION : {formation.name}
              </p>
              <p>
                LIEU : {formation.cities}
              </p>
              <p>
                DURÉE : {formation.duration} {formation.unit}
              </p>
              <p>
                COMPÉTENCES REQUISES : {formation.level}
              </p>
              <p>
                DESCRIPTION : {formation.description}
              </p>
            </ContainerFormation>
          ))}
        </div>
      )}
      {formations && formations.length === 0 && (
        <div>Pas de formations disponibles</div>
      )}
    </ContainerFormations>
  );
}

export default FormationList;