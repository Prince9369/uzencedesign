# Contributing to UZENCE Design System

Thank you for your interest in contributing to the UZENCE Design System! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Adding New Components](#adding-new-components)
- [Documentation](#documentation)
- [Testing](#testing)

## Code of Conduct

Please be respectful and considerate of others when contributing to this project. We expect all contributors to adhere to the following principles:

- Be respectful of differing viewpoints and experiences
- Accept constructive criticism gracefully
- Focus on what is best for the community and the project
- Show empathy towards other community members

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/uzencedesign.git`
3. Navigate to the project directory: `cd uzencedesign`
4. Install dependencies: `npm install`
5. Start the development server: `npm run dev`
6. Start Storybook: `npm run storybook`

## Development Workflow

1. Create a new branch for your feature or bugfix: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Test your changes thoroughly
4. Commit your changes with a descriptive commit message
5. Push your branch to your fork: `git push origin feature/your-feature-name`
6. Create a pull request

## Pull Request Process

1. Ensure your code follows the project's coding standards
2. Update documentation as necessary
3. Add tests for new functionality
4. Make sure all tests pass
5. Update the README.md if needed
6. The pull request will be reviewed by maintainers
7. Address any feedback from the review
8. Once approved, your pull request will be merged

## Coding Standards

- Follow the existing code style and structure
- Use TypeScript for type safety
- Use functional components with hooks
- Follow accessibility best practices
- Keep components modular and reusable
- Use TailwindCSS for styling

## Adding New Components

When adding a new component:

1. Create a new directory in the appropriate category folder (e.g., `src/components/data-display/your-component`)
2. Create the component file (e.g., `YourComponent.tsx`)
3. Create a Storybook story file (e.g., `YourComponent.stories.tsx`)
4. Add appropriate tests
5. Document the component's props and usage
6. Update the README.md if necessary

## Documentation

All components should be well-documented:

1. Use JSDoc comments for props and functions
2. Create comprehensive Storybook stories showing different variants and states
3. Include accessibility information
4. Provide usage examples

## Testing

- Write unit tests for components using Vitest
- Test accessibility using appropriate tools
- Test across different browsers and screen sizes
- Test both light and dark themes
