import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './AlertDialog'

const meta = {
  title: 'Modals/AlertDialog',
  component: AlertDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AlertDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Delete Account</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="secondary">Small (400px)</Button>
        </AlertDialogTrigger>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Small Alert Dialog</AlertDialogTitle>
            <AlertDialogDescription>
              This alert dialog has a max-width of 400px.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="secondary">Default (500px)</Button>
        </AlertDialogTrigger>
        <AlertDialogContent size="default">
          <AlertDialogHeader>
            <AlertDialogTitle>Default Alert Dialog</AlertDialogTitle>
            <AlertDialogDescription>
              This alert dialog has a max-width of 500px.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="secondary">Large (640px)</Button>
        </AlertDialogTrigger>
        <AlertDialogContent size="lg">
          <AlertDialogHeader>
            <AlertDialogTitle>Large Alert Dialog</AlertDialogTitle>
            <AlertDialogDescription>
              This alert dialog has a max-width of 640px.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  ),
}

export const DestructiveAction: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Delete Item</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this item?</AlertDialogTitle>
          <AlertDialogDescription>
            This action is permanent. The item will be removed from your account
            and cannot be recovered.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep Item</AlertDialogCancel>
          <AlertDialogAction>Yes, Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const ConfirmationDialog: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">Publish Changes</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Publish changes?</AlertDialogTitle>
          <AlertDialogDescription>
            Your changes will be visible to all users immediately. Make sure
            you&apos;ve reviewed everything before publishing.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Review Again</AlertDialogCancel>
          <AlertDialogAction>Publish</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const CustomButtonVariants: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Log Out</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Log out?</AlertDialogTitle>
          <AlertDialogDescription>
            You will need to log in again to access your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="ghost">Stay Logged In</AlertDialogCancel>
          <AlertDialogAction variant="secondary">Log Out</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const LongContent: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Accept Terms</Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="lg">
        <AlertDialogHeader>
          <AlertDialogTitle>Terms and Conditions</AlertDialogTitle>
          <AlertDialogDescription>
            Please read and accept our terms and conditions before continuing.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="text-secondary max-h-75 overflow-y-auto text-sm">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod, nisi vel consectetur interdum, nisl nunc egestas nunc,
            vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel
            consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl
            nunc euismod nunc.
          </p>
          <p className="mb-4">
            Praesent euismod, nisi vel consectetur interdum, nisl nunc egestas
            nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel
            consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl
            nunc euismod nunc.
          </p>
          <p className="mb-4">
            Curabitur euismod, nisi vel consectetur interdum, nisl nunc egestas
            nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel
            consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl
            nunc euismod nunc.
          </p>
          <p>
            Vestibulum euismod, nisi vel consectetur interdum, nisl nunc egestas
            nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel
            consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl
            nunc euismod nunc.
          </p>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Decline</AlertDialogCancel>
          <AlertDialogAction>Accept Terms</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}
