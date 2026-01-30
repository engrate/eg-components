import type { Meta, StoryObj } from '@storybook/react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './Accordion'

const meta = {
  title: 'Navigation/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'single',
    collapsible: true,
    className: 'w-[400px]',
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern for accordions.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match Engrate&apos;s design
          system.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It features smooth expand and collapse animations.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const Multiple: Story = {
  args: {
    type: 'multiple',
    className: 'w-[400px]',
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>First Section</AccordionTrigger>
        <AccordionContent>
          Multiple items can be open at the same time in this mode.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second Section</AccordionTrigger>
        <AccordionContent>
          Click on multiple headers to expand them simultaneously.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Third Section</AccordionTrigger>
        <AccordionContent>
          This is useful when users need to compare content across sections.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const Bordered: Story = {
  args: {
    type: 'single',
    collapsible: true,
    variant: 'bordered',
    className: 'w-[400px]',
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger className="px-4">What is Engrate?</AccordionTrigger>
        <AccordionContent className="px-4">
          Engrate is a platform that makes the transition to sustainability
          faster, more democratic, and more profitable.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="px-4">How does it work?</AccordionTrigger>
        <AccordionContent className="px-4">
          We leverage AI to handle the complexity of energy data, making it
          accessible and actionable for everyone.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="px-4">What is the goal?</AccordionTrigger>
        <AccordionContent className="px-4">
          Our overarching goal is to become the global standard for energy data.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const WithDefaultOpen: Story = {
  args: {
    type: 'single',
    collapsible: true,
    defaultValue: 'item-2',
    className: 'w-[400px]',
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Getting Started</AccordionTrigger>
        <AccordionContent>
          Learn how to get started with our platform and set up your account.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Configuration</AccordionTrigger>
        <AccordionContent>
          This section is open by default. Configure your settings and
          preferences here.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Advanced Usage</AccordionTrigger>
        <AccordionContent>
          Explore advanced features and integrations available on our platform.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const Sizes: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-secondary mb-2 text-sm">Small</p>
        <Accordion type="single" collapsible className="w-100">
          <AccordionItem value="item-1">
            <AccordionTrigger size="sm">Small trigger text</AccordionTrigger>
            <AccordionContent>
              Content with a small trigger size.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <p className="text-secondary mb-2 text-sm">Default</p>
        <Accordion type="single" collapsible className="w-100">
          <AccordionItem value="item-1">
            <AccordionTrigger size="default">
              Default trigger text
            </AccordionTrigger>
            <AccordionContent>
              Content with a default trigger size.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <p className="text-secondary mb-2 text-sm">Large</p>
        <Accordion type="single" collapsible className="w-100">
          <AccordionItem value="item-1">
            <AccordionTrigger size="lg">Large trigger text</AccordionTrigger>
            <AccordionContent>
              Content with a large trigger size.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
}

export const FAQ: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: () => (
    <div className="w-150">
      <h2 className="text-primary font-display mb-6 text-2xl">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="faq-1">
          <AccordionTrigger>How do I create an account?</AccordionTrigger>
          <AccordionContent>
            To create an account, click the &quot;Sign Up&quot; button in the
            top right corner of the page. Fill in your email address and create
            a password. You&apos;ll receive a confirmation email to verify your
            account.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2">
          <AccordionTrigger>
            What payment methods do you accept?
          </AccordionTrigger>
          <AccordionContent>
            We accept all major credit cards (Visa, MasterCard, American
            Express), PayPal, and bank transfers for enterprise customers.
            Contact our sales team for custom billing arrangements.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3">
          <AccordionTrigger>Can I export my data?</AccordionTrigger>
          <AccordionContent>
            Yes, you can export your data at any time. Go to Settings &gt; Data
            Management &gt; Export. You can choose to export in CSV, JSON, or
            Excel format. Your data belongs to you.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4">
          <AccordionTrigger>How do I contact support?</AccordionTrigger>
          <AccordionContent>
            You can reach our support team via email at support@engrate.com or
            through the in-app chat. Enterprise customers have access to
            dedicated support channels with guaranteed response times.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const NestedContent: Story = {
  args: {
    type: 'single',
    collapsible: true,
    className: 'w-[500px]',
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Features Overview</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc space-y-2 pl-4">
            <li>Real-time energy monitoring</li>
            <li>Automated reporting and analytics</li>
            <li>AI-powered insights and recommendations</li>
            <li>Integration with major energy providers</li>
            <li>Custom dashboards and visualizations</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Pricing Plans</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <div>
              <h4 className="text-primary font-medium">Starter</h4>
              <p className="text-secondary text-sm">
                Perfect for small businesses. $49/month
              </p>
            </div>
            <div>
              <h4 className="text-primary font-medium">Professional</h4>
              <p className="text-secondary text-sm">
                For growing companies. $149/month
              </p>
            </div>
            <div>
              <h4 className="text-primary font-medium">Enterprise</h4>
              <p className="text-secondary text-sm">
                Custom solutions. Contact us
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
