import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

// Context for managing tab state
interface TabsContextValue {
  activeTab: string
  setActiveTab: (value: string) => void
}

const TabsContext = React.createContext<TabsContextValue | null>(null)

function useTabsContext() {
  const context = React.useContext(TabsContext)
  if (!context) {
    throw new Error('Tab components must be used within a Tabs component')
  }
  return context
}

// Tabs root component
interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The default active tab value */
  defaultValue?: string
  /** Controlled active tab value */
  value?: string
  /** Callback when active tab changes */
  onValueChange?: (value: string) => void
}

/**
 * Root container for the tabs component.
 * Manages the active tab state and provides context to child components.
 *
 * @example
 * ```tsx
 * <Tabs defaultValue="tab1">
 *   <TabList>
 *     <TabTrigger value="tab1">Tab 1</TabTrigger>
 *     <TabTrigger value="tab2">Tab 2</TabTrigger>
 *   </TabList>
 *   <TabContent value="tab1">Content 1</TabContent>
 *   <TabContent value="tab2">Content 2</TabContent>
 * </Tabs>
 * ```
 */
const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    { className, defaultValue = '', value, onValueChange, children, ...props },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue)

    const activeTab = value !== undefined ? value : internalValue
    const setActiveTab = React.useCallback(
      (newValue: string) => {
        if (value === undefined) {
          setInternalValue(newValue)
        }
        onValueChange?.(newValue)
      },
      [value, onValueChange]
    )

    return (
      <TabsContext.Provider value={{ activeTab, setActiveTab }}>
        <div ref={ref} className={cn('w-full', className)} {...props}>
          {children}
        </div>
      </TabsContext.Provider>
    )
  }
)
Tabs.displayName = 'Tabs'

// TabList variants
const tabListVariants = cva(
  'text-body inline-flex items-center font-sans transition-colors',
  {
    variants: {
      variant: {
        default: 'border-border gap-1 border-b',
        pills: 'rounded-pill bg-alt gap-2 p-1',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface TabListProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabListVariants> {}

/**
 * Container for tab triggers. Renders the row of clickable tabs.
 */
const TabList = React.forwardRef<HTMLDivElement, TabListProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="tablist"
        className={cn(tabListVariants({ variant, className }))}
        {...props}
      />
    )
  }
)
TabList.displayName = 'TabList'

// TabTrigger variants
const tabTriggerVariants = cva(
  'focus-visible:ring-sunflower inline-flex items-center justify-center font-sans font-normal whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'text-secondary hover:text-primary data-[state=active]:border-sunflower data-[state=active]:text-primary border-b-2 border-transparent px-4 py-2',
        pills:
          'rounded-pill text-secondary hover:text-primary data-[state=active]:bg-card data-[state=active]:text-primary px-4 py-1.5 data-[state=active]:shadow-sm',
      },
      size: {
        sm: 'text-small',
        default: 'text-body',
        lg: 'text-body font-medium',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

interface TabTriggerProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof tabTriggerVariants> {
  /** Unique value identifying this tab */
  value: string
}

/**
 * Individual tab trigger button. Clicking activates the associated TabContent.
 */
const TabTrigger = React.forwardRef<HTMLButtonElement, TabTriggerProps>(
  ({ className, variant, size, value, ...props }, ref) => {
    const { activeTab, setActiveTab } = useTabsContext()
    const isActive = activeTab === value

    return (
      <button
        ref={ref}
        role="tab"
        type="button"
        aria-selected={isActive}
        data-state={isActive ? 'active' : 'inactive'}
        onClick={() => setActiveTab(value)}
        className={cn(tabTriggerVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
TabTrigger.displayName = 'TabTrigger'

// TabContent variants
const tabContentVariants = cva('font-sans', {
  variants: {
    size: {
      sm: 'text-small mt-3',
      default: 'text-body mt-4',
      lg: 'text-body mt-6',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

interface TabContentProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabContentVariants> {
  /** Value matching the TabTrigger this content belongs to */
  value: string
}

/**
 * Content panel for a tab. Only visible when the matching tab is active.
 */
const TabContent = React.forwardRef<HTMLDivElement, TabContentProps>(
  ({ className, size, value, ...props }, ref) => {
    const { activeTab } = useTabsContext()
    const isActive = activeTab === value

    if (!isActive) {
      return null
    }

    return (
      <div
        ref={ref}
        role="tabpanel"
        data-state={isActive ? 'active' : 'inactive'}
        className={cn(tabContentVariants({ size, className }))}
        {...props}
      />
    )
  }
)
TabContent.displayName = 'TabContent'

export {
  Tabs,
  TabList,
  tabListVariants,
  TabTrigger,
  tabTriggerVariants,
  TabContent,
  tabContentVariants,
}
export type { TabsProps, TabListProps, TabTriggerProps, TabContentProps }
