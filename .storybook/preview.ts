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
      default: 'eg-main',
      values: [
        { name: 'eg-main', value: '#FAFAFA' },
        { name: 'eg-alt', value: '#F5F5F5' },
        { name: 'eg-card', value: '#F9F9F9' },
        { name: 'eg-contrast', value: '#EFEFEF' },
        { name: 'eggshell', value: '#FFFDE8' },
      ],
    },
  },
}

export default preview
