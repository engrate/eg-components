import type { Meta, StoryObj } from '@storybook/react'

import { TabContent, TabList, Tabs, TabTrigger } from './TabList'

const meta = {
  title: 'Navigation/TabList',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-100">
      <TabList>
        <TabTrigger value="tab1">Account</TabTrigger>
        <TabTrigger value="tab2">Password</TabTrigger>
        <TabTrigger value="tab3">Settings</TabTrigger>
      </TabList>
      <TabContent value="tab1">
        <p>Manage your account settings and preferences.</p>
      </TabContent>
      <TabContent value="tab2">
        <p>Change your password and security settings.</p>
      </TabContent>
      <TabContent value="tab3">
        <p>Configure application settings and notifications.</p>
      </TabContent>
    </Tabs>
  ),
}

export const Pills: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-100">
      <TabList variant="pills">
        <TabTrigger value="tab1" variant="pills">
          Account
        </TabTrigger>
        <TabTrigger value="tab2" variant="pills">
          Password
        </TabTrigger>
        <TabTrigger value="tab3" variant="pills">
          Settings
        </TabTrigger>
      </TabList>
      <TabContent value="tab1">
        <p>Manage your account settings and preferences.</p>
      </TabContent>
      <TabContent value="tab2">
        <p>Change your password and security settings.</p>
      </TabContent>
      <TabContent value="tab3">
        <p>Configure application settings and notifications.</p>
      </TabContent>
    </Tabs>
  ),
}

export const SmallSize: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-100">
      <TabList>
        <TabTrigger value="tab1" size="sm">
          Account
        </TabTrigger>
        <TabTrigger value="tab2" size="sm">
          Password
        </TabTrigger>
        <TabTrigger value="tab3" size="sm">
          Settings
        </TabTrigger>
      </TabList>
      <TabContent value="tab1" size="sm">
        <p>Manage your account settings and preferences.</p>
      </TabContent>
      <TabContent value="tab2" size="sm">
        <p>Change your password and security settings.</p>
      </TabContent>
      <TabContent value="tab3" size="sm">
        <p>Configure application settings and notifications.</p>
      </TabContent>
    </Tabs>
  ),
}

export const LargeSize: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-100">
      <TabList>
        <TabTrigger value="tab1" size="lg">
          Account
        </TabTrigger>
        <TabTrigger value="tab2" size="lg">
          Password
        </TabTrigger>
        <TabTrigger value="tab3" size="lg">
          Settings
        </TabTrigger>
      </TabList>
      <TabContent value="tab1" size="lg">
        <p>Manage your account settings and preferences.</p>
      </TabContent>
      <TabContent value="tab2" size="lg">
        <p>Change your password and security settings.</p>
      </TabContent>
      <TabContent value="tab3" size="lg">
        <p>Configure application settings and notifications.</p>
      </TabContent>
    </Tabs>
  ),
}

export const WithDisabledTab: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-100">
      <TabList>
        <TabTrigger value="tab1">Account</TabTrigger>
        <TabTrigger value="tab2" disabled>
          Password (Disabled)
        </TabTrigger>
        <TabTrigger value="tab3">Settings</TabTrigger>
      </TabList>
      <TabContent value="tab1">
        <p>Manage your account settings and preferences.</p>
      </TabContent>
      <TabContent value="tab2">
        <p>Change your password and security settings.</p>
      </TabContent>
      <TabContent value="tab3">
        <p>Configure application settings and notifications.</p>
      </TabContent>
    </Tabs>
  ),
}

export const ManyTabs: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-150">
      <TabList>
        <TabTrigger value="tab1">Overview</TabTrigger>
        <TabTrigger value="tab2">Analytics</TabTrigger>
        <TabTrigger value="tab3">Reports</TabTrigger>
        <TabTrigger value="tab4">Notifications</TabTrigger>
        <TabTrigger value="tab5">Integrations</TabTrigger>
      </TabList>
      <TabContent value="tab1">
        <p>Overview dashboard content goes here.</p>
      </TabContent>
      <TabContent value="tab2">
        <p>Analytics and metrics content goes here.</p>
      </TabContent>
      <TabContent value="tab3">
        <p>Reports and exports content goes here.</p>
      </TabContent>
      <TabContent value="tab4">
        <p>Notification settings content goes here.</p>
      </TabContent>
      <TabContent value="tab5">
        <p>Third-party integrations content goes here.</p>
      </TabContent>
    </Tabs>
  ),
}
