# UZENCE Design System

A comprehensive design system built with React, TypeScript, TailwindCSS, and Storybook. This design system provides a collection of reusable components for building enterprise applications with full support for both light and dark themes.

## Demo Links

- **Storybook**: [View Storybook Documentation](https://uzencedesign.vercel.app/)
- **GitHub Repository**: [View Source Code](https://github.com/Prince9369/uzencedesign)

![Design System Preview](./screenshots/preview.png)

## Features

- **Color System**: Token-based color system with primary, secondary, tertiary, neutral, and semantic colors
- **Data Display Components**: Accordion and Tag/Badge components
- **Navigation Components**: Top Navigation Bar and Tabs
- **Accessibility**: WCAG-compliant with proper ARIA roles and keyboard navigation
- **Responsive Design**: All components are responsive and work on mobile, tablet, and desktop
- **Theme Support**: Interactive light and dark theme toggle with system preference detection and persistence
- **Documentation**: Comprehensive documentation with Storybook

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Prince9369/uzencedesign.git

# Navigate to the project directory
cd uzence-design-system

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev

# Start Storybook
npm run storybook
```

## Component Documentation

### Color System

The color system is a token-based system supporting B2B enterprise UI needs. It includes:

- Primary, Secondary, Tertiary Colors
- Neutral Colors (greys, whites, backgrounds, borders)
- Semantic Colors: Success, Info, Warning, Error
- Surface & Background Layers
- Light & Dark Theme Support with interactive toggle

### Data Display Components

#### Accordion

The Accordion component is used to display collapsible content panels for presenting information in a limited amount of space.

Features:
- Support for single or multiple expanded items
- Customizable appearance with different variants and sizes
- Keyboard navigation and ARIA roles for accessibility
- Support for custom expand/collapse icons
- Disabled state

#### Tag/Badge/Pill

The Tag component is used to label, categorize, or organize items using keywords that describe them.

Features:
- Multiple variants: solid, outline, and subtle
- Various color schemes
- Different sizes
- Support for icons
- Removable option
- Clickable option
- Rounded option for pill-like appearance
- Disabled state

### Navigation Components

#### Top Navigation Bar

The TopNav component provides a responsive navigation header that includes support for branding, navigation links, and other content.

Features:
- Responsive design with mobile menu
- Support for dropdown submenus
- Multiple visual variants
- Support for active and disabled states
- Customizable right-side content
- Sticky option

#### Tabs

The Tabs component is used to organize and allow navigation between groups of content that are related and at the same level of hierarchy.

Features:
- Multiple visual variants: default, bordered, pills, underlined
- Horizontal and vertical orientations
- Different sizes
- Support for icons
- Disabled state
- Keyboard navigation

## Accessibility

All components in this design system are designed with accessibility in mind:

- WCAG 2.1 AA compliant color contrast
- Proper ARIA roles and attributes
- Keyboard navigation support
- Focus management
- Screen reader friendly

## Assignment Details

This design system was created as part of an assignment focusing on:

- Building a token-based color system
- Developing reusable data display components
- Creating navigation components
- Ensuring accessibility and responsiveness
- Documenting usage with Storybook

### Components Implemented

1. **Foundational Element**: Color System
2. **Data Display Components**:
   - Accordion
   - Tag/Badge/Pill
3. **Navigation Components**:
   - Top Navigation Bar
   - Tabs
4. **Theme Components**:
   - ThemeProvider (context)
   - ThemeToggle (light/dark mode switch)

### Screenshots

#### Color System
![Color System](./screenshots/color-system.png)

#### Accordion
![Accordion](./screenshots/accordion.gif)

#### Tag/Badge
![Tag](./screenshots/tag.png)

#### Top Navigation
![TopNav](./screenshots/topnav.gif)

#### Tabs
![Tabs](./screenshots/tabs.gif)

#### Theme Toggle
![Theme Toggle](./screenshots/theme-toggle.gif)

## License

This project is licensed under the MIT License - see the LICENSE file for details.