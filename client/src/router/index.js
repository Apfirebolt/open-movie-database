import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import LoginPage from '../pages/auth/Login.vue'
import RegisterPage from '../pages/auth/Register.vue'
import SearchPage from '../pages/movie/SearchMovie.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },

    {
      path: '/register',
      name: 'Register',
      component: RegisterPage
    },

    {
      path: '/search',
      name: 'Search',
      component: SearchPage
    },
  ]
})