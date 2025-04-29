import { describe } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import JTextInput from './TextInput.vue';

describe('TextInput', () => {
  it('renders a root class', () => {
    // Arrange
    const wrapper = shallowMount(JTextInput, {
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
    const wrapper = shallowMount(JTextInput, {
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
    const wrapper = shallowMount(JTextInput, {
      props: {
        id: 'test-id'
      }
    });

    // Assert
    expect(wrapper.find('label').attributes('for')).toBe('test-id');
    expect(wrapper.find('input').attributes('id')).toBe('test-id');
  });

  describe('type', () => {
    it('renders a text input', () => {
      // Arrange
      const wrapper = shallowMount(JTextInput, {
        props: {
          id: 'test-id',
          type: 'text'
        }
      });

      // Assert
      expect(wrapper.find('input').attributes('type')).toBe('text');
    });

    it('renders an email input', () => {
      // Arrange
      const wrapper = shallowMount(JTextInput, {
        props: {
          id: 'test-id',
          type: 'email'
        }
      });

      // Assert
      expect(wrapper.find('input').attributes('type')).toBe('email');
    });

    it('renders a url input', () => {
      // Arrange
      const wrapper = shallowMount(JTextInput, {
        props: {
          id: 'test-id',
          type: 'url'
        }
      });

      // Assert
      expect(wrapper.find('input').attributes('type')).toBe('url');
    });

    it('renders a tel input', () => {
      // Arrange
      const wrapper = shallowMount(JTextInput, {
        props: {
          id: 'test-id',
          type: 'tel'
        }
      });

      // Assert
      expect(wrapper.find('input').attributes('type')).toBe('tel');
    });

    it('renders a password input', () => {
      // Arrange
      const wrapper = shallowMount(JTextInput, {
        props: {
          id: 'test-id',
          type: 'password'
        }
      });

      // Assert
      expect(wrapper.find('input').attributes('type')).toBe('password');
    });
  });

  describe('status', () => {
    it('renders a default status', () => {
      // Arrange
      const wrapper = shallowMount(JTextInput, {
        props: {
          id: 'test-id'
        }
      });

      // Assert
      expect(wrapper.find('input').attributes('aria-invalid')).toBeUndefined();
      expect(wrapper.find('.j-textinput__validation-icon').exists()).toBe(false);
    });

    it('renders an error status', () => {
      // Arrange
      const wrapper = shallowMount(JTextInput, {
        props: {
          id: 'test-id',
          status: 'error'
        }
      });

      // Assert
      expect(wrapper.find('input').attributes('aria-invalid')).toBe('true');
      expect(wrapper.find('.j-textinput__validation-icon').text()).toBe('✘');
    });

    it('renders a success status', () => {
      // Arrange
      const wrapper = shallowMount(JTextInput, {
        props: {
          id: 'test-id',
          status: 'success'
        }
      });

      // Assert
      expect(wrapper.find('input').attributes('aria-invalid')).toBe('false');
      expect(wrapper.find('.j-textinput__validation-icon').text()).toBe('✔');
    });
  });

  it('hides label when prompted', () => {
    // Arrange
    const wrapper = shallowMount(JTextInput, {
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

  describe('character count', () => {
    it('renders no character count', () => {
      // Arrange
      const wrapper = shallowMount(JTextInput, {
        props: {
          id: 'test-id'
        }
      });

      // Assert
      expect(wrapper.find('.j-textinput__character-count').exists()).toBe(false);
    });

    it('renders no character count (when descending and no maxlength)', () => {
      // Arrange
      const wrapper = shallowMount(JTextInput, {
        props: {
          id: 'test-id',
          characterCount: 'descending',
        }
      });

      // Assert
      expect(wrapper.find('.j-textinput__character-count').exists()).toBe(false);
    });

    it('renders an ascending character count with no limit',async  () => {
      // Arrange
      const wrapper = shallowMount(JTextInput, {
        props: {
          id: 'test-id',
          characterCount: 'ascending',
          modelValue: ''
        }
      });

      // Assert
      expect(wrapper.find('.j-textinput__count').text()).toBe('0');

      // Act
      await wrapper.setProps({ modelValue: 'test' });
      await wrapper.vm.$nextTick();

      // Assert
      expect(wrapper.find('.j-textinput__count').text()).toBe('4');
    });

    it('renders an ascending character count with a limit', async () => {
      // Arrange
      const wrapper = shallowMount(JTextInput, {
        props: {
          id: 'test-id',
          characterCount: 'ascending',
          modelValue: ''
        },
        attrs: {
          maxlength: 10
        }
      });

      // Assert
      expect(wrapper.find('.j-textinput__count').text()).toBe('0 / 10');

      // Act
      await wrapper.setProps({ modelValue: 'test' });
      await wrapper.vm.$nextTick();

      // Assert
      expect(wrapper.find('.j-textinput__count').text()).toBe('4 / 10');
    });

    it('renders a descending character count with a limit', async () => {
      // Arrange
      const wrapper = shallowMount(JTextInput, {
        props: {
          id: 'test-id',
          characterCount: 'descending',
          modelValue: ''
        },
        attrs: {
          maxlength: 10
        }
      });

      // Assert
      expect(wrapper.find('.j-textinput__count').text()).toBe('10 characters remaining');

      // Act
      await wrapper.setProps({ modelValue: 'test' });
      await wrapper.vm.$nextTick();

      // Assert
      expect(wrapper.find('.j-textinput__count').text()).toBe('6 characters remaining');
    });
  });

  it('renders an error message', () => {
    // Arrange
    const wrapper = shallowMount(JTextInput, {
      props: {
        id: 'test-id'
      },
      slots: {
        error: '<p>This is an error message</p>'
      }
    });

    // Assert
    expect(wrapper.find('.j-textinput__error').exists()).toBe(true);
    expect(wrapper.find('.j-textinput__error').html()).toContain('This is an error message');
    expect(wrapper.find('input').attributes('aria-describedby')).toContain('test-id-error');
  });

  it('renders a description message', () => {
    // Arrange
    const wrapper = shallowMount(JTextInput, {
      props: {
        id: 'test-id'
      },
      slots: {
        description: '<p>This is a description message</p>'
      }
    });

    // Assert
    expect(wrapper.find('.j-textinput__description').exists()).toBe(true);
    expect(wrapper.find('.j-textinput__description').html()).toContain('This is a description message');
    expect(wrapper.find('input').attributes('aria-describedby')).toContain('test-id-description');
  });
  
  it('emits @update:modelValue on input', async () => {
    // Arrange
    const wrapper = shallowMount(JTextInput, {
      props: {
        id: 'test-id',
        modelValue: ''
      }
    });

    // Act
    await wrapper.find('input').setValue('test');

    // Assert
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['test']);
  });
});
