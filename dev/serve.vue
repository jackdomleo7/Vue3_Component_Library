<script lang="ts">
import { defineComponent } from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
// import { JSample } from '@/entry.esm';

export default defineComponent({
  name: "ServeDev",
  // components: {
  //  JSample,
  // }
});
</script>

<template>
  <div id="app">
    <j-sample />
  </div>
</template>
