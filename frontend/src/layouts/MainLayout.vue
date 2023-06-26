<template>
  <q-layout view="lHh Lpr lFf" style="background-color: #383838" class="flex column">
    <div class="content-container" ref="myclassRef">
      <TabsHeaderComponent :scrolled="scrolled" />
      <q-page-container style="padding-top: 0 !important;">
        <router-view/>
      </q-page-container>
    </div>
    <FooterComponent :not-footer-height="myclassHeight"/>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, Ref, nextTick } from 'vue';
import FooterComponent from 'components/FooterComponent.vue';
import TabsHeaderComponent from 'components/TabsHeaderComponent.vue';

const scrolled: Ref<boolean> = ref(false);
const myclassRef: Ref<HTMLDivElement | null> = ref(null);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  nextTick(() => {
    // Call the computed property after the DOM has been updated
  });
});

const handleScroll = (): void => {
  scrolled.value = document.documentElement.scrollTop > 10;
};

const myclassHeight: Ref<number> = computed(() => {
  if (myclassRef.value) {
    return myclassRef.value.offsetHeight;
  }
  return 0;
});

</script>
<style scoped lang="scss">
.content-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
</style>
