import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue' // added
import Router from 'vue-router'
import test1 from '@/components/test1'
import test2 from '@/components/test2'
import info from '@/components/info'
import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added
Vue.use(Router)
Vue.use(BootstrapVue) // added

export default new Router({
  routes: [
    {
      path: '/',
      name: 'info',
      component: info
    },
    {
      path: '/test2',
      name: 'test2',
      component: test2
    },
    {
      path: '/test1',
      name: 'test1',
      component: test1
    }
  ]
})
