import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'UZENCE Design System',
  brandUrl: 'https://example.com',
  brandTarget: '_self',
  
  // UI
  appBg: '#f8fafc',
  appContentBg: '#ffffff',
  appBorderColor: '#e2e8f0',
  appBorderRadius: 4,
  
  // Typography
  fontBase: '"Segoe UI", "Helvetica Neue", sans-serif',
  fontCode: 'monospace',
  
  // Text colors
  textColor: '#1e293b',
  textInverseColor: '#f8fafc',
  
  // Toolbar default and active colors
  barTextColor: '#64748b',
  barSelectedColor: '#0ea5e9',
  barBg: '#ffffff',
  
  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#cbd5e1',
  inputTextColor: '#1e293b',
  inputBorderRadius: 4,
  
  // Brand colors
  colorPrimary: '#0ea5e9',
  colorSecondary: '#8b5cf6',
});

addons.setConfig({
  theme,
});
