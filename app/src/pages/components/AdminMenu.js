import React from 'react';

import { Menu } from '../../components';

export function AdminMenu() {
  const items = [
    {
      id: 0,
      label: 'Les formations',
      linkTo: '/formations'
    },
    {
      id: 1,
      label: 'Les profils',
      linkTo: '/profile'
    }
  ];
  return <Menu items={items} displayButton={false} />;
}

export default AdminMenu;