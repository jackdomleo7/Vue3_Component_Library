import type { Meta, StoryObj, ComponentPropsAndSlots } from '@storybook/vue3';
import NumberInput from './NumberInput.vue';
import { ref } from 'vue';

interface FallthroughAttrs {
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  min?: number;
  max?: number;
}

const meta: Meta<ComponentPropsAndSlots<typeof NumberInput> & FallthroughAttrs> = {
  title: 'Components/NumberInput',
  component: NumberInput,
  argTypes: {
    status: {
      control: 'radio',
      options: [undefined, 'error', 'success']
    }
  },
  render: (args) => ({
    components: { NumberInput },
    setup() {
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: `
      <NumberInput
        v-bind="args"
        v-model="value"
      >
        <template v-if="args.label" v-slot:label>${args.label}</template>
        <template v-if="args.error" v-slot:error>${args.error}</template>
        <template v-if="args.description" v-slot:description>${args.description}</template>
      </NumberInput>
    `,
  })
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'default',
    label: 'Label'
  }
};

export const StatusError: Story = {
  args: {
    id: 'status-error',
    label: 'Label',
    status: 'error'
  }
};

export const StatusSuccess: Story = {
  args: {
    id: 'status-success',
    label: 'Label',
    status: 'success',
  }
};

export const HiddenLabel: Story = {
  args: {
    id: 'hidden-label',
    label: 'Label',
    hiddenLabel: true
  }
};

export const Disabled: Story = {
  args: {
    id: 'disabled',
    label: 'Label',
    disabled: true
  }
};

export const Readonly: Story = {
  args: {
    id: 'readonly',
    label: 'Label',
    readonly: true
  }
};

export const Required: Story = {
  args: {
    id: 'required',
    label: 'Label',
    required: true
  }
};

export const Min: Story = {
  args: {
    id: 'min',
    label: 'Label',
    min: 5
  }
};

export const Max: Story = {
  args: {
    id: 'max',
    label: 'Label',
    max: 5
  }
};

export const SingleError: Story = {
  args: {
    id: 'with-description',
    label: 'Label',
    status: 'error',
    error: '<p>This is an error message</p>'
  }
};

export const MultipleErrors: Story = {
  args: {
    id: 'with-description',
    label: 'Label',
    status: 'error',
    error: '<p>This is an error message</p><p>This is another error message</p>'
  }
};

export const WithDescription: Story = {
  args: {
    id: 'with-description',
    label: 'Label',
    description: '<p>Enter your <strong>full</strong> name</p>'
  }
};

export const Custom: Story = {
  args: {
    id: 'custom',
    label: 'Label',
    rootStyle: `
      --j-numberinput-height: 4rem;`
  }
};
