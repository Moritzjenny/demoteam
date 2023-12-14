import { RouteRecordRaw } from 'vue-router';

const routes: Record<string, RouteRecordRaw> = {
  HOME: {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  TEAM: {
    path: '/team',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/TeamPage.vue') }],
  },
  VEREIN: {
    path: '/verein',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/VereinPage.vue') }],
  },
  IMPRESSUM: {
    path: '/impressum',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ImpressumPage.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  ERROR: {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
};

export default routes;
