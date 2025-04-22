import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from './ThemeToggle';
import { ThemeProvider } from './ThemeContext';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Components/Theme/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A toggle button for switching between light and dark themes.',
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="p-4 bg-white dark:bg-neutral-800 rounded-md">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {
  args: {},
};

export const WithCustomClass: Story = {
  args: {
    className: 'bg-primary-100 dark:bg-primary-900 p-3 rounded-full',
  },
};
