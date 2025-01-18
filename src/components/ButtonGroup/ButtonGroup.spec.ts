import { shallowMount } from '@vue/test-utils';
import ButtonGroup from './ButtonGroup.vue';

describe('ButtonGroup', () => {
  it('renders a button group', () => {
    const wrapper = shallowMount(ButtonGroup, {
      slots: {
        default: '<button>Save</button><button>Edit</button><button>Delete</button>'
      }
    });

    expect(wrapper.findAll('button')).toHaveLength(3);
  });
});
