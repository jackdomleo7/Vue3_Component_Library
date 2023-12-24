import { type Preview } from '@storybook/vue3';
import '../src/styles/main.scss';

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
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
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Choose a built-in theme',
      defaultValue: 'light',
      toolbar: {
        dynamicTitle: true,
        items: [
          { value: 'light', title: 'Default', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' }
        ]
      }
    }
  },
  decorators: [
    (story, context) => {
      return {
        data() {
          return {
            theme: context.globals.theme
          };
        },
        created() {
          document.body.setAttribute(
            'class',
            this.theme !== 'light' ? `theme--${this.theme}` : ''
          );
        },
        components: { story },
        template: '<story />'
      };
    }
  ]
};

export default preview;
