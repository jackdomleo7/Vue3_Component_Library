import { Story } from "@storybook/vue3";
import { JSample } from "@/components";

export default {
  title: "Components/Sample",
  component: JSample,
  parameters: {
    docs: {
      description: {
        component: "`import { JSample } from '@jackdomleo7/vue3-library'`",
      },
    },
  },
};

const Template = (args: Record<string, unknown>) => ({
  components: { JSample },
  setup() {
    return { args };
  },
  template: '<JSample v-bind="args" />',
});

export const Default: Story = Template.bind({});
