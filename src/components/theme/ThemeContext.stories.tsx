import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, useTheme } from './ThemeContext';
import { ThemeToggle } from './ThemeToggle';

// Demo component to show theme context usage
const ThemeDemo = () => {
  const { theme } = useTheme();
  
  return (
    <div className="p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-md max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Theme Demo</h2>
        <ThemeToggle />
      </div>
      
      <div className="p-4 bg-neutral-100 dark:bg-neutral-700 rounded-md mb-4">
        <p className="text-neutral-800 dark:text-neutral-200">
          Current theme: <span className="font-bold">{theme}</span>
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-md text-primary-800 dark:text-primary-100">
          Primary background
        </div>
        <div className="p-3 bg-secondary-100 dark:bg-secondary-900 rounded-md text-secondary-800 dark:text-secondary-100">
          Secondary background
        </div>
        <div className="p-3 bg-tertiary-100 dark:bg-tertiary-900 rounded-md text-tertiary-800 dark:text-tertiary-100">
          Tertiary background
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof ThemeProvider> = {
  title: 'Components/Theme/ThemeContext',
  component: ThemeDemo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A context provider for managing theme state (light/dark mode).',
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeDemo>;

export const Default: Story = {};
