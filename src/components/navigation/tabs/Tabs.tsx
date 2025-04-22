import React, { useState } from 'react';

export interface TabItem {
  /**
   * Unique identifier for the tab
   */
  id: string;
  /**
   * The label of the tab
   */
  label: React.ReactNode;
  /**
   * The content of the tab
   */
  content: React.ReactNode;
  /**
   * Optional icon to display with the label
   */
  icon?: React.ReactNode;
  /**
   * Whether the tab is disabled
   */
  disabled?: boolean;
}

export interface TabsProps {
  /**
   * The tabs to render
   */
  tabs: TabItem[];
  /**
   * The ID of the initially active tab
   */
  defaultActiveTab?: string;
  /**
   * The variant of the tabs
   */
  variant?: 'default' | 'bordered' | 'pills' | 'underlined';
  /**
   * The size of the tabs
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The orientation of the tabs
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Whether to stretch tabs to fill the container width
   */
  fullWidth?: boolean;
  /**
   * Callback when a tab is changed
   */
  onChange?: (tabId: string) => void;
  /**
   * Additional CSS class names
   */
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultActiveTab,
  variant = 'default',
  size = 'md',
  orientation = 'horizontal',
  fullWidth = false,
  onChange,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultActiveTab || (tabs.length > 0 ? tabs[0].id : '')
  );

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    if (onChange) {
      onChange(tabId);
    }
  };

  // Base classes for the tabs container
  const containerClasses = `
    ${orientation === 'horizontal' ? 'flex flex-col' : 'flex flex-row'}
    ${className}
  `;

  // Base classes for the tab list
  const tabListClasses = `
    ${orientation === 'horizontal' ? 'flex flex-row' : 'flex flex-col'}
    ${variant === 'bordered' ? 'border border-neutral-200 dark:border-neutral-700 rounded-md overflow-hidden' : ''}
    ${variant === 'underlined' ? 'border-b border-neutral-200 dark:border-neutral-700' : ''}
  `;

  // Base classes for individual tab buttons
  const getTabClasses = (tab: TabItem) => {
    const isActive = activeTab === tab.id;
    const baseClasses = `
      flex items-center
      ${size === 'sm' ? 'px-3 py-1.5 text-sm' : size === 'lg' ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm'}
      ${fullWidth && orientation === 'horizontal' ? 'flex-1 justify-center' : ''}
      ${tab.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      transition-colors duration-200
      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50
    `;

    let variantClasses = '';
    if (variant === 'default') {
      variantClasses = `
        ${isActive ? 'bg-primary-50 text-primary-700 dark:bg-primary-900 dark:text-primary-300' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'}
        ${orientation === 'horizontal' ? 'border-b-2' : 'border-l-2'}
        ${isActive ? 'border-primary-500' : 'border-transparent'}
      `;
    } else if (variant === 'bordered') {
      variantClasses = `
        ${isActive ? 'bg-primary-50 text-primary-700 dark:bg-primary-900 dark:text-primary-300' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'}
        ${orientation === 'horizontal' && !isActive ? 'border-r border-neutral-200 dark:border-neutral-700' : ''}
        ${orientation === 'vertical' && !isActive ? 'border-b border-neutral-200 dark:border-neutral-700' : ''}
      `;
    } else if (variant === 'pills') {
      variantClasses = `
        rounded-md
        ${isActive ? 'bg-primary-500 text-white' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'}
        ${orientation === 'horizontal' ? 'mr-2' : 'mb-2'}
      `;
    } else if (variant === 'underlined') {
      variantClasses = `
        ${isActive ? 'text-primary-700 dark:text-primary-300' : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100'}
        ${orientation === 'horizontal' ? 'border-b-2' : 'border-l-2'}
        ${isActive ? 'border-primary-500' : 'border-transparent'}
      `;
    }

    return `${baseClasses} ${variantClasses}`;
  };

  // Classes for the tab content
  const contentClasses = `
    p-4
    ${variant === 'bordered' ? 'border border-t-0 border-neutral-200 dark:border-neutral-700 rounded-b-md' : ''}
    ${orientation === 'vertical' ? 'flex-1' : ''}
  `;

  return (
    <div className={containerClasses} role="tablist" aria-orientation={orientation}>
      <div className={tabListClasses}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            className={getTabClasses(tab)}
            onClick={() => !tab.disabled && handleTabClick(tab.id)}
            disabled={tab.disabled}
            tabIndex={activeTab === tab.id ? 0 : -1}
          >
            {tab.icon && <span className="mr-2">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
      <div className={contentClasses}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`tabpanel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            hidden={activeTab !== tab.id}
            tabIndex={0}
          >
            {activeTab === tab.id && tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
