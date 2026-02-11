'use client'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import * as React from 'react'

import { EngrateLogo, type EngrateLogoProps } from '@/components/ui/EngrateLogo'
import { Text } from '@/components/ui/Text'
import { cn } from '@/lib/utils'

/* -------------------------------------------------------------------------------------------------
 * SidebarContext
 * -----------------------------------------------------------------------------------------------*/

interface SidebarContextValue {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
  collapsible: boolean
}

const SidebarContext = React.createContext<SidebarContextValue | null>(null)

function useSidebarContext() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error('Sidebar components must be used within a Sidebar')
  }
  return context
}

/* -------------------------------------------------------------------------------------------------
 * Sidebar (Root)
 * -----------------------------------------------------------------------------------------------*/

const sidebarVariants = cva(
  [
    'border-border bg-alt flex h-dvh flex-col border-r transition-[width] duration-300 ease-in-out',
    'focus-visible:ring-sunflower focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
  ],
  {
    variants: {
      variant: {
        default: '',
        bordered: 'border-border border',
      },
      width: {
        sm: '',
        default: '',
        lg: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      width: 'default',
    },
  }
)

const widthMap = {
  sm: { expanded: 'w-52', collapsed: 'w-14' },
  default: { expanded: 'w-64', collapsed: 'w-16' },
  lg: { expanded: 'w-72', collapsed: 'w-20' },
}

interface SidebarProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sidebarVariants> {
  /** Whether the sidebar is in collapsed state */
  defaultCollapsed?: boolean
  /** Controlled collapsed state */
  collapsed?: boolean
  /** Callback when collapsed state changes */
  onCollapsedChange?: (collapsed: boolean) => void
  /** Whether the sidebar is collapsible */
  collapsible?: boolean
  /** Automatically collapse on mobile screens (default: true) */
  autoCollapseMobile?: boolean
}

/**
 * Sidebar component for application navigation.
 * Supports collapsible behavior, navigation items with icons, and sections.
 *
 * @example
 * ```tsx
 * <Sidebar>
 *   <SidebarHeader>
 *     <SidebarLogo />
 *   </SidebarHeader>
 *   <SidebarContent>
 *     <SidebarGroup>
 *       <SidebarGroupLabel>Navigation</SidebarGroupLabel>
 *       <SidebarItem icon={<HomeIcon />} active>Home</SidebarItem>
 *       <SidebarItem icon={<SettingsIcon />}>Settings</SidebarItem>
 *     </SidebarGroup>
 *   </SidebarContent>
 *   <SidebarFooter>
 *     <SidebarTrigger />
 *   </SidebarFooter>
 * </Sidebar>
 * ```
 */
const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  (
    {
      className,
      variant,
      width = 'default',
      defaultCollapsed = false,
      collapsed: controlledCollapsed,
      onCollapsedChange,
      collapsible = true,
      autoCollapseMobile = true,
      children,
      ...props
    },
    ref
  ) => {
    const [internalCollapsed, setInternalCollapsed] =
      React.useState(defaultCollapsed)

    const isControlled = controlledCollapsed !== undefined
    const collapsed = isControlled ? controlledCollapsed : internalCollapsed

    const setCollapsed = React.useCallback(
      (value: boolean) => {
        if (!collapsible) return
        if (!isControlled) {
          setInternalCollapsed(value)
        }
        onCollapsedChange?.(value)
      },
      [isControlled, onCollapsedChange, collapsible]
    )

    // Auto-collapse on mobile screens, auto-expand on larger screens
    React.useEffect(() => {
      if (!autoCollapseMobile || !collapsible) return
      if (typeof window === 'undefined' || !window.matchMedia) return

      const mediaQuery = window.matchMedia('(max-width: 768px)')

      const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
        setCollapsed(e.matches)
      }

      // Check on mount
      handleChange(mediaQuery)

      // Listen for changes
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }, [autoCollapseMobile, collapsible, setCollapsed])

    const contextValue = React.useMemo(
      () => ({ collapsed, setCollapsed, collapsible }),
      [collapsed, setCollapsed, collapsible]
    )

    const widthClasses = widthMap[width || 'default']

    return (
      <SidebarContext.Provider value={contextValue}>
        <aside
          ref={ref}
          className={cn(
            sidebarVariants({ variant }),
            collapsed ? widthClasses.collapsed : widthClasses.expanded,
            className
          )}
          data-collapsed={collapsed}
          {...props}
        >
          {children}
        </aside>
      </SidebarContext.Provider>
    )
  }
)
Sidebar.displayName = 'Sidebar'

/* -------------------------------------------------------------------------------------------------
 * SidebarHeader
 * -----------------------------------------------------------------------------------------------*/

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarHeader = React.forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center gap-4 px-6 pt-6 pb-4', className)}
      {...props}
    />
  )
)
SidebarHeader.displayName = 'SidebarHeader'

/* -------------------------------------------------------------------------------------------------
 * SidebarContent
 * -----------------------------------------------------------------------------------------------*/

interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarContent = React.forwardRef<HTMLDivElement, SidebarContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex-1 overflow-y-auto px-5 py-4', className)}
      {...props}
    />
  )
)
SidebarContent.displayName = 'SidebarContent'

/* -------------------------------------------------------------------------------------------------
 * SidebarFooter
 * -----------------------------------------------------------------------------------------------*/

interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('border-border mt-auto border-t px-5 py-5', className)}
      {...props}
    />
  )
)
SidebarFooter.displayName = 'SidebarFooter'

/* -------------------------------------------------------------------------------------------------
 * SidebarGroup
 * -----------------------------------------------------------------------------------------------*/

interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarGroup = React.forwardRef<HTMLDivElement, SidebarGroupProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('space-y-2 py-4', className)} {...props} />
  )
)
SidebarGroup.displayName = 'SidebarGroup'

/* -------------------------------------------------------------------------------------------------
 * SidebarGroupLabel
 * -----------------------------------------------------------------------------------------------*/

interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  SidebarGroupLabelProps
>(({ className, ...props }, ref) => {
  const { collapsed } = useSidebarContext()

  if (collapsed) {
    return null
  }

  return (
    <Text
      variant="label"
      ref={ref}
      className={cn('px-4 py-3 uppercase', className)}
      {...props}
    />
  )
})
SidebarGroupLabel.displayName = 'SidebarGroupLabel'

/* -------------------------------------------------------------------------------------------------
 * SidebarItem
 * -----------------------------------------------------------------------------------------------*/

const sidebarItemVariants = cva(
  [
    'group text-small relative flex w-full cursor-pointer items-center gap-3 rounded-md px-4 py-3 font-sans font-normal',
    'text-secondary hover:text-primary',
    'focus-visible:ring-sunflower focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
  ],
  {
    variants: {
      active: {
        true: 'text-primary',
        false: '',
      },
    },
    defaultVariants: {
      active: false,
    },
  }
)

interface SidebarItemProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sidebarItemVariants> {
  /** Icon to display before the label */
  icon?: React.ReactNode
  /** Render as a child component (for use with Next.js Link, etc.) */
  asChild?: boolean
}

const SidebarItem = React.forwardRef<HTMLButtonElement, SidebarItemProps>(
  ({ className, active, icon, asChild = false, children, ...props }, ref) => {
    const { collapsed } = useSidebarContext()
    const Comp = asChild ? Slot : 'button'

    const activeIndicator = (
      <span
        className={cn(
          'bg-sunflower absolute rounded-full transition-opacity',
          collapsed
            ? 'right-1 bottom-0 left-1 h-0.75'
            : 'top-1 bottom-1 left-0 w-0.75',
          active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        )}
        aria-hidden="true"
      />
    )

    const content = (
      <>
        {activeIndicator}
        {icon && (
          <span className="flex h-5 w-5 shrink-0 items-center justify-center">
            {icon}
          </span>
        )}
        {!collapsed && (
          <Text variant="body-sm" className="truncate">
            {children}
          </Text>
        )}
      </>
    )

    if (asChild) {
      return (
        <Slot
          ref={ref as React.Ref<HTMLElement>}
          className={cn(
            sidebarItemVariants({ active }),
            collapsed && 'justify-center px-2',
            className
          )}
          {...props}
        >
          {React.isValidElement(children)
            ? React.cloneElement(
                children as React.ReactElement<{ children?: React.ReactNode }>,
                {
                  children: (
                    <>
                      {activeIndicator}
                      {icon && (
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                          {icon}
                        </span>
                      )}
                      {!collapsed && (
                        <span className="truncate">
                          {
                            (
                              children as React.ReactElement<{
                                children?: React.ReactNode
                              }>
                            ).props.children
                          }
                        </span>
                      )}
                    </>
                  ),
                }
              )
            : children}
        </Slot>
      )
    }

    return (
      <Comp
        ref={ref}
        className={cn(
          sidebarItemVariants({ active }),
          collapsed && 'justify-center px-2',
          className
        )}
        {...props}
      >
        {content}
      </Comp>
    )
  }
)
SidebarItem.displayName = 'SidebarItem'

/* -------------------------------------------------------------------------------------------------
 * SidebarTrigger
 * -----------------------------------------------------------------------------------------------*/

interface SidebarTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const SidebarTrigger = React.forwardRef<HTMLButtonElement, SidebarTriggerProps>(
  ({ className, ...props }, ref) => {
    const { collapsed, setCollapsed, collapsible } = useSidebarContext()

    if (!collapsible) {
      return null
    }

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          'text-small flex w-full items-center rounded-md p-2 font-sans font-normal',
          'text-secondary hover:bg-vanilla hover:text-primary',
          'focus-visible:ring-sunflower focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
          className
        )}
        onClick={() => setCollapsed(!collapsed)}
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        {...props}
      >
        {collapsed ? (
          <ChevronRight className="h-5 w-5" />
        ) : (
          <ChevronLeft className="h-5 w-5" />
        )}
      </button>
    )
  }
)
SidebarTrigger.displayName = 'SidebarTrigger'

/* -------------------------------------------------------------------------------------------------
 * SidebarSeparator
 * -----------------------------------------------------------------------------------------------*/

interface SidebarSeparatorProps extends React.HTMLAttributes<HTMLHRElement> {}

const SidebarSeparator = React.forwardRef<HTMLHRElement, SidebarSeparatorProps>(
  ({ className, ...props }, ref) => (
    <hr
      ref={ref}
      className={cn('border-border my-5 border-t', className)}
      {...props}
    />
  )
)
SidebarSeparator.displayName = 'SidebarSeparator'

/* -------------------------------------------------------------------------------------------------
 * SidebarLogo
 * -----------------------------------------------------------------------------------------------*/

interface SidebarLogoProps extends Omit<EngrateLogoProps, 'compact'> {}

/**
 * SidebarLogo component that automatically syncs the EngrateLogo compact state
 * with the Sidebar's collapsed state. Shows the full logo when expanded and
 * the compact icon-only version when collapsed.
 *
 * Must be used within a Sidebar component.
 *
 * @example
 * ```tsx
 * <Sidebar>
 *   <SidebarHeader>
 *     <SidebarLogo />
 *   </SidebarHeader>
 *   ...
 * </Sidebar>
 * ```
 */
function SidebarLogo({ ...props }: SidebarLogoProps) {
  const { collapsed } = useSidebarContext()
  if (collapsed) return null
  return <EngrateLogo {...props} />
}
SidebarLogo.displayName = 'SidebarLogo'

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarItem,
  SidebarTrigger,
  SidebarSeparator,
  SidebarLogo,
  sidebarVariants,
  sidebarItemVariants,
  useSidebarContext,
}

export type {
  SidebarProps,
  SidebarHeaderProps,
  SidebarContentProps,
  SidebarFooterProps,
  SidebarGroupProps,
  SidebarGroupLabelProps,
  SidebarItemProps,
  SidebarTriggerProps,
  SidebarSeparatorProps,
  SidebarLogoProps,
}
