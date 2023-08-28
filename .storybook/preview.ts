import type { Preview } from '@storybook/vue3'
import '../src/styles/main.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    options: {
      storySort: {
        order: ['Docs', 'Setup', 'Components']
      }
    }
  }
}

export default preview
