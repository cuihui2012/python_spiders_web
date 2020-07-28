import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/Login.vue'
import home from '@/views/Home.vue'
import hotSpots from '@/views/HotSpots.vue'
import xianHome from '@/views/XianHome.vue'
import employ from '@/views/Employ.vue'
import exam from '@/views/Exam.vue'
import log from '@/views/Log.vue'
import use from '@/views/Use.vue'
import scheduler from '@/views/Scheduler.vue'
Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'login',
      component: login,
    },{
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {path: '/hotSpots',name: 'hotSpots',component: hotSpots},
        {path: '/xianHome',name: 'xianHome',component: xianHome},
        {path: '/employ',name: 'employ',component: employ},
        {path: '/exam',name: 'exam',component: exam},
        {path: '/log',name: 'log',component: log},
        {path: '/use',name: 'use',component: use},
        {path: '/scheduler',name: 'scheduler',component: scheduler},
      ]
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
