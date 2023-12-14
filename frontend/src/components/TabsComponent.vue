<template>
  <div class="tab-buttons">
    <a class="effect" @click="routeToPage(ROUTES.TEAM)">Unser Team</a>
    <a class="effect" @click="routeToPage(ROUTES.ABOUT_US)">Verein</a>
    <a class="effect" @click="routeToPage(ROUTES.PORTFOLIO)">News</a>
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


</script>

<style scoped lang="scss">
@import 'src/css/quasar.variables.scss';
@import url('https://fonts.googleapis.com/css2?family=BIZ+UDPGothic:wght@700&display=swap');

.tab-buttons {
  display: flex;
  justify-content: space-between;
  width: 280px;
}

.effect {
  font-family: 'Urbanist', sans-serif;
  font-weight: bold;
  font-size: 1.1em;
  color: #fdfdfe;
  letter-spacing: 1.3px;
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.3s;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  flex-grow: 1;
  margin: 0.5em; /* Adjust the margin as per your preference */
}

@media screen and (max-width: 1100px) {
  .effect {
    font-size: 0.9em; /* Adjust font size for smaller screens */
  }
  .tab-buttons {
    width: 220px;
  }
}

.effect:hover {
  color: #fff;
  text-shadow: 0 0 15px,
  0 0 25px $primary,
  0 0 30px $primary,
  0 0 50px $primary;
}
</style>
