import {RouterService} from 'src/services/RouterService';
import {inject} from 'vue';
import {RouteRecordRaw} from 'vue-router';

const $routerService: RouterService | undefined = inject('$routerService')

/**
 * Routes to a page
 * @param {RouteRecordRaw} page - the page to route to
 * @returns {Promise<void>} - done
 */
export async function routeToPage(page: RouteRecordRaw) {
  await $routerService?.routeTo(page)
}
