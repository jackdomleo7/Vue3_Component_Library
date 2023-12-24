<template>
  <InlineSvg
    :src="icon.src"
    :aria-hidden="icon.label ? 'false' : 'true'"
    :aria-label="icon.label"
  />
</template>

<script lang="ts" setup>
import { type PropType } from 'vue'
import InlineSvg from 'vue-inline-svg'
import type { Icon } from '../../types'

defineProps({
  icon: {
    type: Object as PropType<Icon.Icon>,
    required: true,
    validator: (icon: Icon.Icon): boolean => {
      // Only allow undefined prop or icon that includes ".svg" in the path
      return icon.src.includes('.svg')
    }
  }
})
</script>
