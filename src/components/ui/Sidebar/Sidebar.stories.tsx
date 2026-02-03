import type { Meta, StoryObj } from '@storybook/react'
import {
  BarChart3,
  FileText,
  Home,
  LogOut,
  Settings,
  Users,
} from 'lucide-react'
import * as React from 'react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarItem,
  SidebarLogo,
  SidebarSeparator,
  SidebarTrigger,
} from './Sidebar'

const meta = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered'],
      description: 'The visual style of the sidebar',
    },
    width: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'The width of the sidebar',
    },
    defaultCollapsed: {
      control: 'boolean',
      description: 'Whether the sidebar starts collapsed',
    },
    collapsible: {
      control: 'boolean',
      description: 'Whether the sidebar can be collapsed',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '500px', display: 'flex' }}>
        <Story />
        <div className="bg-main flex-1 p-6">
          <p className="text-secondary">Main content area</p>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: (args) => (
    <Sidebar {...args} aria-label="Main navigation">
      <SidebarHeader>
        <div className="px-2 pt-3">
          <SidebarLogo />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarItem icon={<Home className="h-4 w-4" />} active>
            Dashboard
          </SidebarItem>
          <SidebarItem icon={<BarChart3 className="h-4 w-4" />}>
            Analytics
          </SidebarItem>
          <SidebarItem icon={<FileText className="h-4 w-4" />}>
            Reports
          </SidebarItem>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarItem icon={<Users className="h-4 w-4" />}>Users</SidebarItem>
          <SidebarItem icon={<Settings className="h-4 w-4" />}>
            Settings
          </SidebarItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarItem icon={<LogOut className="h-4 w-4" />}>Logout</SidebarItem>
      </SidebarFooter>
    </Sidebar>
  ),
}

export const Collapsed: Story = {
  args: {
    defaultCollapsed: true,
  },
  render: (args) => (
    <Sidebar {...args} aria-label="Main navigation">
      <SidebarHeader>
        <div className="flex items-center justify-center">
          <div className="bg-sunflower h-8 w-8 rounded-full" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarItem icon={<Home className="h-4 w-4" />} active>
            Dashboard
          </SidebarItem>
          <SidebarItem icon={<BarChart3 className="h-4 w-4" />}>
            Analytics
          </SidebarItem>
          <SidebarItem icon={<FileText className="h-4 w-4" />}>
            Reports
          </SidebarItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
  ),
}

export const SmallWidth: Story = {
  args: {
    width: 'sm',
  },
  render: (args) => (
    <Sidebar {...args} aria-label="Main navigation">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <div className="bg-sunflower h-8 w-8 rounded-full" />
          <span className="text-body text-primary font-sans font-medium">
            Engrate
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarItem icon={<Home className="h-4 w-4" />} active>
            Dashboard
          </SidebarItem>
          <SidebarItem icon={<BarChart3 className="h-4 w-4" />}>
            Analytics
          </SidebarItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
  ),
}

export const LargeWidth: Story = {
  args: {
    width: 'lg',
  },
  render: (args) => (
    <Sidebar {...args} aria-label="Main navigation">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <div className="bg-sunflower h-8 w-8 rounded-full" />
          <span className="text-body text-primary font-sans font-medium">
            Engrate
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarItem icon={<Home className="h-4 w-4" />} active>
            Dashboard
          </SidebarItem>
          <SidebarItem icon={<BarChart3 className="h-4 w-4" />}>
            Analytics
          </SidebarItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
  ),
}

export const WithLinks: Story = {
  args: {},
  render: (args) => (
    <Sidebar {...args} aria-label="Main navigation">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <div className="bg-sunflower h-8 w-8 rounded-full" />
          <span className="text-body text-primary font-sans font-medium">
            Engrate
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarItem asChild icon={<Home className="h-4 w-4" />} active>
            <a href="#dashboard">Dashboard</a>
          </SidebarItem>
          <SidebarItem asChild icon={<BarChart3 className="h-4 w-4" />}>
            <a href="#analytics">Analytics</a>
          </SidebarItem>
          <SidebarItem asChild icon={<Settings className="h-4 w-4" />}>
            <a href="#settings">Settings</a>
          </SidebarItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
  ),
}

export const Controlled: Story = {
  args: {},
  render: function ControlledSidebar(args) {
    const [collapsed, setCollapsed] = React.useState(false)

    return (
      <Sidebar
        {...args}
        aria-label="Main navigation"
        collapsed={collapsed}
        onCollapsedChange={setCollapsed}
      >
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <div className="bg-sunflower h-8 w-8 rounded-full" />
            {!collapsed && (
              <span className="text-body text-primary font-sans font-medium">
                Engrate
              </span>
            )}
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarItem icon={<Home className="h-4 w-4" />} active>
              Dashboard
            </SidebarItem>
            <SidebarItem icon={<BarChart3 className="h-4 w-4" />}>
              Analytics
            </SidebarItem>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarTrigger />
        </SidebarFooter>
      </Sidebar>
    )
  },
}

export const WithoutIcons: Story = {
  args: {},
  render: (args) => (
    <Sidebar {...args} aria-label="Main navigation">
      <SidebarHeader>
        <span className="text-body text-primary font-sans font-medium">
          Menu
        </span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarItem active>Home</SidebarItem>
          <SidebarItem>About</SidebarItem>
          <SidebarItem>Services</SidebarItem>
          <SidebarItem>Contact</SidebarItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
  ),
}
