import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Experience from './views/Experiences.vue'
import Education from './views/Educations.vue'
import Projects from './views/Projects.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/experiences',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/educations',
    name: 'Education',
    component: Education
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router