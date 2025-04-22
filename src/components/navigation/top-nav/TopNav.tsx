import React, { useState } from 'react';

export interface TopNavItem {
  /**
   * Unique identifier for the nav item
   */
  id: string;
  /**
   * The label of the nav item
   */
  label: string;
  /**
   * Optional icon to display with the label
   */
  icon?: React.ReactNode;
  /**
   * URL to navigate to when clicked
   */
  href?: string;
  /**
   * Whether the nav item is active
   */
  active?: boolean;
  /**
   * Whether the nav item is disabled
   */
  disabled?: boolean;
  /**
   * Callback when the nav item is clicked
   */
  onClick?: (event: React.MouseEvent) => void;
  /**
   * Submenu items
   */
  children?: TopNavItem[];
}

export interface TopNavProps {
  /**
   * The brand/logo component
   */
  brand?: React.ReactNode;
  /**
   * The navigation items
   */
  items: TopNavItem[];
  /**
   * Optional content to display on the right side
   */
  rightContent?: React.ReactNode;
  /**
   * The variant of the navigation
   */
  variant?: 'default' | 'bordered' | 'filled';
  /**
   * Whether the navigation is sticky
   */
  sticky?: boolean;
  /**
   * Additional CSS class names
   */
  className?: string;
}

export const TopNavItem: React.FC<TopNavItem & { 
  variant?: 'default' | 'bordered' | 'filled';
  isSubmenuOpen?: boolean;
  toggleSubmenu?: () => void;
}> = ({ 
  label, 
  icon, 
  href, 
  active, 
  disabled, 
  onClick, 
  children,
  variant = 'default',
  isSubmenuOpen,
  toggleSubmenu
}) => {
  // Base classes for all nav items
  const baseClasses = `
    flex items-center px-4 py-2 text-sm font-medium
    transition-colors duration-200
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  `;

  // Variant-specific classes
  let variantClasses = '';
  if (variant === 'default') {
    variantClasses = `
      ${active ? 'text-primary-700 dark:text-primary-300' : 'text-neutral-700 dark:text-neutral-300'}
      ${!disabled && !active ? 'hover:text-primary-600 dark:hover:text-primary-400' : ''}
    `;
  } else if (variant === 'bordered') {
    variantClasses = `
      ${active ? 'border-b-2 border-primary-500 text-primary-700 dark:text-primary-300' : 'border-b-2 border-transparent text-neutral-700 dark:text-neutral-300'}
      ${!disabled && !active ? 'hover:border-primary-300 hover:text-primary-600 dark:hover:text-primary-400' : ''}
    `;
  } else if (variant === 'filled') {
    variantClasses = `
      ${active ? 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200' : 'text-neutral-700 dark:text-neutral-300'}
      ${!disabled && !active ? 'hover:bg-neutral-100 dark:hover:bg-neutral-800' : ''}
      rounded-md
    `;
  }

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    
    if (children && children.length > 0) {
      e.preventDefault();
      toggleSubmenu?.();
    } else if (onClick) {
      onClick(e);
    }
  };

  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      <span>{label}</span>
      {children && children.length > 0 && (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor" 
          className={`w-4 h-4 ml-1 transition-transform duration-200 ${isSubmenuOpen ? 'transform rotate-180' : ''}`}
        >
          <path 
            fillRule="evenodd" 
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" 
            clipRule="evenodd" 
          />
        </svg>
      )}
    </>
  );

  return (
    <div className="relative">
      {href && !disabled && !children?.length ? (
        <a 
          href={href} 
          className={`${baseClasses} ${variantClasses}`}
          onClick={onClick}
          aria-current={active ? 'page' : undefined}
        >
          {content}
        </a>
      ) : (
        <button 
          className={`${baseClasses} ${variantClasses}`}
          onClick={handleClick}
          disabled={disabled}
          aria-current={active ? 'page' : undefined}
          aria-expanded={children && children.length > 0 ? isSubmenuOpen : undefined}
        >
          {content}
        </button>
      )}

      {children && children.length > 0 && isSubmenuOpen && (
        <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white dark:bg-neutral-800 ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {children.map((item) => (
              <TopNavItem 
                key={item.id} 
                {...item} 
                variant="default"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const TopNav: React.FC<TopNavProps> = ({ 
  brand, 
  items, 
  rightContent,
  variant = 'default',
  sticky = false,
  className = ''
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenuId, setOpenSubmenuId] = useState<string | null>(null);

  const toggleSubmenu = (id: string) => {
    setOpenSubmenuId(prev => prev === id ? null : id);
  };

  // Base classes for the nav container
  const navClasses = `
    bg-white dark:bg-neutral-900
    ${variant === 'bordered' ? 'border-b border-neutral-200 dark:border-neutral-700' : ''}
    ${sticky ? 'sticky top-0 z-50' : ''}
    ${className}
  `;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - Brand and desktop navigation */}
          <div className="flex">
            {/* Brand/Logo */}
            {brand && (
              <div className="flex-shrink-0 flex items-center">
                {brand}
              </div>
            )}

            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-2">
              {items.map((item) => (
                <TopNavItem 
                  key={item.id} 
                  {...item} 
                  variant={variant}
                  isSubmenuOpen={openSubmenuId === item.id}
                  toggleSubmenu={() => toggleSubmenu(item.id)}
                />
              ))}
            </div>
          </div>

          {/* Right side content */}
          {rightContent && (
            <div className="hidden sm:flex sm:items-center">
              {rightContent}
            </div>
          )}

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          {items.map((item) => (
            <div key={item.id} className="px-3">
              <TopNavItem 
                {...item} 
                variant="filled"
                isSubmenuOpen={openSubmenuId === item.id}
                toggleSubmenu={() => toggleSubmenu(item.id)}
              />
            </div>
          ))}
        </div>
        {rightContent && (
          <div className="pt-4 pb-3 border-t border-neutral-200 dark:border-neutral-700">
            <div className="px-3">
              {rightContent}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNav;
