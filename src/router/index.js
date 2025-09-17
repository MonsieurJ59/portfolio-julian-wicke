import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Accueil | Julian Wicke - Développeur Web Full Stack'
    }
  },
  {
    path: '/experiences',
    name: 'experiences',
    component: () => import('../views/Experiences.vue'),
    meta: {
      title: 'Expériences Professionnelles | Julian Wicke'
    }
  },
  {
    path: '/formations',
    name: 'formations',
    component: () => import('../views/Formations.vue'),
    meta: {
      title: 'Formation & Diplômes | Julian Wicke'
    }
  },
  {
    path: '/projets',
    name: 'projets',
    component: () => import('../views/Projets.vue'),
    meta: {
      title: 'Mes Projets | Julian Wicke'
    }
  },
  // Redirection vers la page d'accueil pour les routes inconnues
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 100 // Offset pour la navbar fixe
      }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Mise à jour du titre de la page
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Julian Wicke - Développeur Web Full Stack'
  next()
})

export default router
