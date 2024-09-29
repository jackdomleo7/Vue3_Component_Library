import { shallowMount } from '@vue/test-utils';
import Button from './Button.vue';
import Icon from '../Icon/Icon.vue';
import type { Components, Tokens } from '@/types';

describe('Button', () => {
  it('renders a basic button', () => {
    // Arrange
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Click me'
      }
    });

    // Assert
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('a').exists()).toBe(false);
    expect(wrapper.attributes('href')).toBeUndefined();
    expect(wrapper.text()).toBe('Click me');
    expect(wrapper.find('button').attributes('title')).toBeUndefined();
    expect(wrapper.find('button').attributes('type')).toBe('button');
  });

  it('renders a submit button', () => {
    // Arrange
    const wrapper = shallowMount(Button, {
      props: {
        type: 'submit'
      },
      slots: {
        default: 'Click me'
      }
    });

    // Assert
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('a').exists()).toBe(false);
    expect(wrapper.attributes('href')).toBeUndefined();
    expect(wrapper.text()).toBe('Click me');
    expect(wrapper.find('button').attributes('title')).toBeUndefined();
    expect(wrapper.find('button').attributes('type')).toBe('submit');
  });

  it('renders a reset button', () => {
    // Arrange
    const wrapper = shallowMount(Button, {
      props: {
        type: 'reset'
      },
      slots: {
        default: 'Click me'
      }
    });

    // Assert
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('a').exists()).toBe(false);
    expect(wrapper.attributes('href')).toBeUndefined();
    expect(wrapper.text()).toBe('Click me');
    expect(wrapper.find('button').attributes('title')).toBeUndefined();
    expect(wrapper.find('button').attributes('type')).toBe('reset');
  });

  it('renders a button as a link', () => {
    // Arrange
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Click me'
      },
      props: {
        tag: 'a',
        href: 'https://www.test.com'
      }
    });

    // Assert
    expect(wrapper.find('button').exists()).toBe(false);
    expect(wrapper.find('a').exists()).toBe(true);
    expect(wrapper.find('a').attributes('href')).toBe('https://www.test.com');
    expect(wrapper.find('a').attributes('type')).toBeUndefined();
    expect(wrapper.text()).toBe('Click me');
  });

  it('renders a button as a router-link', () => {
    // Arrange
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Click me'
      },
      props: {
        tag: 'router-link',
        href: 'https://www.test.com'
      }
    });

    // Assert
    expect(wrapper.find('button').exists()).toBe(false);
    expect(wrapper.find('a').exists()).toBe(false);
    expect(wrapper.find('router-link').exists()).toBe(true);
    expect(wrapper.find('router-link').attributes('href')).toBe(
      'https://www.test.com'
    );
    expect(wrapper.find('router-link').attributes('type')).toBeUndefined();
    expect(wrapper.text()).toBe('Click me');
  });

  it('renders a button with a status', () => {
    // Arrange
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Click me'
      },
      props: {
        status: 'accent'
      }
    });

    // Assert
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button').attributes('style')).toContain(
      '--j-btn-background-color: var(--j-accent)'
    );
    expect(wrapper.find('button').attributes('style')).toContain(
      '--j-btn-border-color: var(--j-accent)'
    );
    expect(wrapper.find('button').attributes('style')).toContain(
      '--j-btn-hover-background-color: var(--j-accent-alt)'
    );
  });

  it('renders a button with an outline', () => {
    // Arrange
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Click me'
      },
      props: {
        status: 'accent',
        outline: true
      }
    });

    // Assert
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button').attributes('style')).toContain(
      '--j-btn-color: var(--j-accent)'
    );
    expect(wrapper.find('button').attributes('style')).toContain(
      '--j-btn-border-color: var(--j-accent)'
    );
  });

  it('renders a disabled button', () => {
    // Arrange
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'Click me'
      },
      props: {
        disabled: true
      }
    });

    // Assert
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button').attributes()).toHaveProperty('disabled');
  });

  it.each<Tokens.FontSizeValue>(['xs', 'sm', 'md', 'lg', 'xl', 'xxl'])(
    'renders size: %s',
    (size) => {
      // Arrange
      const wrapper = shallowMount(Button, {
        slots: {
          default: 'Click me'
        },
        props: {
          size
        }
      });

      // Assert
      expect(wrapper.find('button').attributes('style')).toContain(
        `--j-btn-font-size: var(--j-text-${size})`
      );
    }
  );

  it.each<undefined | boolean>([undefined, true, false])(
    'roundness: %s',
    (round) => {
      // Arrange
      const wrapper = shallowMount(Button, {
        slots: {
          default: 'Click me'
        },
        props: {
          round
        }
      });

      // Assert
      expect(wrapper.find('button').attributes('style')).toContain(
        `--j-btn-border-radius: ${round === true ? '2rem' : '0.5rem'}`
      );
    }
  );

  describe('icon', () => {
    it('renders a button with an icon before the text', async () => {
      // Arrange
      const icon: Components.Button.Icon = {
        src: new URL('@/docs/assets/duck.svg', import.meta.url).href,
        position: 'before-text'
      };
      const wrapper = shallowMount(Button, {
        slots: {
          default: 'Click me'
        },
        props: {
          icon
        }
      });

      await vi.dynamicImportSettled();

      // Assert
      expect(wrapper.find('button').exists()).toBe(true);
      expect(wrapper.find('button').classes()).toContain('j-btn--icon-before');
      expect(wrapper.findComponent(Icon).exists()).toBe(true);
      expect(wrapper.text()).toBe('Click me');
      expect(wrapper.find('button').attributes('title')).toBeUndefined();
    });

    it('renders a button with an icon after the text', async () => {
      // Arrange
      const icon: Components.Button.Icon = {
        src: new URL('@/docs/assets/duck.svg', import.meta.url).href,
        position: 'after-text'
      };
      const wrapper = shallowMount(Button, {
        slots: {
          default: 'Click me'
        },
        props: {
          icon
        }
      });

      await vi.dynamicImportSettled();

      // Assert
      expect(wrapper.find('button').exists()).toBe(true);
      expect(wrapper.find('button').classes()).toContain('j-btn--icon-after');
      expect(wrapper.findComponent(Icon).exists()).toBe(true);
      expect(wrapper.text()).toBe('Click me');
      expect(wrapper.find('button').attributes('title')).toBeUndefined();
    });

    it('renders a button with only an icon', async () => {
      // Arrange
      const icon: Components.Button.Icon = {
        src: new URL('@/docs/assets/duck.svg', import.meta.url).href,
        position: 'icon-only'
      };
      const wrapper = shallowMount(Button, {
        slots: {
          default: 'Click me'
        },
        props: {
          icon
        }
      });

      await vi.dynamicImportSettled();

      // Assert
      expect(wrapper.find('button').exists()).toBe(true);
      expect(wrapper.find('button').classes()).toContain('j-btn--icon-only');
      expect(wrapper.findComponent(Icon).exists()).toBe(true);
      expect(wrapper.text()).toBe('');
      expect(wrapper.find('button').attributes('title')).toBe('Click me');
    });
  });
});
