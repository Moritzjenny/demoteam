<template>
    <q-header :class="{'header': scrolled, 'headerScrolled': !scrolled}">
      <img class="logo" :src="logoImage" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave"  alt="logo" @click="routeToPage(ROUTES.HOME)"/>
      <TabsComponent style="position: absolute; right: 230px"/>
      <q-btn
        aria-label="Menu"
        class="bg-primary q-mr-sm text-white menu"
        label="Mitglied Werden"
        style="border-radius: 20px; min-width: 130px"
      />
    </q-header>
</template>

<script setup lang="ts">
import {inject, PropType, ref} from 'vue';
import TabsComponent from 'components/TabsComponent.vue';
import {RouteRecordRaw} from 'vue-router';
import {RouterService} from 'src/services/RouterService';
import ROUTES from 'src/router/routes';

defineProps({
  scrolled: {
    type: Boolean as PropType<boolean>,
    required: true
  }
});


const logoImage = ref('effekteweb.png');

const handleMouseOver = () => {
  logoImage.value = 'effekteweb2.png';
};

const handleMouseLeave = () => {
  logoImage.value = 'effekteweb.png';
};

const $routerService: RouterService | undefined = inject('$routerService')

/**
 * Routes to a page
 * @param {RouteRecordRaw} page - the page to route to
 * @returns {Promise<void>} - done
 */
async function routeToPage(page: RouteRecordRaw) {
  await $routerService?.routeTo(page)
}

</script>

<style scoped lang="scss">

.menu {
  position: absolute;
  right: 50px;
}

.headerScrolled {
  height: 100px;
  background-color: rgba(7, 7, 7, 0.2);
  display: flex;
  flex-direction: row;
  align-items: center; /* Center items vertically */
  transition: all 0.5s ease;
  backdrop-filter: blur(2px);
}

.header {
  background-color: rgba(7, 7, 7, 0.5);
  display: flex;
  backdrop-filter: blur(20px);
  align-items: center; /* Center items vertically */
  transition: all 0.5s ease;
  height: 85px;
}

.logo {
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 40px;
  height: 160%;
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

</style>
