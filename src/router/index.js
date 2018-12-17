import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import News from '@/components/news'
import Message from '@/components/message'
import Detail from '@/pages/detail'
import Nav from '@/pages/nav'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      // 1、根页面设置多入口路由
      components: {
        default:HelloWorld,
        nav:Nav
      },
      // 2.1 页面重定向，默认显示news/级路由页面
      redirect:"news",
      // 嵌套子级路由设置
      children:[
        {
          path:'home',
          name:'home',
          // 1.1 子级页面设置多入口路由
          components:{
            default:Home,
            a:Detail
          }
        },
        {
          path:'news',
          name:'news',
          component:News
        },
        {
          path:'message',
          name:'message',
          component:Message
        },
        {
          path: '*',
          redirect: '/home'
        }
      ]
    },
    {
      path:'/detail',
      name:"detail",
      component:Detail
    },
    // 2、页面重定向，url都不匹配时，重定向到/hello/message路由页面
    {
      path: '*',
      redirect: '/hello/home'
    }
  ]
})
