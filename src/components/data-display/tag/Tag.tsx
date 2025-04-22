import React from 'react';

export interface TagProps {
  /**
   * The content of the tag
   */
  children: React.ReactNode;
  /**
   * The variant of the tag
   */
  variant?: 'solid' | 'outline' | 'subtle';
  /**
   * The color scheme of the tag
   */
  colorScheme?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'info' | 'warning' | 'error' | 'neutral';
  /**
   * The size of the tag
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether the tag is rounded
   */
  rounded?: boolean;
  /**
   * Whether the tag is disabled
   */
  disabled?: boolean;
  /**
   * Optional icon to display before the content
   */
  leftIcon?: React.ReactNode;
  /**
   * Optional icon to display after the content
   */
  rightIcon?: React.ReactNode;
  /**
   * Callback when the tag is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /**
   * Whether the tag is removable
   */
  removable?: boolean;
  /**
   * Callback when the remove button is clicked
   */
  onRemove?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Additional CSS class names
   */
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  variant = 'solid',
  colorScheme = 'primary',
  size = 'md',
  rounded = false,
  disabled = false,
  leftIcon,
  rightIcon,
  onClick,
  removable = false,
  onRemove,
  className = '',
}) => {
  // Base classes
  const baseClasses = `
    inline-flex items-center
    ${size === 'sm' ? 'text-xs px-2 py-0.5' : size === 'lg' ? 'text-base px-4 py-2' : 'text-sm px-3 py-1'}
    ${rounded ? 'rounded-full' : 'rounded-md'}
    ${disabled ? 'opacity-60 cursor-not-allowed' : onClick ? 'cursor-pointer' : ''}
    transition-colors duration-200
  `;

  // Color and variant specific classes
  let variantClasses = '';
  
  if (variant === 'solid') {
    switch (colorScheme) {
      case 'primary':
        variantClasses = 'bg-primary-500 text-white hover:bg-primary-600';
        break;
      case 'secondary':
        variantClasses = 'bg-secondary-500 text-white hover:bg-secondary-600';
        break;
      case 'tertiary':
        variantClasses = 'bg-tertiary-500 text-white hover:bg-tertiary-600';
        break;
      case 'success':
        variantClasses = 'bg-success-500 text-white hover:bg-success-600';
        break;
      case 'info':
        variantClasses = 'bg-info-500 text-white hover:bg-info-600';
        break;
      case 'warning':
        variantClasses = 'bg-warning-500 text-white hover:bg-warning-600';
        break;
      case 'error':
        variantClasses = 'bg-error-500 text-white hover:bg-error-600';
        break;
      case 'neutral':
        variantClasses = 'bg-neutral-500 text-white hover:bg-neutral-600';
        break;
    }
  } else if (variant === 'outline') {
    switch (colorScheme) {
      case 'primary':
        variantClasses = 'border border-primary-500 text-primary-700 hover:bg-primary-50';
        break;
      case 'secondary':
        variantClasses = 'border border-secondary-500 text-secondary-700 hover:bg-secondary-50';
        break;
      case 'tertiary':
        variantClasses = 'border border-tertiary-500 text-tertiary-700 hover:bg-tertiary-50';
        break;
      case 'success':
        variantClasses = 'border border-success-500 text-success-700 hover:bg-success-50';
        break;
      case 'info':
        variantClasses = 'border border-info-500 text-info-700 hover:bg-info-50';
        break;
      case 'warning':
        variantClasses = 'border border-warning-500 text-warning-700 hover:bg-warning-50';
        break;
      case 'error':
        variantClasses = 'border border-error-500 text-error-700 hover:bg-error-50';
        break;
      case 'neutral':
        variantClasses = 'border border-neutral-500 text-neutral-700 hover:bg-neutral-50';
        break;
    }
  } else if (variant === 'subtle') {
    switch (colorScheme) {
      case 'primary':
        variantClasses = 'bg-primary-100 text-primary-800 hover:bg-primary-200';
        break;
      case 'secondary':
        variantClasses = 'bg-secondary-100 text-secondary-800 hover:bg-secondary-200';
        break;
      case 'tertiary':
        variantClasses = 'bg-tertiary-100 text-tertiary-800 hover:bg-tertiary-200';
        break;
      case 'success':
        variantClasses = 'bg-success-100 text-success-800 hover:bg-success-200';
        break;
      case 'info':
        variantClasses = 'bg-info-100 text-info-800 hover:bg-info-200';
        break;
      case 'warning':
        variantClasses = 'bg-warning-100 text-warning-800 hover:bg-warning-200';
        break;
      case 'error':
        variantClasses = 'bg-error-100 text-error-800 hover:bg-error-200';
        break;
      case 'neutral':
        variantClasses = 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200';
        break;
    }
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };

  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!disabled && onRemove) {
      onRemove(event);
    }
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={handleClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick && !disabled ? 0 : undefined}
      aria-disabled={disabled}
    >
      {leftIcon && <span className="mr-1">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="ml-1">{rightIcon}</span>}
      {removable && (
        <button
          type="button"
          className={`
            ml-1.5 
            ${size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'}
            flex items-center justify-center
            rounded-full
            hover:bg-black/10 dark:hover:bg-white/10
            focus:outline-none focus:ring-2 focus:ring-offset-1
            ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
          `}
          onClick={handleRemove}
          disabled={disabled}
          aria-label="Remove"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-full h-full"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Tag;
