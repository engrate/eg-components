import type { Preview } from '@storybook/react'
import '../src/styles/index.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        'eg-main': { name: 'Main', value: '#FAFAFA' },
        'eg-alt': { name: 'Alt', value: '#F5F5F5' },
        'eg-card': { name: 'Card', value: '#F9F9F9' },
        'eg-contrast': { name: 'Contrast', value: '#EFEFEF' },
        eggshell: { name: 'Eggshell', value: '#FFFDE8' },
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: 'eg-main' },
  },
}

export default preview
