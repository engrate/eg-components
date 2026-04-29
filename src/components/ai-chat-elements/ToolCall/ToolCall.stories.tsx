import type { Meta, StoryObj } from '@storybook/react'
import { CloudSun, Database, UserCircle } from 'lucide-react'
import * as React from 'react'

import { ToolCall, type ToolCallLabel, type ToolCallState } from './ToolCall'

const meta = {
  title: 'AI Chat Elements/ToolCall',
  component: ToolCall,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: [
        'input-streaming',
        'input-available',
        'approval-requested',
        'approval-responded',
        'output-available',
        'output-error',
        'output-denied',
      ] satisfies ToolCallState[],
    },
    smartOutput: { control: 'boolean' },
    showDetails: { control: 'boolean' },
  },
} satisfies Meta<typeof ToolCall>

export default meta
type Story = StoryObj<typeof meta>

const sampleInput = { include_email: true }
const sampleOutput = {
  email: 'rille@engrate.io',
  display_name: 'Richard Eklund',
  organization: 'Engrate',
}

const tariffRows = [
  { tariff: 'se-vattenfall-energy', component: 'energy_tax', amount_sek: 42.8 },
  { tariff: 'se-vattenfall-energy', component: 'transfer', amount_sek: 27.5 },
  {
    tariff: 'se-vattenfall-energy',
    component: 'subscription',
    amount_sek: 89.0,
  },
]

const labelMap: Record<string, ToolCallLabel> = {
  me_user_info: {
    running: 'Looking up your profile…',
    done: 'Looked up your profile',
    icon: UserCircle,
  },
  cost_of_energy: {
    running: 'Calculating your tariff…',
    done: 'Calculated your tariff',
    icon: Database,
  },
  weather_forecast: {
    running: 'Checking the forecast…',
    done: 'Checked the forecast',
    icon: CloudSun,
  },
}

export const Pending: Story = {
  args: {
    toolName: 'me_user_info',
    state: 'input-available',
    input: sampleInput,
  },
}

export const Used: Story = {
  args: {
    toolName: 'me_user_info',
    state: 'output-available',
    input: sampleInput,
    output: sampleOutput,
  },
}

export const Failed: Story = {
  args: {
    toolName: 'me_user_info',
    state: 'output-error',
    input: sampleInput,
    errorText: 'Authentication failed: bearer token expired.',
  },
}

export const Denied: Story = {
  args: {
    toolName: 'send_alert',
    state: 'output-denied',
    input: { recipient: 'rille@engrate.io' },
  },
}

export const NoDetails: Story = {
  args: {
    toolName: 'me_user_info',
    state: 'output-available',
    showDetails: false,
  },
}

export const FriendlyLabels: Story = {
  args: {
    toolName: 'me_user_info',
    state: 'output-available',
    input: sampleInput,
    output: sampleOutput,
    labelMap,
  },
}

export const SmartOutputTable: Story = {
  args: {
    toolName: 'cost_of_energy',
    state: 'output-available',
    input: { metering_point: 'SE-1234567890' },
    output: tariffRows,
    labelMap,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Array of objects with consistent keys auto-renders as a real Engrate Table inside the expanded panel.',
      },
    },
  },
}

export const SmartOutputMarkdown: Story = {
  args: {
    toolName: 'weather_forecast',
    state: 'output-available',
    input: { city: 'Stockholm' },
    output: `## Stockholm forecast

| Day | High | Low |
| --- | --- | --- |
| Tue | 4°C | -2°C |
| Wed | 6°C | 0°C |

Light snow expected **Wednesday morning**.`,
    labelMap,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Markdown-shaped strings (headings, tables, fences) auto-render via MarkdownText.',
      },
    },
  },
}

export const SmartOutputDisabled: Story = {
  args: {
    toolName: 'cost_of_energy',
    state: 'output-available',
    input: { metering_point: 'SE-1234567890' },
    output: tariffRows,
    smartOutput: false,
    labelMap,
  },
  parameters: {
    docs: {
      description: {
        story:
          'With `smartOutput={false}`, output always renders as raw JSON regardless of shape.',
      },
    },
  },
}

const ApprovalDemo: React.FC = () => {
  const [state, setState] = React.useState<ToolCallState>('approval-requested')
  return (
    <div className="space-y-2">
      <ToolCall
        toolName="send_alert"
        state={state}
        input={{
          recipient: 'rille@engrate.io',
          body: 'Tariff change detected.',
        }}
        output={
          state === 'approval-responded'
            ? { dispatched_at: '2026-04-28T12:34:56Z' }
            : undefined
        }
        labelMap={{
          send_alert: {
            running: 'Sending alert…',
            done: 'Sent alert',
          },
        }}
        onApprove={() => setState('approval-responded')}
        onDeny={() => setState('output-denied')}
      />
      <button
        type="button"
        onClick={() => setState('approval-requested')}
        className="text-tertiary hover:text-primary text-label-sm cursor-pointer underline"
      >
        Reset
      </button>
    </div>
  )
}

export const ApprovalUI: Story = {
  args: {
    toolName: 'send_alert',
    state: 'approval-requested',
  },
  render: () => <ApprovalDemo />,
  parameters: {
    docs: {
      description: {
        story:
          'Approve/Deny buttons render inline. Wire `onApprove`/`onDeny` to dispatch state transitions in your chat orchestrator.',
      },
    },
  },
}

const STATES: ToolCallState[] = [
  'input-streaming',
  'input-available',
  'output-available',
]

const LiveTransitionDemo: React.FC = () => {
  const [stateIndex, setStateIndex] = React.useState(0)
  const state = STATES[stateIndex] ?? 'output-available'
  return (
    <div className="space-y-3">
      <ToolCall
        toolName="me_user_info"
        state={state}
        input={state !== 'input-streaming' ? sampleInput : undefined}
        output={state === 'output-available' ? sampleOutput : undefined}
        labelMap={labelMap}
      />
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() =>
            setStateIndex((i) => Math.min(i + 1, STATES.length - 1))
          }
          className="bg-sunflower text-primary hover:bg-sunflower-hover text-small rounded-pill px-5 py-1 transition-colors"
        >
          Advance state
        </button>
        <button
          type="button"
          onClick={() => setStateIndex(0)}
          className="text-tertiary hover:text-primary text-label-sm cursor-pointer underline"
        >
          Reset
        </button>
        <span className="text-label-sm text-tertiary font-mono">
          state={state}
        </span>
      </div>
    </div>
  )
}

export const LiveTransition: Story = {
  args: { toolName: 'me_user_info', state: 'input-streaming' },
  render: () => <LiveTransitionDemo />,
  parameters: {
    docs: {
      description: {
        story:
          'Walk a single ToolCall through pending → done. Watch the pulsing sunflower dot morph into the check icon on completion, and the framed pill appear.',
      },
    },
  },
}

export const Lifecycle: Story = {
  args: { toolName: 'me_user_info', state: 'output-available' },
  render: () => (
    <div className="flex max-w-xl flex-col gap-1">
      <ToolCall
        toolName="me_user_info"
        state="input-streaming"
        labelMap={labelMap}
      />
      <ToolCall
        toolName="me_user_info"
        state="input-available"
        input={sampleInput}
        labelMap={labelMap}
      />
      <ToolCall
        toolName="me_user_info"
        state="output-available"
        input={sampleInput}
        output={sampleOutput}
        labelMap={labelMap}
      />
      <ToolCall
        toolName="me_user_info"
        state="output-error"
        input={sampleInput}
        errorText="MCP server returned 401."
        labelMap={labelMap}
      />
    </div>
  ),
}
