import type { Meta, StoryObj } from '@storybook/react';
import { TopNav } from './TopNav';

const meta = {
  title: 'Navigation/TopNav',
  component: TopNav,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Top Navigation Bar

The TopNav component provides a responsive navigation header that includes support for branding, navigation links, and other content.

## Features

- Responsive design with mobile menu
- Support for dropdown submenus
- Multiple visual variants
- Support for active and disabled states
- Customizable right-side content
- Sticky option

## Accessibility

- Uses appropriate ARIA attributes (aria-current, aria-expanded)
- Supports keyboard navigation
- Mobile menu toggle has proper labeling

## Usage Guidelines

- Use for primary navigation across an application
- Keep navigation items concise and clear
- Limit the number of top-level items to avoid overcrowding
- Consider using icons with labels for better recognition
- Use the active state to indicate the current page
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'filled'],
      description: 'The visual style of the navigation'
    },
    sticky: {
      control: 'boolean',
      description: 'Whether the navigation sticks to the top of the viewport'
    },
    items: {
      control: 'object',
      description: 'The navigation items'
    },
    brand: {
      control: 'object',
      description: 'The brand/logo component'
    },
    rightContent: {
      control: 'object',
      description: 'Optional content to display on the right side'
    }
  },
} satisfies Meta<typeof TopNav>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  {
    id: 'home',
    label: 'Home',
    href: '#',
    active: true,
  },
  {
    id: 'features',
    label: 'Features',
    href: '#',
  },
  {
    id: 'pricing',
    label: 'Pricing',
    href: '#',
  },
  {
    id: 'resources',
    label: 'Resources',
    children: [
      {
        id: 'documentation',
        label: 'Documentation',
        href: '#',
      },
      {
        id: 'tutorials',
        label: 'Tutorials',
        href: '#',
      },
      {
        id: 'blog',
        label: 'Blog',
        href: '#',
      },
    ],
  },
  {
    id: 'about',
    label: 'About',
    href: '#',
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#',
    disabled: true,
  },
];

const Logo = () => (
  <div className="flex items-center">
    <svg
      className="h-8 w-8 text-primary-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
    <span className="ml-2 text-xl font-bold text-neutral-900 dark:text-white">UZENCE</span>
  </div>
);

const RightContent = () => (
  <div className="flex items-center space-x-4">
    <button className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400">
      Sign In
    </button>
    <button className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
      Sign Up
    </button>
  </div>
);

export const Default: Story = {
  args: {
    brand: <Logo />,
    items: defaultItems,
    rightContent: <RightContent />,
    variant: 'default',
    sticky: false,
  },
};

export const Bordered: Story = {
  args: {
    brand: <Logo />,
    items: defaultItems,
    rightContent: <RightContent />,
    variant: 'bordered',
    sticky: false,
  },
};

export const Filled: Story = {
  args: {
    brand: <Logo />,
    items: defaultItems,
    rightContent: <RightContent />,
    variant: 'filled',
    sticky: false,
  },
};

export const Sticky: Story = {
  args: {
    brand: <Logo />,
    items: defaultItems,
    rightContent: <RightContent />,
    variant: 'default',
    sticky: true,
  },
};

export const WithoutRightContent: Story = {
  args: {
    brand: <Logo />,
    items: defaultItems,
    variant: 'default',
    sticky: false,
  },
};

export const WithoutBrand: Story = {
  args: {
    items: defaultItems,
    rightContent: <RightContent />,
    variant: 'default',
    sticky: false,
  },
};
