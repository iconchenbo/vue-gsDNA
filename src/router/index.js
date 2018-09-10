/*
* 路由器模块
* */

import Vue from 'vue'
import Router from 'vue-router'

import ExploreIntro from '../pages/Explore_intro/Explore_intro.vue'
import Yourrawdata from '../pages/Yourrawdata/Yourrawdata.vue'
import Uploadyourdata from '../pages/Uploadyourdata/Uploadyourdata.vue'

import Research from '../pages/Research/Research.vue'
import Testarticle from '../pages/Testarticle/Testarticle.vue'
import SpecialColumns from '../pages/Special-columns/Special-columns.vue'
import MyHomepage from '../pages/My-homepage/My-homepage.vue'
import GsLogin from '../pages/Gs-login/Gs-login.vue'
import SocialAvoidance from '../pages/test-content/test-content.vue'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/test/social-avoidance'
    },
    {
      path:'/explore_intro',
      component:ExploreIntro
    },
    {
      path:'/yourrawdata',
      component:Yourrawdata
    },
    {
      path:'/uploadyourdata',
      component:Uploadyourdata
    },
    {
      path: '/research',
      component:Research
    },
    {
      path:'/testarticle',
      component:Testarticle
    },
    {
      path:'/special-columns',
      component:SpecialColumns
    },
    {
      path:'/my-homepage',
      component:MyHomepage
    },
    {
      path:'/gs-login',
      component:GsLogin
    },
    {
      path:'/test/social-avoidance',
      component:SocialAvoidance
    }

  ]
})
