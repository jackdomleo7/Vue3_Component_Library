import type { Meta, StoryObj } from '@storybook/vue3';

import Icon from './Icon.vue';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  render: (args) => ({
    components: { Icon },
    setup() {
      return { args };
    },
    template: '<Icon v-bind="args" style="max-width: 4rem;" />'
  })
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Decorative: Story = {
  args: {
    icon: {
      src: new URL('@/docs/assets/ChevronRight.svg', import.meta.url).href
    }
  }
};

export const Informative: Story = {
  args: {
    icon: {
      src: new URL('@/docs/assets/ErrorExclamation.svg', import.meta.url).href,
      label: 'Error'
    }
  }
};
