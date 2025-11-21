import React, { useState } from "react";
import "./SidebarMenu.css";

export type MenuItem = {
  label: string;
  href?: string;
  children?: MenuItem[];
};

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
}

export const SidebarMenu = ({
  isOpen,
  onClose,
  items,
}: SidebarMenuProps) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpand = (label: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(label)) {
      newExpanded.delete(label);
    } else {
      newExpanded.add(label);
    }
    setExpandedItems(newExpanded);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderMenuItem = (item: MenuItem, level: number = 0): React.ReactNode => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.label);

    return (
      <li key={item.label} className={`sidebar-menu-item sidebar-menu-item-level-${level}`}>
        <div className="sidebar-menu-item-header">
          {item.href ? (
            <a
              href={item.href}
              className="sidebar-menu-link"
              onClick={onClose}
            >
              {item.label}
            </a>
          ) : (
            <span className="sidebar-menu-label">{item.label}</span>
          )}
          {hasChildren && (
            <button
              className={`sidebar-menu-toggle ${isExpanded ? "expanded" : ""}`}
              onClick={() => toggleExpand(item.label)}
              aria-label={isExpanded ? "Collapse" : "Expand"}
              type="button"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
        {hasChildren && (
          <ul
            className={`sidebar-menu-children ${
              isExpanded ? "sidebar-menu-children-expanded" : ""
            }`}
          >
            {item.children!.map((child) => renderMenuItem(child, level + 1))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <>
      {isOpen && (
        <div
          className={`sidebar-overlay ${isOpen ? "sidebar-overlay-visible" : ""}`}
          onClick={handleOverlayClick}
        />
      )}
      <aside
        className={`sidebar-menu ${isOpen ? "sidebar-menu-open" : ""}`}
      >
        <div className="sidebar-menu-content">
          <ul className="sidebar-menu-list">
            {items.map((item) => renderMenuItem(item))}
          </ul>
        </div>
      </aside>
    </>
  );
};
