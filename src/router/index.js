import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
/* eslint-disable */
const goods = () =>
 import('components/goods/goods')
const ratings = () =>
  import('components/ratings/ratings')
const seller = () =>
  import('components/seller/seller')

export default new Router({
  linkActiveClass: 'active',
  routes: [
    { path: '/', redirect: '/goods'},//重定向
    { path: '/goods', name: 'goods', component: goods },//商品组件
    { path: '/ratings', name: 'ratings', component: ratings },//评论组件
    { path: '/seller', name: 'seller', component: seller }//商家组件
  ]
})
