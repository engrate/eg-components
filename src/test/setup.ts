import '@testing-library/jest-dom/vitest'
import 'vitest-axe/extend-expect'
import { vi } from 'vitest'

// Mock ResizeObserver for Recharts ResponsiveContainer
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserverMock

// Mock recharts ResponsiveContainer to avoid dimension issues in tests
vi.mock('recharts', async () => {
  const actual = await vi.importActual<typeof import('recharts')>('recharts')
  return {
    ...actual,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) =>
      children,
  }
})
