<template>
  <section class="submenu">
    <ul v-if="type" :data-type="type">
      <li
        v-for="(item, index) in list"
        :class="{
          active: active===item.name
        }"
        :key="index"
        :data-name="item.name"
      >
        <router-link :to="item.link">{{item.title}}</router-link>
      </li>
    </ul>
    <ul v-else>
      <li
        v-for="(item, index) in data"
        :class="{
          active: active===item.name
        }"
        :key="index"
        :data-name="item.name"
      >
        <a href="javascript:;" v-if="typeof item.link === 'function'" @click="item.link">{{item.title}}</a>
        <router-link v-else :to="item.link">{{item.title}}</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Nav',
  props: ['type', 'active', 'data'],
  computed: {
    list(){ return this[this.type] }
  },
  data(){
    return {
      jsMonitor: [
        {
          title: 'js错误',
          name: 'js',
          link: '/js-monitor/js-list/fe-h-pc'
        },
        {
          title: '静态资源加载失败',
          name: 'resources',
          link: '/js-monitor/user-list/fe-h-pc'
        },
        {
          title: '用户',
          name: 'user',
          link: '/js-monitor/user-list/fe-h-pc'
        }
      ],
      performanceMonitor: [
        {
          title: '页面性能',
          name: 'page',
          link: '/performance-monitor/fe-pc-h/page-list'
        },
        {
          title: '白屏时间',
          name: 'whitescreenlist',
          link: '/performance-monitor/fe-pc-h/white-screen-list'
        },
        {
          title: '首屏时间',
          name: 'firstscreenlist',
          link: '/performance-monitor/fe-pc-h/first-screen-list'
        },
        {
          title: '资源加载',
          name: 'resourceslist',
          link: '/performance-monitor/fe-pc-h/white-screen-list'
        },
        {
          title: '整页时间',
          name: 'onloadlist',
          link: '/performance-monitor/fe-pc-h/white-screen-list'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
  .submenu{
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
    ul{
      display: flex;
      li{
        margin-right: 40px;
        padding: 0 2px;
        min-width: 40px;
        text-align: center;
        line-height: 30px;
        margin-bottom: -1px;
        a{
          color: #8B8B8B;
          &:hover{
            text-decoration: none;
          }
        }
        &.active{
          border-bottom: 4px solid #F86C52;
          a{color: #2D2F3C;}
        }
      }
    }
  }
</style>
