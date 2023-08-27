import type { Meta, StoryObj } from '@storybook/vue3'

import HelloWorld from './HelloWorld.vue'

const meta = {
  title: 'Components/Hello World',
  component: HelloWorld,
  tags: ['autodocs']
} satisfies Meta<typeof HelloWorld>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    msg: 'Hello there!'
  }
}
