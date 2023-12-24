import { shallowMount } from '@vue/test-utils';
import { JButton, JIcon } from '@/index';
import type { Button } from '@/types';

describe('Button', () => {
  it('renders a basic button', () => {
    // Arrange
    const wrapper = shallowMount(JButton, {
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
  });

  it('renders a button as a link', () => {
    // Arrange
    const wrapper = shallowMount(JButton, {
      slots: {
        default: 'Click me'
      },
      props: {
        href: 'https://www.test.com'
      }
    });

    // Assert
    expect(wrapper.find('button').exists()).toBe(false);
    expect(wrapper.find('a').exists()).toBe(true);
    expect(wrapper.find('a').attributes('href')).toBe('https://www.test.com');
    expect(wrapper.text()).toBe('Click me');
  });

  it('renders a button with a status', () => {
    // Arrange
    const wrapper = shallowMount(JButton, {
      slots: {
        default: 'Click me'
      },
      props: {
        status: 'accent'
      }
    });

    // Assert
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button').attributes('class')).toContain('btn--status');
    expect(wrapper.find('button').attributes('style')).toContain(
      '--j-btn-background-color: var(--j-accent)'
    );
    expect(wrapper.find('button').attributes('style')).toContain(
      '--j-btn-border-color: var(--j-accent)'
    );
  });

  it('renders a button with an outline', () => {
    // Arrange
    const wrapper = shallowMount(JButton, {
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
    const wrapper = shallowMount(JButton, {
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

  describe('icon', () => {
    it('renders a button with an icon before the text', async () => {
      // Arrange
      const icon: Button.Icon = {
        src: new URL('@/docs/assets/duck.svg', import.meta.url).href,
        position: 'before-text'
      };
      const wrapper = shallowMount(JButton, {
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
      expect(wrapper.find('button').classes()).toContain('btn--icon-before');
      expect(wrapper.findComponent(JIcon).exists()).toBe(true);
      expect(wrapper.text()).toBe('Click me');
      expect(wrapper.find('button').attributes('title')).toBeUndefined();
    });

    it('renders a button with an icon after the text', async () => {
      // Arrange
      const icon: Button.Icon = {
        src: new URL('@/docs/assets/duck.svg', import.meta.url).href,
        position: 'after-text'
      };
      const wrapper = shallowMount(JButton, {
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
      expect(wrapper.find('button').classes()).toContain('btn--icon-after');
      expect(wrapper.findComponent(JIcon).exists()).toBe(true);
      expect(wrapper.text()).toBe('Click me');
      expect(wrapper.find('button').attributes('title')).toBeUndefined();
    });

    it('renders a button with only an icon', async () => {
      // Arrange
      const icon: Button.Icon = {
        src: new URL('@/docs/assets/duck.svg', import.meta.url).href,
        position: 'icon-only'
      };
      const wrapper = shallowMount(JButton, {
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
      expect(wrapper.find('button').classes()).toContain('btn--icon-only');
      expect(wrapper.findComponent(JIcon).exists()).toBe(true);
      expect(wrapper.text()).toBe('');
      expect(wrapper.find('button').attributes('title')).toBe('Click me');
    });
  });
});
