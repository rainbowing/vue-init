import Vue from 'vue'
import Router from 'vue-router'
import Cart from '@/components/cart'
import Products from "@/components/products"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/products'
    },
    {
    	path:'/products',
    	component:Products,
    	name:'products'
    },
    {
    	path:'/cart',
    	component:Cart,
    	name:'cart'
    }
  ]
})
