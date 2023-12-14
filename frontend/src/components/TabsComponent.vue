<template>
  <q-space/>

  <div v-if="showHamburgerMenu" id="nav-icon4" class="q-mr-lg" :class="{'open': isHamburgerOpen}" @click="isHamburgerOpen = !isHamburgerOpen">
    <span></span>
    <span></span>
    <span></span>
  </div>

  <div class="tab-buttons q-mr-md"  v-if="!showHamburgerMenu">
    <a class="effect" @click="routeToPage(ROUTES.HOME)">Home</a>
    <a class="effect" @click="routeToPage(ROUTES.TEAM)">Unser Team</a>
    <a class="effect" @click="routeToPage(ROUTES.VEREIN)">Verein</a>
  </div>

  <div class="mobile-menu" v-if="isHamburgerOpen">
    <a style="margin-top: 20px" class="effect" @click="routeToPage(ROUTES.HOME); isHamburgerOpen = !isHamburgerOpen">Home</a>
    <a class="effect" @click="routeToPage(ROUTES.TEAM); isHamburgerOpen = !isHamburgerOpen">Unser Team</a>
    <a class="effect" @click="routeToPage(ROUTES.VEREIN); isHamburgerOpen = !isHamburgerOpen">Verein</a>
    <div style="display: flex; justify-content: center;">
      <q-btn
        aria-label="Menu"
        class="bg-primary q-mx-lg q-mt-lg q-mb-xl text-white"
        label="Mitglied Werden"
        style="border-radius: 20px; min-width: 130px;"
        @click="openDialog($q)"
      />
    </div>
  </div>

  <q-btn
    aria-label="Menu"
    class="bg-primary q-mr-lg text-white menu"
    v-if="!showHamburgerMenu"
    label="Mitglied Werden"
    style="border-radius: 20px; min-width: 130px"
    @click="openDialog($q)"
  />


  <BlurredBackgroundComponent v-if="isHamburgerOpen"/>
</template>

<script setup lang="ts">
import {inject, onMounted, onUnmounted, ref} from 'vue';
import {RouteRecordRaw} from 'vue-router';
import {RouterService} from 'src/services/RouterService';
import ROUTES from 'src/router/routes';
import {openDialog} from 'src/helper/dialog-helper';
import {useQuasar} from 'quasar';
import BlurredBackgroundComponent from 'components/BlurredBackgroundComponent.vue';

const isHamburgerOpen = ref(false);
const showHamburgerMenu = ref(window.innerWidth <= 900);

const $q = useQuasar()

const updateHamburgerMenuVisibility = () => {
  showHamburgerMenu.value = window.innerWidth <= 900;
  window.innerWidth > 900 && (isHamburgerOpen.value = false);
}


onMounted(() => {
  window.addEventListener('resize', updateHamburgerMenuVisibility);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateHamburgerMenuVisibility);
});


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
  width: 260px;
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


.mobile-menu {
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  background-color: #1f1f1f;
  transition: .25s ease;
  a {
    padding: 1em;
    text-decoration: none;
    display: block;

  }
}

@media screen and (max-width: 900px) {
  .tab-buttons {
    display: none;
  }
  .hamburger-menu {
    display: flex;
  }
  .mobile-menu {
    display: block;
  }
  .effect {
    font-size: 1em; /* Adjust font size for smaller screens */
  }
}

#nav-icon4-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

#nav-icon4 {
  width: 60px;
  height: 45px;
  position: absolute;
  top: 20px;
  right: 0px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
  z-index: 1;
}

#nav-icon4 span {
  display: block;
  position: absolute;
  height: 9px;
  width: 100%;
  background: #ffffff;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

/* Icon 4 */

#nav-icon4 span:nth-child(1) {
  top: 0px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon4 span:nth-child(2) {
  top: 18px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon4 span:nth-child(3) {
  top: 36px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon4.open span:nth-child(1) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: -3px;
  left: 8px;
}

#nav-icon4.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}

#nav-icon4.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 39px;
  left: 8px;
}

</style>
