import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    tag: {
      control: 'radio',
      options: [undefined, 'button', 'a', 'router-link']
    },
    type: {
      control: 'radio',
      options: [undefined, 'button', 'submit', 'reset']
    },
    status: {
      control: 'radio',
      options: [undefined, 'accent', 'info', 'error', 'warning', 'success']
    },
    size: {
      control: 'radio',
      options: [undefined, 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Status: Story = {
  args: {
    default: 'Click me',
    status: 'info'
  }
};

export const Outline: Story = {
  args: {
    default: 'Click me',
    status: 'info',
    outline: true
  }
};

export const Size: Story = {
  args: {
    default: 'Click me',
    status: 'info',
    size: 'xxl'
  }
};

export const Round: Story = {
  args: {
    default: 'Click me',
    status: 'info',
    round: true
  }
};

export const IconBefore: Story = {
  args: {
    default: 'Click me',
    status: 'info',
    icon: {
      src: new URL('@/docs/assets/duck.svg', import.meta.url).href,
      position: 'before-text'
    }
  }
};

export const IconAfter: Story = {
  args: {
    default: 'Click me',
    status: 'info',
    icon: {
      src: new URL('@/docs/assets/duck.svg', import.meta.url).href,
      position: 'after-text'
    }
  }
};

export const IconOnly: Story = {
  args: {
    default: 'Click me',
    status: 'info',
    icon: {
      src: new URL('@/docs/assets/duck.svg', import.meta.url).href,
      position: 'icon-only'
    }
  }
};

export const Link: Story = {
  args: {
    tag: 'a',
    default: 'Click me',
    status: 'info',
    href: '#'
  }
};

export const Disabled: Story = {
  args: {
    default: 'Click me',
    status: 'info',
    disabled: true
  }
};
