import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '../Checkbox'
import { Input } from '../Input'
import { Label } from '../Label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../Select'
import { Textarea } from '../Textarea'

import { FormField } from './FormField'

const meta = {
  title: 'Forms/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the field',
    },
    hint: {
      control: 'text',
      description: 'An optional hint message',
    },
    error: {
      control: 'text',
      description: 'An optional error message',
    },
  },
} satisfies Meta<typeof FormField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <FormField label="Email" htmlFor="email" className="w-72">
      <Input id="email" type="email" placeholder="you@example.com" />
    </FormField>
  ),
}

export const WithHint: Story = {
  render: () => (
    <FormField
      label="Email"
      htmlFor="email-hint"
      hint="We'll never share your email with anyone else."
      className="w-72"
    >
      <Input
        id="email-hint"
        type="email"
        placeholder="you@example.com"
        aria-describedby="email-hint-message"
      />
    </FormField>
  ),
}

export const WithError: Story = {
  render: () => (
    <FormField
      label="Email"
      htmlFor="email-error"
      error="Please enter a valid email address"
      className="w-72"
    >
      <Input
        id="email-error"
        type="email"
        placeholder="you@example.com"
        variant="error"
        aria-invalid="true"
        aria-describedby="email-error-message"
      />
    </FormField>
  ),
}

export const WithTextarea: Story = {
  render: () => (
    <FormField
      label="Message"
      htmlFor="message"
      hint="Maximum 500 characters"
      className="w-80"
    >
      <Textarea
        id="message"
        placeholder="Type your message here..."
        aria-describedby="message-message"
      />
    </FormField>
  ),
}

export const WithSelect: Story = {
  render: () => (
    <FormField label="Country" htmlFor="country" className="w-72">
      <Select>
        <SelectTrigger id="country">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
          <SelectItem value="au">Australia</SelectItem>
        </SelectContent>
      </Select>
    </FormField>
  ),
}

export const CompleteForm: Story = {
  render: () => (
    <form className="flex w-80 flex-col gap-4">
      <FormField label="Full Name" htmlFor="name">
        <Input id="name" placeholder="John Doe" />
      </FormField>
      <FormField
        label="Email"
        htmlFor="form-email"
        hint="We'll never share your email."
      >
        <Input
          id="form-email"
          type="email"
          placeholder="you@example.com"
          aria-describedby="form-email-message"
        />
      </FormField>
      <FormField
        label="Password"
        htmlFor="form-password"
        error="Password must be at least 8 characters"
      >
        <Input
          id="form-password"
          type="password"
          placeholder="Enter password"
          variant="error"
          aria-invalid="true"
          aria-describedby="form-password-message"
        />
      </FormField>
      <FormField label="Country" htmlFor="form-country">
        <Select>
          <SelectTrigger id="form-country">
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
          </SelectContent>
        </Select>
      </FormField>
      <FormField label="Bio" htmlFor="bio" hint="Tell us about yourself">
        <Textarea
          id="bio"
          placeholder="I'm a software developer..."
          aria-describedby="bio-message"
        />
      </FormField>
      <div className="mt-2 flex items-center gap-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">I agree to the terms and conditions</Label>
      </div>
    </form>
  ),
}
