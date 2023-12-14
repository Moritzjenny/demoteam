<template>
  <div class="footer-container">
    <div class="footer row justify-center">
     <div> © {{ getCurrentYear() }} Demoteam Zuoz</div>&nbsp;<div class="link" @click="routeToPage(ROUTES.IMPRESSUM)">Impressum</div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {inject} from 'vue';
import {RouteRecordRaw} from 'vue-router';
import {RouterService} from 'src/services/RouterService';
import ROUTES from 'src/router/routes';

const $routerService: RouterService | undefined = inject('$routerService')

/**
 * Routes to a page
 * @param {RouteRecordRaw} page - the page to route to
 * @returns {Promise<void>} - done
 */
async function routeToPage(page: RouteRecordRaw) {
  await $routerService?.routeTo(page)
}


function getCurrentYear() {
  const now = new Date();
  return now.getFullYear();
}

</script>

<style scoped lang="scss">

.footer-container {
  display: flex;
  flex-direction: column;
}

.footer {
  width: 100%;
  background-color: #1e1e1e;
  color: #ffffff;
  padding: 30px 0;
  text-align: center;
  font-size: 12px;
  box-shadow: black 0 0 10px 2px;
}

.link {
  cursor: pointer;
  color: #ffffff;
  text-decoration: underline;
}
</style>
