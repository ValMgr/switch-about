import React from 'react';

if(!localStorage.getItem('isLoggedIn') || !localStorage.getItem('userId')) {
  localStorage.setItem('isLoggedIn', false);
  localStorage.setItem('userId', null);
}


export const globalState = {
  isLoggedIn: localStorage.getItem('isLoggedIn'),
  userId: localStorage.getItem('userId')
};

export const globalStateContext = React.createContext(globalState);