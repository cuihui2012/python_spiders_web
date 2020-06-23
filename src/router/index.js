import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/Login.vue'
import home from '@/views/Home.vue'
import hotSpots from '@/views/HotSpots.vue'
import organ from '@/views/Organ.vue'
import role from '@/views/Role.vue'
import tag from '@/views/Tag.vue'
import task from '@/views/Task.vue'
import use from '@/views/Use.vue'
import user from '@/views/User.vue'
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
        {path: '/organ',name: 'organ',component: organ},
        {path: '/role',name: 'role',component: role},
        {path: '/tag',name: 'tag',component: tag},
        {path: '/task',name: 'task',component: task},
        {path: '/use',name: 'use',component: use},
        {path: '/user',name: 'user',component: user},
      ]
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
