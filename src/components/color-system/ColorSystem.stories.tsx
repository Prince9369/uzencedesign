import type { Meta, StoryObj } from '@storybook/react';
import { ColorSystem, ColorSwatch, ColorPalette, SemanticColorPalette, SurfacePalette, BackgroundPalette } from './ColorSystem';

const meta = {
  title: 'Design System/Color System',
  component: ColorSystem,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Color System

The color system is a token-based system supporting B2B enterprise UI needs. It includes:

- Primary, Secondary, Tertiary Colors
- Neutral Colors (greys, whites, backgrounds, borders)
- Semantic Colors: Success, Info, Warning, Error
- Surface & Background Layers
- Light & Dark Theme Support

## Usage

Colors are available as CSS variables and can be used in your components:

\`\`\`css
.my-component {
  color: var(--color-primary-500);
  background-color: var(--color-surface-light);
}
\`\`\`

## Accessibility

All colors in this system are designed to meet WCAG 2.1 AA contrast requirements when used as recommended.

## Naming Convention

Colors follow a consistent naming pattern:
- \`--color-[category]-[shade]\` for main and semantic colors
- \`--color-[type]-[variant]\` for surfaces and backgrounds

## Best Practices

- Use semantic colors for status indicators
- Use neutral colors for text and borders
- Use surface colors for component backgrounds
- Use background colors for page backgrounds
- Ensure sufficient contrast between text and background
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    showHex: { control: 'boolean' }
  },
} satisfies Meta<typeof ColorSystem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllColors: Story = {
  args: {
    showHex: true,
  },
};

export const PrimaryColors: Story = {
  render: (args) => <ColorPalette category="primary" showHex={args.showHex} />,
  args: {
    showHex: true,
  },
};

export const SecondaryColors: Story = {
  render: (args) => <ColorPalette category="secondary" showHex={args.showHex} />,
  args: {
    showHex: true,
  },
};

export const TertiaryColors: Story = {
  render: (args) => <ColorPalette category="tertiary" showHex={args.showHex} />,
  args: {
    showHex: true,
  },
};

export const NeutralColors: Story = {
  render: (args) => <ColorPalette category="neutral" showHex={args.showHex} />,
  args: {
    showHex: true,
  },
};

export const SemanticColors: Story = {
  render: (args) => <SemanticColorPalette showHex={args.showHex} />,
  args: {
    showHex: true,
  },
};

export const Surfaces: Story = {
  render: (args) => <SurfacePalette showHex={args.showHex} />,
  args: {
    showHex: true,
  },
};

export const Backgrounds: Story = {
  render: (args) => <BackgroundPalette showHex={args.showHex} />,
  args: {
    showHex: true,
  },
};

export const SingleColorExample: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ColorSwatch category="primary" shade="500" label="Primary (Default)" showHex />
      <ColorSwatch category="success" shade="500" label="Success" showHex />
      <ColorSwatch category="error" shade="500" label="Error" showHex />
    </div>
  ),
};
