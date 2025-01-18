<template>
  <div role="group" class="j-btn-group">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.j-btn-group {
  display: flex;
  gap: 0;
  flex-wrap: nowrap;

  :deep(> *) {
    &:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    &:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
}
</style>
