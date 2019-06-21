import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'
import Topic from '@/pages/topic'
import Post from '@/pages/post'
import Message from '@/pages/message'
import Me from '@/pages/me'
import Login from '@/pages/login'
// import List from '@/pages/list'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requireAuth: false,
        keepAlive: true// 需要被缓存
      }
    },
    {
      path: '/post',
      name: 'post',
      component: Post,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/me',
      name: 'me',
      component: Me,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/topci/:id',
      name: 'Topic',
      component: Topic,
      meta: {
        requireAuth: false,
        keepAlive: true // no需要被缓存
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requireAuth: false
      }
    }

  ]
})