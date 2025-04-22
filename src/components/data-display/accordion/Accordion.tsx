import React, { useState } from 'react';

export interface AccordionItemProps {
  /**
   * Unique identifier for the accordion item
   */
  id: string;
  /**
   * The title or header of the accordion item
   */
  title: React.ReactNode;
  /**
   * The content to be displayed when the accordion is expanded
   */
  children: React.ReactNode;
  /**
   * Whether the accordion item is disabled
   */
  disabled?: boolean;
  /**
   * Whether the accordion item is expanded by default
   */
  defaultExpanded?: boolean;
  /**
   * Optional icon to display in the header when collapsed
   */
  expandIcon?: React.ReactNode;
  /**
   * Optional icon to display in the header when expanded
   */
  collapseIcon?: React.ReactNode;
}

export interface AccordionProps {
  /**
   * The accordion items to render
   */
  items: AccordionItemProps[];
  /**
   * Whether multiple items can be expanded at once
   */
  allowMultiple?: boolean;
  /**
   * The variant of the accordion
   */
  variant?: 'default' | 'bordered' | 'ghost';
  /**
   * The size of the accordion
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Additional CSS class names
   */
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps & { 
  isExpanded: boolean; 
  onToggle: () => void;
  variant?: 'default' | 'bordered' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}> = ({ 
  id, 
  title, 
  children, 
  disabled = false, 
  isExpanded, 
  onToggle,
  expandIcon = '+',
  collapseIcon = '-',
  variant = 'default',
  size = 'md'
}) => {
  // Determine classes based on variant and size
  const headerClasses = `
    flex justify-between items-center w-full 
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${variant === 'bordered' ? 'border-b border-neutral-200 dark:border-neutral-700' : ''}
    ${variant === 'ghost' ? 'hover:bg-neutral-100 dark:hover:bg-neutral-800' : 'hover:bg-neutral-50 dark:hover:bg-neutral-900'}
    ${size === 'sm' ? 'py-2 px-3 text-sm' : size === 'lg' ? 'py-4 px-5 text-lg' : 'py-3 px-4'}
    transition-colors duration-200
  `;

  const contentClasses = `
    ${isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
    transition-all duration-300 ease-in-out
    ${size === 'sm' ? 'px-3 pb-2' : size === 'lg' ? 'px-5 pb-4' : 'px-4 pb-3'}
  `;

  return (
    <div className={`
      ${variant === 'bordered' ? 'border border-neutral-200 dark:border-neutral-700 rounded-md mb-2' : 'mb-1'}
      ${variant === 'default' ? 'bg-white dark:bg-neutral-800 shadow-sm rounded-md' : ''}
      overflow-hidden
    `}>
      <button
        id={`accordion-header-${id}`}
        aria-expanded={isExpanded}
        aria-controls={`accordion-panel-${id}`}
        className={headerClasses}
        onClick={disabled ? undefined : onToggle}
        disabled={disabled}
      >
        <span>{title}</span>
        <span className="text-neutral-500 dark:text-neutral-400 ml-2">
          {isExpanded ? collapseIcon : expandIcon}
        </span>
      </button>
      <div 
        id={`accordion-panel-${id}`}
        role="region"
        aria-labelledby={`accordion-header-${id}`}
        className={contentClasses}
        hidden={!isExpanded}
      >
        {children}
      </div>
    </div>
  );
};

export const Accordion: React.FC<AccordionProps> = ({ 
  items, 
  allowMultiple = false,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(
    items.filter(item => item.defaultExpanded).map(item => item.id)
  );

  const handleToggle = (id: string) => {
    if (allowMultiple) {
      setExpandedItems(prev => 
        prev.includes(id) 
          ? prev.filter(itemId => itemId !== id) 
          : [...prev, id]
      );
    } else {
      setExpandedItems(prev => 
        prev.includes(id) ? [] : [id]
      );
    }
  };

  return (
    <div className={`accordion ${className}`}>
      {items.map(item => (
        <AccordionItem
          key={item.id}
          {...item}
          isExpanded={expandedItems.includes(item.id)}
          onToggle={() => handleToggle(item.id)}
          variant={variant}
          size={size}
        />
      ))}
    </div>
  );
};

export default Accordion;
