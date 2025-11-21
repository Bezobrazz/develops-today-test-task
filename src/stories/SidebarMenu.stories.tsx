import { SidebarMenu } from '../components/SidebarMenu/SidebarMenu';

export default {
  title: 'Components/SidebarMenu',
  component: SidebarMenu,
};

const menuItems = [
  { id: '1', label: 'Dashboard', onClick: () => console.log('Dashboard clicked') },
  { id: '2', label: 'Projects', onClick: () => console.log('Projects clicked') },
  { id: '3', label: 'Settings', onClick: () => console.log('Settings clicked') },
  { id: '4', label: 'Profile', onClick: () => console.log('Profile clicked') },
];

export const Default = {
  args: {
    items: menuItems,
  },
};

export const WithActiveItem = {
  args: {
    items: menuItems,
    activeItemId: '2',
  },
};

export const WithIcons = {
  args: {
    items: [
      { id: '1', label: 'Dashboard', icon: '📊', onClick: () => console.log('Dashboard clicked') },
      { id: '2', label: 'Projects', icon: '📁', onClick: () => console.log('Projects clicked') },
      { id: '3', label: 'Settings', icon: '⚙️', onClick: () => console.log('Settings clicked') },
      { id: '4', label: 'Profile', icon: '👤', onClick: () => console.log('Profile clicked') },
    ],
    activeItemId: '1',
  },
};

