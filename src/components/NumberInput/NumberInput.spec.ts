import { describe } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import JNumberInput from './NumberInput.vue';

describe('NumberInput', () => {
  it('renders a root class', () => {
    // Arrange
    const wrapper = shallowMount(JNumberInput, {
      props: {
        id: 'test-id',
        rootClass: 'test-class'
      }
    });

    // Assert
    expect(wrapper.classes()).toContain('test-class');
  });

  it('renders a root style', () => {
    // Arrange
    const wrapper = shallowMount(JNumberInput, {
      props: {
        id: 'test-id',
        rootStyle: 'width: 50%;'
      }
    });

    // Assert
    expect(wrapper.attributes('style')).toContain('width: 50%');
  });

  it('renders an id', () => {
    // Arrange
    const wrapper = shallowMount(JNumberInput, {
      props: {
        id: 'test-id'
      }
    });

    // Assert
    expect(wrapper.find('label').attributes('for')).toBe('test-id');
    expect(wrapper.find('input').attributes('id')).toBe('test-id');
  });

  it('renders a number input', () => {
    // Arrange
    const wrapper = shallowMount(JNumberInput, {
      props: {
        id: 'test-id'
      }
    });

    // Assert
    expect(wrapper.find('input').attributes('type')).toBe('number');
  });

  describe('status', () => {
    it('renders a default status', () => {
      // Arrange
      const wrapper = shallowMount(JNumberInput, {
        props: {
          id: 'test-id'
        }
      });

      // Assert
      expect(wrapper.find('input').attributes('aria-invalid')).toBeUndefined();
      expect(wrapper.find('.j-numberinput__validation-icon').exists()).toBe(false);
    });

    it('renders an error status', () => {
      // Arrange
      const wrapper = shallowMount(JNumberInput, {
        props: {
          id: 'test-id',
          status: 'error'
        }
      });

      // Assert
      expect(wrapper.find('input').attributes('aria-invalid')).toBe('true');
      expect(wrapper.find('.j-numberinput__validation-icon').text()).toBe('✘');
    });

    it('renders a success status', () => {
      // Arrange
      const wrapper = shallowMount(JNumberInput, {
        props: {
          id: 'test-id',
          status: 'success'
        }
      });

      // Assert
      expect(wrapper.find('input').attributes('aria-invalid')).toBe('false');
      expect(wrapper.find('.j-numberinput__validation-icon').text()).toBe('✔');
    });
  });

  it('hides label when prompted', () => {
    // Arrange
    const wrapper = shallowMount(JNumberInput, {
      props: {
        id: 'test-id',
        hiddenLabel: true
      },
      slots: {
        label: 'Label'
      }
    });

    // Assert
    expect(wrapper.find('label').classes()).toContain('sr-only');
  });

  it('renders a required input', () => {
    // Arrange
    const wrapper = shallowMount(JNumberInput, {
      props: {
        id: 'test-id',
      },
      attrs: {
        required: 'true'
      }
    });

    // Assert
    expect(wrapper.find('label').text()).toContain('* (required)');
  });

  it('renders an error message', () => {
    // Arrange
    const wrapper = shallowMount(JNumberInput, {
      props: {
        id: 'test-id'
      },
      slots: {
        error: '<p>This is an error message</p>'
      }
    });

    // Assert
    expect(wrapper.find('.j-numberinput__error').exists()).toBe(true);
    expect(wrapper.find('.j-numberinput__error').html()).toContain('This is an error message');
    expect(wrapper.find('input').attributes('aria-errormessage')).toContain('test-id-error');
  });

  it('renders a description message', () => {
    // Arrange
    const wrapper = shallowMount(JNumberInput, {
      props: {
        id: 'test-id'
      },
      slots: {
        description: '<p>This is a description message</p>'
      }
    });

    // Assert
    expect(wrapper.find('.j-numberinput__description').exists()).toBe(true);
    expect(wrapper.find('.j-numberinput__description').html()).toContain('This is a description message');
    expect(wrapper.find('input').attributes('aria-describedby')).toContain('test-id-description');
  });
  
  it('emits @update:modelValue on input', async () => {
    // Arrange
    const wrapper = shallowMount(JNumberInput, {
      props: {
        id: 'test-id',
        modelValue: 5
      }
    });

    // Act
    await wrapper.find('input').setValue('7');

    // Assert
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([7]);
  });
});
