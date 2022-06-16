/* eslint-disable react/prop-types */
import React from 'react';

export function FormationList({ formations }) {

  return(
    <div>
      {formations && (
        <div>
          {formations.map(formation => (
            <div key={formation.id}>{formation.name}</div>
          ))}
        </div>
      )}
      <div>Pas de formations</div>
    </div>
  );
}

export default FormationList;