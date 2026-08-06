'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

type DescriptionListOrientation = 'stacked' | 'inline'

const descriptionListVariants = cva('flex flex-col font-sans', {
  variants: {
    orientation: {
      stacked: '',
      inline: '',
    },
    divided: {
      true: 'divide-border gap-0 divide-y',
      false: '',
    },
    size: {
      default: '',
      compact: '',
    },
  },
  compoundVariants: [
    {
      orientation: 'stacked',
      divided: false,
      size: 'default',
      className: 'gap-4',
    },
    {
      orientation: 'stacked',
      divided: false,
      size: 'compact',
      className: 'gap-2',
    },
    {
      orientation: 'inline',
      divided: false,
      size: 'default',
      className: 'gap-3',
    },
    {
      orientation: 'inline',
      divided: false,
      size: 'compact',
      className: 'gap-1.5',
    },
  ],
  defaultVariants: {
    orientation: 'stacked',
    divided: false,
    size: 'default',
  },
})

const descriptionListItemVariants = cva('', {
  variants: {
    orientation: {
      stacked: 'flex flex-col',
      inline:
        'flex flex-col sm:grid sm:grid-cols-[minmax(140px,1fr)_2fr] sm:items-baseline sm:gap-x-4 sm:gap-y-0',
    },
    divided: {
      true: 'first:pt-0 last:pb-0',
      false: '',
    },
    size: {
      default: 'gap-1',
      compact: 'gap-0.5',
    },
  },
  compoundVariants: [
    { orientation: 'inline', size: 'compact', className: 'sm:gap-x-3' },
    { divided: true, size: 'default', className: 'py-4' },
    { divided: true, size: 'compact', className: 'py-2' },
  ],
  defaultVariants: {
    orientation: 'stacked',
    divided: false,
    size: 'default',
  },
})

type DescriptionListSize = 'default' | 'compact'

interface DescriptionListContextValue {
  orientation: DescriptionListOrientation
  divided: boolean
  size: DescriptionListSize
}

const DescriptionListContext = React.createContext<DescriptionListContextValue>(
  {
    orientation: 'stacked',
    divided: false,
    size: 'default',
  }
)

/** A single label/value pair for the declarative `items` API. */
interface DescriptionListItemData {
  /** React key for the item; falls back to the array index. */
  key?: React.Key
  /** The term / label (rendered in a `<dt>`). */
  label: React.ReactNode
  /** The description / value (rendered in a `<dd>`). */
  value: React.ReactNode
}

interface DescriptionListProps
  extends
    React.HTMLAttributes<HTMLDListElement>,
    VariantProps<typeof descriptionListVariants> {
  /**
   * Render items declaratively instead of composing `DescriptionListItem` /
   * `DescriptionListTerm` / `DescriptionListDetails` as children.
   */
  items?: DescriptionListItemData[]
}

/**
 * DescriptionList renders a list of label/value pairs (e.g. "Name: Jane Doe")
 * using semantic `<dl>` / `<dt>` / `<dd>` elements.
 *
 * @example
 * ```tsx
 * <DescriptionList
 *   items={[
 *     { label: 'Name', value: 'Jane Doe' },
 *     { label: 'Phone number', value: '+1 (555) 123-4567' },
 *   ]}
 * />
 *
 * <DescriptionList orientation="inline" divided>
 *   <DescriptionListItem>
 *     <DescriptionListTerm>Name</DescriptionListTerm>
 *     <DescriptionListDetails>Jane Doe</DescriptionListDetails>
 *   </DescriptionListItem>
 * </DescriptionList>
 *
 * <DescriptionList size="compact" items={items} />
 * ```
 */
const DescriptionList = React.forwardRef<
  HTMLDListElement,
  DescriptionListProps
>(
  (
    {
      className,
      orientation = 'stacked',
      divided = false,
      size = 'default',
      items,
      children,
      ...props
    },
    ref
  ) => {
    const resolvedOrientation = orientation ?? 'stacked'
    const resolvedDivided = divided ?? false
    const resolvedSize = size ?? 'default'

    return (
      <DescriptionListContext.Provider
        value={{
          orientation: resolvedOrientation,
          divided: resolvedDivided,
          size: resolvedSize,
        }}
      >
        <dl
          ref={ref}
          className={cn(
            descriptionListVariants({
              orientation: resolvedOrientation,
              divided: resolvedDivided,
              size: resolvedSize,
            }),
            className
          )}
          {...props}
        >
          {items?.map((item, index) => (
            <DescriptionListItem key={item.key ?? index}>
              <DescriptionListTerm>{item.label}</DescriptionListTerm>
              <DescriptionListDetails>{item.value}</DescriptionListDetails>
            </DescriptionListItem>
          ))}
          {children}
        </dl>
      </DescriptionListContext.Provider>
    )
  }
)
DescriptionList.displayName = 'DescriptionList'

interface DescriptionListItemProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Wraps a single `DescriptionListTerm` / `DescriptionListDetails` pair.
 * Layout (stacked vs. inline) is inherited from the parent `DescriptionList`.
 */
const DescriptionListItem = React.forwardRef<
  HTMLDivElement,
  DescriptionListItemProps
>(({ className, ...props }, ref) => {
  const { orientation, divided, size } = React.useContext(
    DescriptionListContext
  )
  return (
    <div
      ref={ref}
      className={cn(
        descriptionListItemVariants({ orientation, divided, size }),
        className
      )}
      {...props}
    />
  )
})
DescriptionListItem.displayName = 'DescriptionListItem'

interface DescriptionListTermProps extends React.HTMLAttributes<HTMLElement> {}

/** The label half of a pair, rendered as a `<dt>`. */
const DescriptionListTerm = React.forwardRef<
  HTMLElement,
  DescriptionListTermProps
>(({ className, ...props }, ref) => (
  <dt
    ref={ref}
    className={cn('text-small text-tertiary font-sans', className)}
    {...props}
  />
))
DescriptionListTerm.displayName = 'DescriptionListTerm'

interface DescriptionListDetailsProps extends React.HTMLAttributes<HTMLElement> {}

/** The value half of a pair, rendered as a `<dd>`. */
const DescriptionListDetails = React.forwardRef<
  HTMLElement,
  DescriptionListDetailsProps
>(({ className, ...props }, ref) => (
  <dd
    ref={ref}
    className={cn(
      'text-body-sm text-primary m-0 font-sans wrap-break-word',
      className
    )}
    {...props}
  />
))
DescriptionListDetails.displayName = 'DescriptionListDetails'

export {
  DescriptionList,
  DescriptionListItem,
  DescriptionListTerm,
  DescriptionListDetails,
  descriptionListVariants,
  descriptionListItemVariants,
}
export type {
  DescriptionListProps,
  DescriptionListItemProps,
  DescriptionListTermProps,
  DescriptionListDetailsProps,
  DescriptionListItemData,
}
