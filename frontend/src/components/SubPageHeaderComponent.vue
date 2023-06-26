<template>
  <div style="height: 400px;">
    <div class="image">
      <div class="parallax-image" :style="`background-image: url(${headerImage}); transform: translateY(${scrollY}px);`" />

      <div class="text-overlay q-ma-xl ">
       {{title}}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, PropType, ref } from 'vue';

const scrollY = ref(0);
let lastScrollY = 0;
let ticking = false;

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});

const onScroll = () => {
  lastScrollY = window.scrollY;
  requestTick();
};

const requestTick = () => {
  if (!ticking) {
    requestAnimationFrame(updatePosition);
    ticking = true;
  }
};

const updatePosition = () => {
  scrollY.value = lastScrollY * 0.3; // Adjust the scroll speed as per your preference
  ticking = false;
};

defineProps({
  title: {
    type: String as PropType<string>,
    required: true,
  },
  headerImage: {
    type: String as PropType<string>,
    required: true,
  },
});
</script>

<style scoped lang="scss">

.image {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Ensure the image doesn't overflow the container */
}

.parallax-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: black 0 0 10px 0;
  transform: translateY(0); /* Initial translation */
  filter: brightness(0.9) saturate(1);
}

.menu {
  position: absolute;
  right: 50px;
}

.logo {
  margin-right: 20px;
  margin-left: 20px;
  height: 80px;
  cursor: pointer;
  background-size: contain;
}


.image {
  width: 100%;
  height: 100%;
  box-shadow: black 0 0 10px 0;
  display: flex;
  justify-content: center;
}

.text-overlay {
  position: absolute;
  top: 130px;
  font-size: clamp(15px, 6vw, 50px);
  color: white;
  text-shadow: 0 0 3px black;
  word-break: normal;
  text-align: center;
}



</style>
