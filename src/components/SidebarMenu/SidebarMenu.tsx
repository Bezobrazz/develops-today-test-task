import { ReactNode } from 'react';

interface MenuItem {
  id: string;
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
}

interface SidebarMenuProps {
  items: MenuItem[];
  activeItemId?: string;
  className?: string;
}

export const SidebarMenu = ({ items, activeItemId, className = '' }: SidebarMenuProps) => {
  return (
    <nav className={`sidebar-menu ${className}`}>
      <ul className="sidebar-menu-list">
        {items.map((item) => (
          <li key={item.id} className={`sidebar-menu-item ${activeItemId === item.id ? 'active' : ''}`}>
            <button className="sidebar-menu-button" onClick={item.onClick}>
              {item.icon && <span className="sidebar-menu-icon">{item.icon}</span>}
              <span className="sidebar-menu-label">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

