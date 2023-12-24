import { shallowMount } from '@vue/test-utils';
import { JIcon } from '@/index';
import InlineSvg from 'vue-inline-svg';
import type { Icon } from '@/types';

describe('Icon', () => {
  it('renders a decorative icon', () => {
    // Arrange
    const icon: Icon.Icon = {
      src: new URL('@/docs/assets/duck.svg', import.meta.url).href
    };
    const wrapper = shallowMount(JIcon, {
      props: { icon }
    });

    // Assert
    expect(wrapper.findComponent(InlineSvg).attributes('src')).toBe(icon.src);
    expect(wrapper.findComponent(InlineSvg).attributes('aria-hidden')).toBe(
      'true'
    );
    expect(
      wrapper.findComponent(InlineSvg).attributes('aria-label')
    ).toBeUndefined();
  });

  it('renders an informative icon', () => {
    // Arrange
    const icon: Icon.Icon = {
      src: new URL('@/docs/assets/duck.svg', import.meta.url).href,
      label: 'Duck'
    };
    const wrapper = shallowMount(JIcon, {
      props: { icon }
    });

    // Assert
    expect(wrapper.findComponent(InlineSvg).attributes('src')).toBe(icon.src);
    expect(wrapper.findComponent(InlineSvg).attributes('aria-hidden')).toBe(
      'false'
    );
    expect(wrapper.findComponent(InlineSvg).attributes('aria-label')).toBe(
      'Duck'
    );
  });
});
