<template>
  <!-- TODO: Add support for router-link -->
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="href ? undefined : type"
    class="j-btn"
    :title="icon?.position === 'icon-only' ? defaultSlotContent : undefined"
    :style="
      status
        ? outline
          ? `
            --j-btn-color: var(--j-${status});
            --j-btn-border-color: var(--j-${status})
          `
          : `
            --j-btn-color: #fff;
            --j-btn-background-color: var(--j-${status});
            --j-btn-border-color: var(--j-${status})
          `
        : ''
    "
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
import type { Components } from '@/types';

const Icon = defineAsyncComponent(() => import('../Icon/Icon.vue'));

withDefaults(
  defineProps<{
    /**
     * The button type. _Is omitted if `href` has been provided._
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type
     * @default "button"
     */
    type?: 'button' | 'submit' | 'reset';
    /**
     * Provide a URL to use `<a :href="href">` instead of a `<button>`.
     */
    href?: string;
    status?: Components.Button.Status;
    outline?: boolean;
    icon?: Components.Button.Icon;
    disabled?: boolean;
  }>(),
  {
    type: 'button',
    href: undefined,
    status: undefined,
    outline: false,
    icon: undefined,
    disabled: false
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
  --j-btn-height: 2.5rem;
  --j-btn-background-color: transparent;
  --j-btn-border-color: transparent;
  --j-btn-color: var(--j-primary);

  background-color: var(--j-btn-background-color);
  border: 2px solid var(--j-btn-border-color);
  color: var(--j-btn-color);
  text-decoration: none;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  outline-offset: 4px;
  height: var(--j-btn-height);
  line-height: 1;
  font-size: inherit;
  min-width: calc(var(--j-btn-height) * 2.25);
  display: inline-flex;
  align-items: center;
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
