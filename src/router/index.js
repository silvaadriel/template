import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '',
  		redirect: '/hello-world',
  	},
    {
      path: '/hello-world',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
