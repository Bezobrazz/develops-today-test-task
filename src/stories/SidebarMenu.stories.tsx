import React, { useState } from "react";
import { SidebarMenu, MenuItem } from "../components/SidebarMenu/SidebarMenu";
import "./SidebarMenu.stories.css";

export default {
  title: "Navigation/SidebarMenu",
  component: SidebarMenu,
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Whether sidebar is open",
    },
    onClose: {
      action: "closed",
      description: "Close handler",
    },
    items: {
      control: "object",
      description: "Menu items array",
    },
  },
};

const oneLevelItems: MenuItem[] = [
  { label: "Dashboard", href: "#dashboard" },
  { label: "Projects", href: "#projects" },
  { label: "Settings", href: "#settings" },
  { label: "Profile", href: "#profile" },
];

const twoLevelItems: MenuItem[] = [
  { label: "Dashboard", href: "#dashboard" },
  {
    label: "Projects",
    children: [
      { label: "All Projects", href: "#projects/all" },
      { label: "Active", href: "#projects/active" },
      { label: "Archived", href: "#projects/archived" },
    ],
  },
  {
    label: "Settings",
    children: [
      { label: "General", href: "#settings/general" },
      { label: "Security", href: "#settings/security" },
      { label: "Notifications", href: "#settings/notifications" },
    ],
  },
  { label: "Profile", href: "#profile" },
];

export const OneLevel = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="sidebar-story-container">
        <button className="sidebar-story-button" onClick={() => setIsOpen(true)}>
          Open Sidebar
        </button>
        <SidebarMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          items={oneLevelItems}
        />
      </div>
    );
  },
};

export const TwoLevel = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="sidebar-story-container">
        <button className="sidebar-story-button" onClick={() => setIsOpen(true)}>
          Open Sidebar
        </button>
        <SidebarMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          items={twoLevelItems}
        />
      </div>
    );
  },
};

export const OpenState = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <div className="sidebar-story-container">
        <button className="sidebar-story-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>
        <SidebarMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          items={twoLevelItems}
        />
      </div>
    );
  },
};

export const ClosedState = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="sidebar-story-container">
        <button className="sidebar-story-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>
        <SidebarMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          items={twoLevelItems}
        />
      </div>
    );
  },
};
