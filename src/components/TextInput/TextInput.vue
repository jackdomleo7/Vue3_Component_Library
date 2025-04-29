<template>
  <div class="j-textinput" :class="rootClass" :style="rootStyle">
    <label class="j-textinput__label" :for="id" :class="{ 'sr-only': hiddenLabel }">
      <slot name="label" /><template v-if="$attrs.required"><span class="j-textinput__asterisk" aria-hidden="true">*</span> <span class="sr-only">(required)</span></template>
    </label>
    <p v-if="characterCountMsg" class="j-textinput__count">{{ characterCountMsg }}</p>
    <div class="j-textinput__input-wrapper">
      <input
        v-bind="$attrs"
        class="j-textinput__input"
        :id="id"
        :type="type"
        :value="modelValue"
        :aria-invalid="status === 'error' ? 'true' : status === 'success' ? 'false' : undefined"
        :aria-describedby="[$slots.error ? `${id}-error` : '', $slots.description ? `${id}-description` : ''].filter(Boolean).join(' ') || undefined"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
      <span v-if="status" class="j-textinput__validation-icon" aria-hidden="true"><template v-if="status === 'error'">✘</template><template v-if="status === 'success'">✔</template></span>
    </div>
    <div v-if="$slots.error" class="j-textinput__error" :id="`${id}-error`"><slot name="error" /></div>
    <div v-if="$slots.description" class="j-textinput__description" :id="`${id}-description`"><slot name="description" /></div>
  </div>
</template>

<script lang="ts" setup>
import { computed, useAttrs, type PropType } from 'vue';

const $attrs = useAttrs();

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  rootClass: {
    type: String,
    default: undefined
  },
  rootStyle: {
    type: String,
    default: undefined
  },
  id: {
    type: String,
    required: true,
    validator: (value: string): boolean => !/\s/g.test(value) // no whitespace
  },
  /**
   * The type of the input. Will only allow text-based types. If another type is needed, see other components.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types
   */
   type: {
    type: String as PropType<'text'|'email'|'tel'|'url'|'password'|'search'>,
    default: 'text'
  },
  status: {
    type: String as PropType<'success'|'error'>,
    default: undefined
  },
  hiddenLabel: {
    type: Boolean,
    default: false
  },
  /**
   * The character count can be shown in three ways:
   * - `ascending` no limit: The number of characters typed.
   * - `ascending` with `maxlength` prop: The number of characters typed, and the maximum number of characters allowed.
   * - `descending` with `maxlength` prop: The number of characters remaining until the maximum number of characters allowed.
   */
  characterCount: {
    type: String as PropType<'ascending'|'descending'>,
    default: undefined
  },

  // v-model
  modelValue: {
    type: String,
    default: ''
  }
});

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const characterCountMsg = computed(() => {
  const maxlength = $attrs.maxlength ? Number($attrs.maxlength) ?? undefined : undefined;
  if (!props.characterCount) return undefined;
  if (props.characterCount === 'ascending' && maxlength === undefined) {
    return `${props.modelValue.length}`
  };
  if (props.characterCount === 'ascending' && maxlength) {
    return `${props.modelValue.length} / ${maxlength}`;
  }
  if (props.characterCount === 'descending' && maxlength) {
    return `${maxlength - props.modelValue.length} characters remaining`;
  }
  return undefined;
});
</script>

<style lang="scss" scoped>
@use '../../styles/modules/sr-only' as *;

// Default vars
$inputHeight: 2.5rem;

.j-textinput {
  position: relative;
  display: flex;
  flex-direction: column;

  &__label {
    margin-bottom: 0.1875rem;
  }

  &__input-wrapper {
    position: relative;
  }

  &__input {
    border: 1px solid;
    border-radius: 0.3125rem;
    padding: 0.5rem;
    font-size: inherit;
    height: var(--j-textinput-height, $inputHeight);
    min-width: calc(var(--j-textinput-height, $inputHeight) * 1.5);
    width: 100%;

    &:disabled,
    &:read-only {
      background-color: var(--j-global-grey-100);
    }

    &[aria-invalid='true'] {
      border-color: var(--j-error);

      + .j-textinput__validation-icon {
        color: var(--j-error);
      }
    }

    &[aria-invalid='false'] {
      border-color: var(--j-success);

      + .j-textinput__validation-icon {
        color: var(--j-success);
      }
    }

    &:has(+ .j-textinput__validation-icon) {
      padding-right: 2rem;
    }
  }

  &__validation-icon {
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
    font-size: 1.25rem;
    line-height: 0;
    user-select: none;
    pointer-events: none;
  }

  &__error,
  &__asterisk {
    color: var(--j-error);
  }

  &__error,
  &__description {
    margin-top: 0.5rem;

    :deep() {
      p, li {
        margin-block: 0.375rem;

        &:first-of-type {
          margin-top: 0;
        }

        &:last-of-type {
          margin-bottom: 0;
        }
      }

      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
    }
  }

  &__count {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    font-weight: 600;
  }
}
</style>
