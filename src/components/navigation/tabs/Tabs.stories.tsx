import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Tabs

The Tabs component is used to organize and allow navigation between groups of content that are related and at the same level of hierarchy.

## Features

- Multiple visual variants: default, bordered, pills, underlined
- Horizontal and vertical orientations
- Different sizes
- Support for icons
- Disabled state
- Keyboard navigation

## Accessibility

- Uses proper ARIA roles (tablist, tab, tabpanel)
- Supports keyboard navigation
- Maintains focus management
- Proper labeling with aria-labelledby and aria-controls

## Usage Guidelines

- Use tabs to organize content into logical sections
- Keep tab labels short and descriptive
- Ensure content within each tab is related to its label
- Avoid using too many tabs in a single component
- Consider using icons with labels for better recognition
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'pills', 'underlined'],
      description: 'The visual style of the tabs'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the tabs'
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the tabs'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether to stretch tabs to fill the container width'
    },
    tabs: {
      control: 'object',
      description: 'The tabs to render'
    },
    defaultActiveTab: {
      control: 'text',
      description: 'The ID of the initially active tab'
    }
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultTabs = [
  {
    id: 'tab1',
    label: 'Overview',
    content: (
      <div className="prose dark:prose-invert max-w-none">
        <h3>Overview</h3>
        <p>
          A design system is a collection of reusable components, guided by clear standards, 
          that can be assembled to build any number of applications.
        </p>
        <p>
          It serves as a single source of truth for an organization's design language, 
          providing consistency across products.
        </p>
      </div>
    ),
  },
  {
    id: 'tab2',
    label: 'Features',
    content: (
      <div className="prose dark:prose-invert max-w-none">
        <h3>Features</h3>
        <ul>
          <li>Consistent UI components</li>
          <li>Responsive design</li>
          <li>Accessibility built-in</li>
          <li>Theme support</li>
          <li>Comprehensive documentation</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'tab3',
    label: 'Usage',
    content: (
      <div className="prose dark:prose-invert max-w-none">
        <h3>Usage</h3>
        <p>
          Import components from the design system and use them in your application:
        </p>
        <pre>
          <code>
            {`import { Button, Card } from 'design-system';

function MyComponent() {
  return (
    <Card>
      <h2>Hello World</h2>
      <Button variant="primary">Click Me</Button>
    </Card>
  );
}`}
          </code>
        </pre>
      </div>
    ),
  },
  {
    id: 'tab4',
    label: 'Disabled Tab',
    content: <p>This content should not be visible because the tab is disabled.</p>,
    disabled: true,
  },
];

const tabsWithIcons = [
  {
    id: 'tab1',
    label: 'Dashboard',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"/>
      </svg>
    ),
    content: <p>Dashboard content</p>,
  },
  {
    id: 'tab2',
    label: 'Analytics',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path d="M7.5 14.5v-9a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5zm6 0V8a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v6.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zM1 14.5v-2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z"/>
      </svg>
    ),
    content: <p>Analytics content</p>,
  },
  {
    id: 'tab3',
    label: 'Settings',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
      </svg>
    ),
    content: <p>Settings content</p>,
  },
];

export const Default: Story = {
  args: {
    tabs: defaultTabs,
    variant: 'default',
    size: 'md',
    orientation: 'horizontal',
    fullWidth: false,
  },
};

export const Bordered: Story = {
  args: {
    tabs: defaultTabs,
    variant: 'bordered',
    size: 'md',
    orientation: 'horizontal',
    fullWidth: false,
  },
};

export const Pills: Story = {
  args: {
    tabs: defaultTabs,
    variant: 'pills',
    size: 'md',
    orientation: 'horizontal',
    fullWidth: false,
  },
};

export const Underlined: Story = {
  args: {
    tabs: defaultTabs,
    variant: 'underlined',
    size: 'md',
    orientation: 'horizontal',
    fullWidth: false,
  },
};

export const Vertical: Story = {
  args: {
    tabs: defaultTabs,
    variant: 'default',
    size: 'md',
    orientation: 'vertical',
    fullWidth: false,
  },
};

export const FullWidth: Story = {
  args: {
    tabs: defaultTabs,
    variant: 'default',
    size: 'md',
    orientation: 'horizontal',
    fullWidth: true,
  },
};

export const Small: Story = {
  args: {
    tabs: defaultTabs,
    variant: 'default',
    size: 'sm',
    orientation: 'horizontal',
    fullWidth: false,
  },
};

export const Large: Story = {
  args: {
    tabs: defaultTabs,
    variant: 'default',
    size: 'lg',
    orientation: 'horizontal',
    fullWidth: false,
  },
};

export const WithIcons: Story = {
  args: {
    tabs: tabsWithIcons,
    variant: 'default',
    size: 'md',
    orientation: 'horizontal',
    fullWidth: false,
  },
};
