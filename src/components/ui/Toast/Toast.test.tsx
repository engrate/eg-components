import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'

import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './Toast'

const renderToast = (ui: React.ReactNode) => {
  return render(
    <ToastProvider>
      {ui}
      <ToastViewport />
    </ToastProvider>
  )
}

describe('Toast', () => {
  it('renders with title and description', () => {
    renderToast(
      <Toast open>
        <ToastTitle>Test Title</ToastTitle>
        <ToastDescription>Test Description</ToastDescription>
      </Toast>
    )
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })

  it('applies default variant styles', () => {
    renderToast(
      <Toast open data-testid="toast">
        <ToastTitle>Default Toast</ToastTitle>
      </Toast>
    )
    const toast = screen.getByTestId('toast')
    expect(toast).toHaveClass('bg-main')
    expect(toast).toHaveClass('border-border')
  })

  it('applies success variant styles', () => {
    renderToast(
      <Toast open variant="success" data-testid="toast">
        <ToastTitle>Success Toast</ToastTitle>
      </Toast>
    )
    const toast = screen.getByTestId('toast')
    expect(toast).toHaveClass('bg-eggshell')
  })

  it('applies error variant styles', () => {
    renderToast(
      <Toast open variant="error" data-testid="toast">
        <ToastTitle>Error Toast</ToastTitle>
      </Toast>
    )
    const toast = screen.getByTestId('toast')
    expect(toast).toHaveClass('border-error/30')
  })

  it('applies warning variant styles', () => {
    renderToast(
      <Toast open variant="warning" data-testid="toast">
        <ToastTitle>Warning Toast</ToastTitle>
      </Toast>
    )
    const toast = screen.getByTestId('toast')
    expect(toast).toHaveClass('bg-vanilla')
  })

  it('applies info variant styles', () => {
    renderToast(
      <Toast open variant="info" data-testid="toast">
        <ToastTitle>Info Toast</ToastTitle>
      </Toast>
    )
    const toast = screen.getByTestId('toast')
    expect(toast).toHaveClass('border-electric-blue/30')
  })

  it('merges custom className', () => {
    renderToast(
      <Toast open className="custom-class" data-testid="toast">
        <ToastTitle>Custom Toast</ToastTitle>
      </Toast>
    )
    expect(screen.getByTestId('toast')).toHaveClass('custom-class')
  })

  it('renders ToastAction', () => {
    renderToast(
      <Toast open>
        <ToastTitle>Action Toast</ToastTitle>
        <ToastAction altText="Undo action">Undo</ToastAction>
      </Toast>
    )

    expect(screen.getByRole('button', { name: 'Undo' })).toBeInTheDocument()
  })

  it('renders ToastClose button', () => {
    renderToast(
      <Toast open>
        <ToastTitle>Closeable Toast</ToastTitle>
        <ToastClose />
      </Toast>
    )

    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument()
  })

  it('has no accessibility violations for default toast', async () => {
    const { container } = renderToast(
      <Toast open>
        <ToastTitle>Accessible Toast</ToastTitle>
        <ToastDescription>
          This is an accessible toast message.
        </ToastDescription>
      </Toast>
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no accessibility violations for all variants', async () => {
    const { container } = renderToast(
      <>
        <Toast open variant="default">
          <ToastTitle>Default</ToastTitle>
          <ToastDescription>Default toast description</ToastDescription>
        </Toast>
        <Toast open variant="success">
          <ToastTitle>Success</ToastTitle>
          <ToastDescription>Success toast description</ToastDescription>
        </Toast>
        <Toast open variant="error">
          <ToastTitle>Error</ToastTitle>
          <ToastDescription>Error toast description</ToastDescription>
        </Toast>
        <Toast open variant="warning">
          <ToastTitle>Warning</ToastTitle>
          <ToastDescription>Warning toast description</ToastDescription>
        </Toast>
        <Toast open variant="info">
          <ToastTitle>Info</ToastTitle>
          <ToastDescription>Info toast description</ToastDescription>
        </Toast>
      </>
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no accessibility violations with action button', async () => {
    const { container } = renderToast(
      <Toast open>
        <ToastTitle>Toast with Action</ToastTitle>
        <ToastDescription>This toast has an action button.</ToastDescription>
        <ToastAction altText="Perform action">Take Action</ToastAction>
      </Toast>
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no accessibility violations with close button', async () => {
    const { container } = renderToast(
      <Toast open>
        <ToastTitle>Closeable Toast</ToastTitle>
        <ToastDescription>This toast can be closed.</ToastDescription>
        <ToastClose />
      </Toast>
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('ToastViewport', () => {
  it('renders with custom className', () => {
    render(
      <ToastProvider>
        <ToastViewport className="custom-viewport" data-testid="viewport" />
      </ToastProvider>
    )
    expect(screen.getByTestId('viewport')).toHaveClass('custom-viewport')
  })
})
