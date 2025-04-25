// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/Homepage.vue'
import ServicesPage from '@/views/ServicesPage.vue'
import ProjectsPage from '@/views/ProjectsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'HOME | Northern Virginia Craftsman Homes',
    },
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesPage,
    meta: {
      title: 'SERVICES | Northern Virginia Craftsman Homes',
    },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsPage,
    meta: {
      title: 'PROJECTS | Northern Virginia Craftsman Homes',
    },
  },
  {
    // Catch all route for 404 page
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      title: 'Page Not Found - NVC Homes',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // Scroll behavior to handle scroll position when navigating between routes
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // If there's a saved position (like when using browser back/forward buttons), use it
      return savedPosition
    } else if (to.hash) {
      // If navigating to a hash, scroll to that element
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      // Otherwise, scroll to top of the page
      return { top: 0 }
    }
  },
})

// Update document title based on route meta
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'NVC Homes'
  next()
})

export default router
