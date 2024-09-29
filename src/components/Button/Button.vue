<template>
  <!-- TODO: Add support for nuxt-link -->
  <component
    :is="tag"
    :to="tag === 'router-link' ? href : undefined"
    :href="href"
    :type="tag === 'button' ? type : undefined"
    class="j-btn"
    :title="icon?.position === 'icon-only' ? defaultSlotContent : undefined"
    :style="{
      '--j-btn-font-size': `var(--j-text-${size})`,
      '--j-btn-border-radius': round ? '2rem' : '0.5rem',
      ...(status
        ? outline
          ? {
              '--j-btn-color': `var(--j-${status})`,
              '--j-btn-border-color': `var(--j-${status})`
            }
          : {
              '--j-btn-color': '#fff',
              '--j-btn-background-color': `var(--j-${status})`,
              '--j-btn-border-color': `var(--j-${status})`
            }
        : {})
    }"
    :class="{
      'j-btn--status': status,
      'j-btn--icon-only': icon?.position === 'icon-only',
      'j-btn--icon-before': icon?.position === 'before-text',
      'j-btn--icon-after': icon?.position === 'after-text'
    }"
    :disabled="disabled"
  >
    <Icon v-if="icon && icon.position !== 'after-text'" :icon="icon" />
    <slot v-if="icon?.position !== 'icon-only'" />
    <Icon v-if="icon && icon.position === 'after-text'" :icon="icon" />
  </component>
</template>

<script lang="ts" setup>
import { computed, defineAsyncComponent, useSlots } from 'vue';
import type { Components, Tokens } from '@/types';

const Icon = defineAsyncComponent(() => import('../Icon/Icon.vue'));

withDefaults(
  defineProps<{
    /**
     * The element to use.
     * @default "<button>"
     */
    tag?: Components.Button.Tag;
    /**
     * The button type. _Ignored if not `<button>`._
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type
     * @default "button"
     */
    type?: Components.Button.Type;
    /**
     * _Ignored if `<button>`._
     */
    href?: string;
    size?: Tokens.FontSizeValue;
    round?: boolean;
    status?: Components.Button.Status;
    outline?: boolean;
    icon?: Components.Button.Icon;
    disabled?: boolean;
  }>(),
  {
    tag: 'button',
    type: 'button',
    href: undefined,
    size: 'md',
    status: undefined,
    icon: undefined
  }
);

const defaultSlotContent = computed<string>(() => {
  const $default = useSlots()['default']!;
  let cumulativeContent = '';
  $default().forEach((el) => (cumulativeContent += el.children));
  return cumulativeContent;
});
</script>

<style lang="scss" scoped>
.j-btn {
  --j-btn-background-color: transparent;
  --j-btn-border-color: transparent;
  --j-btn-color: var(--j-primary);
  --j-btn-height: calc(var(--j-btn-font-size) * 2.5);

  background-color: var(--j-btn-background-color);
  border: 2px solid var(--j-btn-border-color);
  color: var(--j-btn-color);
  text-decoration: none;
  padding: 0.75rem 1rem;
  border-radius: var(--j-btn-border-radius);
  cursor: pointer;
  outline-offset: 4px;
  height: var(--j-btn-height);
  line-height: 1;
  font-size: var(--j-btn-font-size);
  text-align: center;
  min-width: calc(var(--j-btn-height) * 2.25);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  user-select: none;
  position: relative;

  &:disabled {
    cursor: default;
    opacity: 0.7;
  }

  &:not(:disabled) {
    &:hover,
    &:active {
      background-color: var(--j-bg1);
    }

    &:active {
      @media (prefers-reduced-motion: no-preference) {
        transform: scale(0.98);
      }
    }
  }

  &--status {
    &:not(:disabled) {
      &:hover,
      &:active {
        background-color: var(--j-btn-background-color);
      }
    }
  }

  &--icon {
    $offset: 0.5rem;
    $padding: 2.75rem;

    &-before {
      padding-left: $padding;

      :deep(svg) {
        left: $offset;
      }
    }

    &-after {
      padding-right: $padding;

      :deep(svg) {
        right: $offset;
      }
    }
  }

  &--icon-only {
    min-width: unset;
    width: var(--j-btn-height);
    padding: 0.25rem;
  }

  :deep(svg) {
    fill: var(--j-btn-color);
    height: 75%;
    width: auto;
    position: absolute;
  }
}
</style>
