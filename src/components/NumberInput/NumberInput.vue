<template>
  <div class="j-numberinput" :class="rootClass" :style="rootStyle">
    <label class="j-numberinput__label" :for="id" :class="{ 'sr-only': hiddenLabel }">
      <slot name="label" /><template v-if="$attrs.required"><span class="j-numberinput__asterisk" aria-hidden="true">*</span> <span class="sr-only">(required)</span></template>
    </label>
    <div class="j-numberinput__input-wrapper">
      <input
        v-bind="$attrs"
        class="j-numberinput__input"
        :id="id"
        type="number"
        :value="modelValue"
        :aria-invalid="status === 'error' ? 'true' : status === 'success' ? 'false' : undefined"
        :aria-errormessage="$slots.error ? `${id}-error` : undefined"
        :aria-describedby="$slots.description ? `${id}-description` : undefined"
        @input="emit('update:modelValue', Number(($event.target as HTMLInputElement).value))"
      />
      <span v-if="status" class="j-numberinput__validation-icon" aria-hidden="true"><template v-if="status === 'error'">✘</template><template v-if="status === 'success'">✔</template></span>
    </div>
    <div v-if="$slots.error" class="j-numberinput__error" :id="`${id}-error`"><slot name="error" /></div>
    <div v-if="$slots.description" class="j-numberinput__description" :id="`${id}-description`"><slot name="description" /></div>
  </div>
</template>

<script lang="ts" setup>
import { useAttrs, type PropType } from 'vue';

const $attrs = useAttrs();

defineOptions({
  inheritAttrs: false
})

defineProps({
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
  status: {
    type: String as PropType<'success'|'error'>,
    default: undefined
  },
  hiddenLabel: {
    type: Boolean,
    default: false
  },

  // v-model
  modelValue: {
    type: Number,
    default: undefined,
  }
});

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()
</script>

<style lang="scss" scoped>
@use '../../styles/modules/sr-only' as *;

// Default vars
$inputHeight: 2.5rem;

.j-numberinput {
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
    height: var(--j-numberinput-height, $inputHeight);
    min-width: calc(var(--j-numberinput-height, $inputHeight) * 1.5);
    width: 100%;

    &:disabled,
    &:read-only {
      background-color: var(--j-global-grey-100);
    }

    &[aria-invalid='true'] {
      border-color: var(--j-error);

      + .j-numberinput__validation-icon {
        color: var(--j-error);
      }
    }

    &[aria-invalid='false'] {
      border-color: var(--j-success);

      + .j-numberinput__validation-icon {
        color: var(--j-success);
      }
    }

    &:has(+ .j-numberinput__validation-icon) {
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
}
</style>
