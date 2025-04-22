import React from 'react';

// Import components
import { ColorSystem } from './components/color-system/ColorSystem';
import { Accordion } from './components/data-display/accordion/Accordion';
import { Tag } from './components/data-display/tag/Tag';
import { TopNav } from './components/navigation/top-nav/TopNav';
import { Tabs } from './components/navigation/tabs/Tabs';

function App() {
  // Sample data for components
  const navItems = [
    {
      id: 'home',
      label: 'Home',
      href: '#',
      active: true,
    },
    {
      id: 'components',
      label: 'Components',
      children: [
        {
          id: 'color-system',
          label: 'Color System',
          href: '#color-system',
        },
        {
          id: 'accordion',
          label: 'Accordion',
          href: '#accordion',
        },
        {
          id: 'tag',
          label: 'Tag',
          href: '#tag',
        },
        {
          id: 'tabs',
          label: 'Tabs',
          href: '#tabs',
        },
      ],
    },
    {
      id: 'about',
      label: 'About',
      href: '#about',
    },
  ];

  const accordionItems = [
    {
      id: '1',
      title: 'What is UZENCE Design System?',
      children: (
        <div className="prose dark:prose-invert">
          <p>UZENCE Design System is a comprehensive collection of reusable components built with React, TypeScript, and TailwindCSS.</p>
          <p>It provides a consistent design language for building enterprise applications.</p>
        </div>
      ),
      defaultExpanded: true,
    },
    {
      id: '2',
      title: 'What components are included?',
      children: (
        <div className="prose dark:prose-invert">
          <p>The design system includes:</p>
          <ul>
            <li>Color System</li>
            <li>Data Display Components (Accordion, Tag)</li>
            <li>Navigation Components (TopNav, Tabs)</li>
          </ul>
        </div>
      ),
    },
    {
      id: '3',
      title: 'How to use the components?',
      children: (
        <div className="prose dark:prose-invert">
          <p>Import components from the design system and use them in your application:</p>
          <pre>
            <code>
              {`import { Button, Card } from 'uzence-design-system';`}
            </code>
          </pre>
        </div>
      ),
    },
  ];

  const tabItems = [
    {
      id: 'tab1',
      label: 'Overview',
      content: (
        <div className="prose dark:prose-invert max-w-none">
          <h3>Overview</h3>
          <p>
            UZENCE Design System provides a comprehensive set of components for building enterprise applications.
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
            Import components from the design system and use them in your application.
          </p>
        </div>
      ),
    },
  ];

  // Logo component for TopNav
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

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Top Navigation */}
      <TopNav brand={<Logo />} items={navItems} variant="bordered" sticky />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-12">
          {/* Hero Section */}
          <section className="text-center py-12">
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">UZENCE Design System</h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              A comprehensive collection of reusable components for building enterprise applications.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Tag variant="solid" colorScheme="primary" size="lg">React</Tag>
              <Tag variant="solid" colorScheme="secondary" size="lg">TypeScript</Tag>
              <Tag variant="solid" colorScheme="tertiary" size="lg">TailwindCSS</Tag>
              <Tag variant="solid" colorScheme="info" size="lg">Storybook</Tag>
            </div>
          </section>

          {/* Color System Section */}
          <section id="color-system" className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Color System</h2>
            <ColorSystem showHex />
          </section>

          {/* Accordion Section */}
          <section id="accordion" className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Accordion</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Default Variant</h3>
                <Accordion items={accordionItems} variant="default" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Bordered Variant</h3>
                <Accordion items={accordionItems} variant="bordered" />
              </div>
            </div>
          </section>

          {/* Tag Section */}
          <section id="tag" className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Tag / Badge / Pill</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Tag variant="solid" colorScheme="primary">Solid</Tag>
                  <Tag variant="outline" colorScheme="primary">Outline</Tag>
                  <Tag variant="subtle" colorScheme="primary">Subtle</Tag>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Colors</h3>
                <div className="flex flex-wrap gap-4">
                  <Tag colorScheme="primary">Primary</Tag>
                  <Tag colorScheme="secondary">Secondary</Tag>
                  <Tag colorScheme="tertiary">Tertiary</Tag>
                  <Tag colorScheme="success">Success</Tag>
                  <Tag colorScheme="info">Info</Tag>
                  <Tag colorScheme="warning">Warning</Tag>
                  <Tag colorScheme="error">Error</Tag>
                  <Tag colorScheme="neutral">Neutral</Tag>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Sizes</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Tag size="sm" colorScheme="primary">Small</Tag>
                  <Tag size="md" colorScheme="primary">Medium</Tag>
                  <Tag size="lg" colorScheme="primary">Large</Tag>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Features</h3>
                <div className="flex flex-wrap gap-4">
                  <Tag rounded colorScheme="primary">Rounded</Tag>
                  <Tag
                    leftIcon={
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                    }
                    colorScheme="success"
                  >
                    With Icon
                  </Tag>
                  <Tag removable colorScheme="error" onRemove={() => alert('Tag removed')}>Removable</Tag>
                  <Tag disabled colorScheme="neutral">Disabled</Tag>
                </div>
              </div>
            </div>
          </section>

          {/* Tabs Section */}
          <section id="tabs" className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Tabs</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Default Variant</h3>
                <Tabs tabs={tabItems} variant="default" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Pills Variant</h3>
                <Tabs tabs={tabItems} variant="pills" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Vertical Orientation</h3>
                <Tabs tabs={tabItems} variant="bordered" orientation="vertical" />
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
              UZENCE Design System - Built with React, TypeScript, and TailwindCSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
