import type { Meta, StoryObj, ComponentPropsAndSlots } from '@storybook/vue3';
import TextInput from './TextInput.vue';
import { ref } from 'vue';

interface FallthroughAttrs {
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  minlength?: number;
  maxlength?: number;
}

const meta: Meta<ComponentPropsAndSlots<typeof TextInput> & FallthroughAttrs> = {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    type: {
      control: 'radio',
      options: [undefined, 'text', 'email', 'url', 'tel', 'password', 'search']
    },
    status: {
      control: 'radio',
      options: [undefined, 'error', 'success']
    }
  },
  render: (args) => ({
    components: { TextInput },
    setup() {
      const value = ref(args.modelValue);
      return { args, value };
    },
    template: `
      <TextInput
        v-bind="args"
        v-model="value"
      >
        <template v-if="args.label" v-slot:label>${args.label}</template>
        <template v-if="args.error" v-slot:error>${args.error}</template>
        <template v-if="args.description" v-slot:description>${args.description}</template>
      </TextInput>
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

export const TypeText: Story = {
  args: {
    id: 'type-text',
    label: 'Label',
    type: 'text'
  }
};

export const TypeEmail: Story = {
  args: {
    id: 'type-email',
    label: 'Label',
    type: 'email'
  }
};

export const TypeUrl: Story = {
  args: {
    id: 'type-url',
    label: 'Label',
    type: 'url'
  }
};

export const TypeTel: Story = {
  args: {
    id: 'type-tel',
    label: 'Label',
    type: 'tel'
  }
};

export const TypePassword: Story = {
  args: {
    id: 'type-password',
    label: 'Label',
    type: 'password'
  }
};

export const TypeSearch: Story = {
  args: {
    id: 'type-search',
    label: 'Label',
    type: 'search'
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

export const CharacterCountAscendingNoLimit: Story = {
  args: {
    id: 'character-count-ascending',
    label: 'Label',
    characterCount: 'ascending'
  }
};

export const CharacterCountAscending: Story = {
  args: {
    id: 'character-count-ascending',
    label: 'Label',
    characterCount: 'ascending',
    maxlength: 20
  }
};

export const CharacterCountDescending: Story = {
  args: {
    id: 'character-count-descending',
    label: 'Label',
    characterCount: 'descending',
    maxlength: 20
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

export const Minlength: Story = {
  args: {
    id: 'minlength',
    label: 'Label',
    minlength: 5
  }
};

export const Maxlength: Story = {
  args: {
    id: 'maxlength',
    label: 'Label',
    maxlength: 5
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
      --j-textinput-height: 4rem;`
  }
};
