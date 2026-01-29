import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button'
import { Input } from '../Input'
import { Label } from '../Label'
import { Textarea } from '../Textarea'
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from './Modal'

const meta = {
  title: 'UI/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>Open Modal</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalDescription>
            This is a description of what the modal is about. It provides
            context for the user.
          </ModalDescription>
        </ModalHeader>
        <div className="py-4">
          <p className="text-text-secondary">
            Modal content goes here. You can put any content inside the modal
            body.
          </p>
        </div>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="secondary">Cancel</Button>
          </ModalClose>
          <Button>Confirm</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Modal>
        <ModalTrigger asChild>
          <Button variant="secondary">Small (400px)</Button>
        </ModalTrigger>
        <ModalContent size="sm">
          <ModalHeader>
            <ModalTitle>Small Modal</ModalTitle>
            <ModalDescription>
              This modal has a max-width of 400px.
            </ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button>Close</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button variant="secondary">Default (500px)</Button>
        </ModalTrigger>
        <ModalContent size="default">
          <ModalHeader>
            <ModalTitle>Default Modal</ModalTitle>
            <ModalDescription>
              This modal has a max-width of 500px.
            </ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button>Close</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button variant="secondary">Large (640px)</Button>
        </ModalTrigger>
        <ModalContent size="lg">
          <ModalHeader>
            <ModalTitle>Large Modal</ModalTitle>
            <ModalDescription>
              This modal has a max-width of 640px.
            </ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button>Close</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal>
        <ModalTrigger asChild>
          <Button variant="secondary">Full (95vw)</Button>
        </ModalTrigger>
        <ModalContent size="full">
          <ModalHeader>
            <ModalTitle>Full Width Modal</ModalTitle>
            <ModalDescription>
              This modal has a max-width of 95vw.
            </ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button>Close</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>Edit Profile</Button>
      </ModalTrigger>
      <ModalContent size="lg">
        <ModalHeader>
          <ModalTitle>Edit Profile</ModalTitle>
          <ModalDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </ModalDescription>
        </ModalHeader>
        <form className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              defaultValue="John Doe"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              defaultValue="john@example.com"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" placeholder="Tell us about yourself" rows={3} />
          </div>
        </form>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="secondary">Cancel</Button>
          </ModalClose>
          <Button type="submit">Save changes</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
}

export const LongContent: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>Terms of Service</Button>
      </ModalTrigger>
      <ModalContent size="lg">
        <ModalHeader>
          <ModalTitle>Terms of Service</ModalTitle>
          <ModalDescription>
            Please read our terms of service carefully.
          </ModalDescription>
        </ModalHeader>
        <div className="text-text-secondary max-h-[50vh] overflow-y-auto py-4 text-sm">
          <h3 className="text-text-primary mb-2 font-semibold">
            1. Introduction
          </h3>
          <p className="mb-4">
            Welcome to our service. These Terms of Service govern your use of
            our website and services. By accessing or using our services, you
            agree to be bound by these terms.
          </p>

          <h3 className="text-text-primary mb-2 font-semibold">
            2. Use of Services
          </h3>
          <p className="mb-4">
            You may use our services only as permitted by law. We may suspend or
            stop providing our services to you if you do not comply with our
            terms or policies or if we are investigating suspected misconduct.
          </p>

          <h3 className="text-text-primary mb-2 font-semibold">
            3. Privacy Policy
          </h3>
          <p className="mb-4">
            Our privacy policy explains how we treat your personal data and
            protect your privacy when you use our services. By using our
            services, you agree that we can use such data in accordance with our
            privacy policies.
          </p>

          <h3 className="text-text-primary mb-2 font-semibold">
            4. Content in Services
          </h3>
          <p className="mb-4">
            Some of our services allow you to upload, submit, store, send or
            receive content. You retain ownership of any intellectual property
            rights that you hold in that content.
          </p>

          <h3 className="text-text-primary mb-2 font-semibold">
            5. Software in Services
          </h3>
          <p className="mb-4">
            When a service requires or includes downloadable software, this
            software may update automatically on your device once a new version
            or feature is available.
          </p>

          <h3 className="text-text-primary mb-2 font-semibold">
            6. Modifying and Terminating
          </h3>
          <p className="mb-4">
            We are constantly changing and improving our services. We may add or
            remove functionalities or features, and we may suspend or stop a
            service altogether.
          </p>

          <h3 className="text-text-primary mb-2 font-semibold">7. Liability</h3>
          <p className="mb-4">
            When permitted by law, we will not be responsible for lost profits,
            revenues, or data, financial losses or indirect, special,
            consequential, exemplary, or punitive damages.
          </p>

          <h3 className="text-text-primary mb-2 font-semibold">
            8. Business Uses
          </h3>
          <p className="mb-4">
            If you are using our services on behalf of a business, that business
            accepts these terms. It will hold harmless and indemnify us from any
            claim, suit or action arising from or related to the use of the
            services.
          </p>
        </div>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="secondary">Decline</Button>
          </ModalClose>
          <Button>Accept</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
}

export const WithoutCloseButton: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>Open Modal (No X Button)</Button>
      </ModalTrigger>
      <ModalContent showCloseButton={false}>
        <ModalHeader>
          <ModalTitle>Confirm Action</ModalTitle>
          <ModalDescription>
            This modal doesn&apos;t have a close button. Use the footer buttons
            to dismiss it.
          </ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <ModalClose asChild>
            <Button variant="secondary">Cancel</Button>
          </ModalClose>
          <Button>Confirm</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
}

export const CustomStyling: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>Custom Styled Modal</Button>
      </ModalTrigger>
      <ModalContent className="border-sunflower bg-sunflower">
        <ModalHeader className="border-b border-sunflower pb-4">
          <ModalTitle>Custom Styled</ModalTitle>
          <ModalDescription>
            This modal demonstrates custom styling with className overrides.
          </ModalDescription>
        </ModalHeader>
        <div className="py-4">
          <p className="text-text-secondary">
            You can customize the appearance by passing className to any of the
            modal parts.
          </p>
        </div>
        <ModalFooter className="border-t border-sunflower pt-4">
          <ModalClose asChild>
            <Button variant="secondary">Got it!</Button>
          </ModalClose>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
}
