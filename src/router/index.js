import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/questionary',
    name: 'QuestionnairiesLists',
    component: () => import('@/views/QuestionnairiesLists')
  },
  {
    path: '/questionnary/:id',
    name: 'Questionnary',
    component: () => import('@/views/Questionnary')
  },
  {
    path: '/:id/result',
    name: 'Result',
    component: () => import('@/views/Result')
  },
  {
    path: '/exam',
    name: 'Exam',
    component: () => import('@/views/Exam')
  },
  {
    path: '/examTestPassed',
    name: 'ExamTestPassed',
    component: () => import('@/views/ExamTestPassed')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
