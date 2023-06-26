<template>
  <div class="page-entry" :style="`background-color: ${color};${shadowed ? 'box-shadow: black 0 0 10px 0; z-index: 2' : ''}`">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

withDefaults(defineProps<{
  color: string;
  shadowed: boolean;
}>(), {
  color: 'blue',
  shadowed: true
});
</script>

<style scoped lang="scss">
.page-entry {
  width: 100%;
}
</style>
