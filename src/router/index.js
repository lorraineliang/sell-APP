// 这两项是脚手架默认下载好的模块，导入模块
import Vue from 'vue'
import Router from 'vue-router'
// 路由实例化
Vue.use(Router)
// 这些是需求组件，在路由中导入组件，路径要根据你具体存放的路径写
// 我这里的路径是在webpack里面修改过的，可以不需要../这种的
/* eslint-disable */ 
// 这个注释是eslint忽略检查的提醒，如果在shell弹窗选择时没有使用eslint
// 则不需要有这个注释
const goods = () =>
 import('components/goods/goods')
const ratings = () =>
  import('components/ratings/ratings')
const seller = () =>
  import('components/seller/seller')
// 导出路由
//定义路由规则
export default new Router({
  linkActiveClass: 'active',
  routes: [
    { path: '/', redirect: '/goods'},//重定向
    { path: '/goods', name: 'goods', component: goods },//商品组件
    { path: '/ratings', name: 'ratings', component: ratings },//评论组件
    { path: '/seller', name: 'seller', component: seller }//商家组件
  ]
})
