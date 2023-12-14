<template>
  <router-view />
</template>

<script setup lang="ts">
import {provide} from 'vue';
import { RouterService } from './services/RouterService';
import {useQuasar} from 'quasar';

// Quasar
const $q = useQuasar()
provide('$q', $q)


// Router service ('as unknown' is needed, since linter doesn't seem to understand router instance as parameter)
const $routerService = new RouterService();
provide('$routerService', $routerService);

</script>
