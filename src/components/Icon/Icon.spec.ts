import { shallowMount } from '@vue/test-utils';
import Icon from './Icon.vue';
import InlineSvg from 'vue-inline-svg';
import type { Components } from '@/types';

describe('Icon', () => {
  it('renders a decorative icon', () => {
    // Arrange
    const icon: Components.Icon.Icon = {
      src: new URL('@/docs/assets/ChevronRight.svg', import.meta.url).href
    };
    const wrapper = shallowMount(Icon, {
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
    const icon: Components.Icon.Icon = {
      src: new URL('@/docs/assets/ChevronRight.svg', import.meta.url).href,
      label: 'ChevronRight'
    };
    const wrapper = shallowMount(Icon, {
      props: { icon }
    });

    // Assert
    expect(wrapper.findComponent(InlineSvg).attributes('src')).toBe(icon.src);
    expect(wrapper.findComponent(InlineSvg).attributes('aria-hidden')).toBe(
      'false'
    );
    expect(wrapper.findComponent(InlineSvg).attributes('aria-label')).toBe(
      'ChevronRight'
    );
  });
});
