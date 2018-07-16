import Vue         from 'vue'
import Router      from 'vue-router'
import Index       from '@views/js-monitor/Index.vue'
import JsList      from '@views/js-monitor/JsList.vue'
import AjaxList    from '@views/js-monitor/AjaxList.vue'
import JsDetails   from '@views/js-monitor/JsDetails.vue'
import AjaxDetails from '@views/js-monitor/AjaxDetails.vue'
import UserDetails from '@views/js-monitor/UserDetails.vue'

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
    }
  ]
})
