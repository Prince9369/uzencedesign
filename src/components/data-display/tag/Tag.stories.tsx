import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta = {
  title: 'Data Display/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Tag / Badge / Pill

The Tag component is used to label, categorize, or organize items using keywords that describe them.

## Features

- Multiple variants: solid, outline, and subtle
- Various color schemes
- Different sizes
- Support for icons
- Removable option
- Clickable option
- Rounded option for pill-like appearance
- Disabled state

## Accessibility

- Uses appropriate ARIA attributes
- Maintains focus management
- Provides visual feedback for interactive states

## Usage Guidelines

- Use tags to categorize content or represent attributes
- Keep tag text concise
- Use color consistently to represent meaning
- Consider using the removable option for tags that can be dismissed
- Use the clickable option for tags that navigate or filter content
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'subtle'],
      description: 'The visual style of the tag'
    },
    colorScheme: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'info', 'warning', 'error', 'neutral'],
      description: 'The color scheme of the tag'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the tag'
    },
    rounded: {
      control: 'boolean',
      description: 'Whether the tag has fully rounded corners (pill style)'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the tag is disabled'
    },
    removable: {
      control: 'boolean',
      description: 'Whether the tag has a remove button'
    },
    children: {
      control: 'text',
      description: 'The content of the tag'
    }
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Tag',
    variant: 'solid',
    colorScheme: 'primary',
    size: 'md',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Tag',
    variant: 'outline',
    colorScheme: 'primary',
    size: 'md',
  },
};

export const Subtle: Story = {
  args: {
    children: 'Subtle Tag',
    variant: 'subtle',
    colorScheme: 'primary',
    size: 'md',
  },
};

export const Rounded: Story = {
  args: {
    children: 'Rounded Tag',
    variant: 'solid',
    colorScheme: 'primary',
    size: 'md',
    rounded: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: 'With Icon',
    variant: 'solid',
    colorScheme: 'primary',
    size: 'md',
    leftIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
      </svg>
    ),
  },
};

export const Removable: Story = {
  args: {
    children: 'Removable Tag',
    variant: 'solid',
    colorScheme: 'primary',
    size: 'md',
    removable: true,
    onRemove: () => alert('Tag removed'),
  },
};

export const Clickable: Story = {
  args: {
    children: 'Clickable Tag',
    variant: 'solid',
    colorScheme: 'primary',
    size: 'md',
    onClick: () => alert('Tag clicked'),
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Tag',
    variant: 'solid',
    colorScheme: 'primary',
    size: 'md',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    children: 'Small Tag',
    variant: 'solid',
    colorScheme: 'primary',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Tag',
    variant: 'solid',
    colorScheme: 'primary',
    size: 'lg',
  },
};

export const ColorVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag colorScheme="primary">Primary</Tag>
      <Tag colorScheme="secondary">Secondary</Tag>
      <Tag colorScheme="tertiary">Tertiary</Tag>
      <Tag colorScheme="success">Success</Tag>
      <Tag colorScheme="info">Info</Tag>
      <Tag colorScheme="warning">Warning</Tag>
      <Tag colorScheme="error">Error</Tag>
      <Tag colorScheme="neutral">Neutral</Tag>
    </div>
  ),
};
