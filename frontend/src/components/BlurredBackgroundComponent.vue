<template>
<div class="blurred-background">
</div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.blurred-background {
  position: absolute;
  width: 100vw;
  bottom: -100vh;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: -1;
  pointer-events: all;
  overflow: clip;
}
</style>
