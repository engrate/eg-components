import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

import { Button } from '../Button'

import {
  ActionsMenuButton,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './DropdownMenu'

const meta = {
  title: 'Misc/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const ActionsMenu: Story = {
  render: () => (
    <div className="border-border bg-card flex items-center gap-4 rounded-lg border p-4">
      <span className="text-primary flex-1">Row with actions menu</span>
      <DropdownMenu>
        <ActionsMenuButton />
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Duplicate</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-error">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
}

export const ActionsMenuSizes: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <DropdownMenu>
          <ActionsMenuButton iconSize="sm" />
          <DropdownMenuContent>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <span className="text-small text-secondary">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <DropdownMenu>
          <ActionsMenuButton iconSize="default" />
          <DropdownMenuContent>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <span className="text-small text-secondary">Default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <DropdownMenu>
          <ActionsMenuButton iconSize="lg" />
          <DropdownMenuContent>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <span className="text-small text-secondary">Large</span>
      </div>
    </div>
  ),
}

export const WithCheckboxItems: Story = {
  render: function Render() {
    const [showToolbar, setShowToolbar] = React.useState(true)
    const [showSidebar, setShowSidebar] = React.useState(false)
    const [showStatusBar, setShowStatusBar] = React.useState(true)

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">View Options</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showToolbar}
            onCheckedChange={setShowToolbar}
          >
            Show Toolbar
            <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showSidebar}
            onCheckedChange={setShowSidebar}
          >
            Show Sidebar
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Show Status Bar
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const WithRadioItems: Story = {
  render: function Render() {
    const [theme, setTheme] = React.useState('light')

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">Select Theme</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
            <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const WithSubmenus: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Menu with Submenus</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          New Tab
          <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          New Window
          <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-48">
            <DropdownMenuItem>Email Link</DropdownMenuItem>
            <DropdownMenuItem>Messages</DropdownMenuItem>
            <DropdownMenuItem>Notes</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>More...</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>More Tools</DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-48">
            <DropdownMenuItem>
              Save Page As...
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>Create Shortcut...</DropdownMenuItem>
            <DropdownMenuItem>Name Window...</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Developer Tools</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Print...
          <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const InTableRow: Story = {
  render: () => (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-border border-b">
          <th className="text-small text-secondary p-3 text-left">Name</th>
          <th className="text-small text-secondary p-3 text-left">Status</th>
          <th className="w-12 p-3"></th>
        </tr>
      </thead>
      <tbody>
        {['Project Alpha', 'Project Beta', 'Project Gamma'].map((name) => (
          <tr key={name} className="border-border border-b">
            <td className="text-primary p-3">{name}</td>
            <td className="text-primary p-3">Active</td>
            <td className="p-3">
              <DropdownMenu>
                <ActionsMenuButton iconSize="sm" />
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-error">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
}

export const Complete: Story = {
  render: function Render() {
    const [bookmarksChecked, setBookmarksChecked] = React.useState(true)
    const [fullUrlsChecked, setFullUrlsChecked] = React.useState(false)
    const [person, setPerson] = React.useState('pedro')

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Open Complete Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem inset>
            Back
            <DropdownMenuShortcut>⌘[</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem inset disabled>
            Forward
            <DropdownMenuShortcut>⌘]</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem inset>
            Reload
            <DropdownMenuShortcut>⌘R</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger inset>More Tools</DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-48">
              <DropdownMenuItem>
                Save Page As...
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>Create Shortcut...</DropdownMenuItem>
              <DropdownMenuItem>Name Window...</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Developer Tools</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            Show Bookmarks Bar
            <DropdownMenuShortcut>⌘⇧B</DropdownMenuShortcut>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={fullUrlsChecked}
            onCheckedChange={setFullUrlsChecked}
          >
            Show Full URLs
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel inset>People</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenuRadioItem value="pedro">
              Pedro Duarte
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="colm">
              Colm Tuite
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}
