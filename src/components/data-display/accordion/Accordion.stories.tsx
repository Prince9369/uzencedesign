import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta = {
  title: 'Data Display/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Accordion

The Accordion component is used to display collapsible content panels for presenting information in a limited amount of space.

## Features

- Support for single or multiple expanded items
- Customizable appearance with different variants and sizes
- Keyboard navigation and ARIA roles for accessibility
- Support for custom expand/collapse icons
- Disabled state

## Accessibility

- Uses appropriate ARIA attributes (aria-expanded, aria-controls, aria-labelledby)
- Supports keyboard navigation
- Maintains focus management

## Usage Guidelines

- Use accordions to organize related information into manageable sections
- Keep headers short and descriptive
- Ensure content within each panel is related to its header
- Consider using other components for very small amounts of content
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'ghost'],
      description: 'The visual style of the accordion'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the accordion'
    },
    allowMultiple: {
      control: 'boolean',
      description: 'Whether multiple items can be expanded at once'
    },
    items: {
      control: 'object',
      description: 'The accordion items to render'
    }
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  {
    id: '1',
    title: 'What is a design system?',
    children: (
      <div className="prose dark:prose-invert">
        <p>A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications.</p>
        <p>It serves as a single source of truth for an organization's design language, providing consistency across products.</p>
      </div>
    ),
  },
  {
    id: '2',
    title: 'Why use a design system?',
    children: (
      <div className="prose dark:prose-invert">
        <p>Design systems help teams:</p>
        <ul>
          <li>Build products faster with pre-built, reusable components</li>
          <li>Maintain consistency across different products and platforms</li>
          <li>Scale design processes efficiently</li>
          <li>Improve collaboration between designers and developers</li>
        </ul>
      </div>
    ),
    defaultExpanded: true,
  },
  {
    id: '3',
    title: 'How to implement a design system?',
    children: (
      <div className="prose dark:prose-invert">
        <p>Implementing a design system typically involves:</p>
        <ol>
          <li>Auditing existing design patterns</li>
          <li>Defining design principles and guidelines</li>
          <li>Creating reusable components</li>
          <li>Documenting usage and best practices</li>
          <li>Establishing governance processes</li>
        </ol>
      </div>
    ),
  },
  {
    id: '4',
    title: 'This item is disabled',
    children: <p>You cannot expand this item because it is disabled.</p>,
    disabled: true,
  },
];

export const Default: Story = {
  args: {
    items: defaultItems,
    variant: 'default',
    size: 'md',
    allowMultiple: false,
  },
};

export const Bordered: Story = {
  args: {
    items: defaultItems,
    variant: 'bordered',
    size: 'md',
    allowMultiple: false,
  },
};

export const Ghost: Story = {
  args: {
    items: defaultItems,
    variant: 'ghost',
    size: 'md',
    allowMultiple: false,
  },
};

export const Small: Story = {
  args: {
    items: defaultItems,
    variant: 'default',
    size: 'sm',
    allowMultiple: false,
  },
};

export const Large: Story = {
  args: {
    items: defaultItems,
    variant: 'default',
    size: 'lg',
    allowMultiple: false,
  },
};

export const AllowMultiple: Story = {
  args: {
    items: defaultItems,
    variant: 'default',
    size: 'md',
    allowMultiple: true,
  },
};
