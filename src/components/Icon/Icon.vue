<template>
  <InlineSvg
    :src="icon.src"
    :aria-hidden="icon.label ? 'false' : 'true'"
    :aria-label="icon.label"
  />
</template>

<script lang="ts" setup>
import InlineSvg from 'vue-inline-svg';
import type { Components } from '@/types';

defineProps<{
  icon: Components.Icon.Icon;
}>();
</script>
