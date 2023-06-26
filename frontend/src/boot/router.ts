import { boot } from 'quasar/wrappers';
import { Router } from 'vue-router';

let routerInstance: Router;

export default boot(({ router }) => {
  routerInstance = router;
});

// Function to get the router instance
// In your router boot file
export function getRouterInstance(): Router {
  if (!routerInstance) {
    throw new Error('Router instance is not yet initialized');
  }
  return routerInstance;
}
