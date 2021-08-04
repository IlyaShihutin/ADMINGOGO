import { adminRoot } from './defaultValues';

const data = [
  {
    id: 'profile',
    icon: 'iconsminds-shop-4',
    label: 'Profile',
    to: `${adminRoot}/profile`,
    subs: [
      {
        icon: 'simple-icon-briefcase',
        label: 'Profile List',
        to: `${adminRoot}/profile/list`,
      },
    ],
  },
  {
    id: 'mediators',
    icon: 'iconsminds-air-balloon-1',
    label: 'Mediators',
    to: `${adminRoot}/mediators`,
    subs: [
      {
        icon: 'simple-icon-check',
        label: 'Mediators',
        to: `${adminRoot}/mediators`,
      },
    ],
  },
  {
    id: 'menu',
    icon: 'iconsminds-three-arrow-fork',
    label: 'Menu',
    to: `${adminRoot}/menu`
  }
];
export default data;
