import type { Meta, StoryObj } from '@storybook/vue3';

import ButtonGroup from './ButtonGroup.vue';
import Button from '../Button/Button.vue';

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Group1: Story = {
  render: (args) => ({
    components: { ButtonGroup, Button },
    setup() {
      return { args };
    },
    template: `<ButtonGroup v-bind="args">
      <Button status="info">Save</Button>
      <Button status="info">Edit</Button>
      <Button status="info">Delete</Button>
    </ButtonGroup>`
  })
};

export const Group2: Story = {
  render: (args) => ({
    components: { ButtonGroup, Button },
    setup() {
      const iconSrc = new URL('@/docs/assets/ChevronRight.svg', import.meta.url).href;
      return { args, iconSrc };
    },
    template: `<ButtonGroup v-bind="args">
      <Button status="info" round>Save</Button>
      <Button status="info" round>Edit</Button>
      <Button status="info" round>Delete</Button>
    </ButtonGroup>`
  })
};

export const Group3: Story = {
  render: (args) => ({
    components: { ButtonGroup, Button },
    setup() {
      const iconSrc = new URL('@/docs/assets/ChevronDown.svg', import.meta.url).href;
      return { args, iconSrc };
    },
    template: `<ButtonGroup v-bind="args">
      <Button status="info">Save</Button>
      <Button status="info" :icon="{ src: iconSrc, position: 'icon-only' }">More</Button>
    </ButtonGroup>`
  })
};
