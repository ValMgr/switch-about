import React from 'react';

import Menu from '../../../components/Menu';

export function AdminMenu() {
  const items = [
    {
      id: 0,
      label: 'Accueil',
      linkTo: '/admin'
    },
    {
      id: 1,
      label: 'Les formations',
      linkTo: '/formations'
    },
    {
      id: 2,
      label: 'Les profiles',
      linkTo: '/profiles'
    }
  ];
  return <Menu items={items} displayButton={true} buttonContent="Se déconnecter" buttonTo="/" />;
}

export default AdminMenu;