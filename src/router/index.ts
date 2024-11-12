import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import ordernow from '../views/Order-now.vue'
import productinfo from '../views/Productinfo.vue'
import ordersummary from '../views/Ordersummary.vue'
import orderreceived from '../views/Orderreceived.vue'
import loyaltypoints from '../views/Loyaltypoints.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/ordernow',
    name: 'ordernow',
    component: ordernow
  },
  {
    path: '/productinfo',
    name: 'productinfo',
    component: productinfo
  },
  {
    path: '/ordersummary',
    name: 'ordersummary',
    component: ordersummary
  },
  {
    path: '/orderreceived',
    name: 'orderreceived',
    component: orderreceived
  },
  {
    path: '/loyaltypoints',
    name: 'loyaltypoints',
    component: loyaltypoints
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
