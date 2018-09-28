import Vue from 'vue'
import Router from 'vue-router'
import Index from '@views/js-monitor/Index'
import JsList from '@views/js-monitor/JsList'
import AjaxList from '@views/js-monitor/AjaxList'
import UserList from '@views/js-monitor/UserList'
import JsDetails from '@views/js-monitor/JsDetails'
//import JsDetails from '@views/js-monitor/JsDetails'


import AjaxDetails from '@views/js-monitor/AjaxDetails'
import UserDetails from '@views/js-monitor/UserDetails.vue'
import PerformanceMonitor from '@views/performance-monitor/Index'
import PageList from '@views/performance-monitor/PageList'
import PageDetails from '@views/performance-monitor/PageDetails'
import WhiteScreenList from '@views/performance-monitor/WhiteScreenList'
import FirstScreenList from '@views/performance-monitor/FirstScreenList'


import ResourceDetails from '@views/performance-monitor/ResourceDetails'
import DnsMonitor from '@views/dns-monitor/Index'
import CustomList from '@views/js-monitor/CustomList'

import EventTracking from '@views/event-tracking/Index'
import EventTrackingList from '@views/event-tracking/EventTrackingList'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/js-monitor/js-list/:port',
      component: JsList
    },
    {
      path: '/js-monitor/ajax-list/:port',
      component: AjaxList
    },
    {
      path: '/js-monitor/user-list/:port',
      component: UserList
    },
    {
      path: '/js-monitor/custom-list/:port',
      component: CustomList
    },
    {
      path: '/js-monitor/:port/js-details/:id',
      component: JsDetails
    },
    {
      path: '/js-monitor/:port/ajax-details/:id',
      component: AjaxDetails
    },
    {
      path: '/js-monitor/:port/user-details/:id',
      component: UserDetails
    },
    {
      path: '/performance-monitor/',
      component: PerformanceMonitor
    },
    {
      path: '/performance-monitor/:port/page-list',
      component: PageList
    },
    {
      path: '/performance-monitor/:port/page-details',
      component: PageDetails
    },
    {
      path: '/performance-monitor/:port/white-screen-list',
      component: WhiteScreenList
    },
    {
      path: '/performance-monitor/:port/first-screen-list',
      component: FirstScreenList
    },
    {
      path: '/performance-monitor/:port/resource-details',
      component: ResourceDetails
    },
    {
      path: '/dns-monitor/',
      component: DnsMonitor
    },
    {
      path: '/event-tracking/',
      component: EventTracking
    },
    {
      path: '/event-tracking/list/',
      component: EventTrackingList
    },
  ]
})


//eventTracking