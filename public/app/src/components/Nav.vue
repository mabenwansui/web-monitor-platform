<template>
  <section class="menu">
    <div class="logo">
      <i class="iconfont icon-monitor"></i>
    </div>
    <div class="list">
      <ul>
        <li
          v-for="(item, index) in list" :key="index"
          :class="isActive(item.link) && 'active'"
          @click="event=> {active = item.link}"
        >
          <router-link :class="`iconfont ${item.icon}`" :to="item.link" />
          <span class="tips">{{item.title}}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
    isActive(link){
      if(link !== '/' || ''){
        return this.active.includes(link);
      }else{
        return link === this.active;
      }
    }
  },
  data(){
    return {
      list: [
        {
          title: '错误监控',
          icon: 'icon-jiankong',
          link: '/'
        },
        {
          title: '性能监控',
          icon: 'icon-xingnengceshi',
          link: '/performance-monitor/'
        },
        {
          title: 'ajax监控',
          icon: 'icon-ajax',
          link: '/1'
        },
        {
          title: 'dns监控',
          icon: 'icon-ymwz-yjxdns',
          link: '/dns-monitor/'
        },
        {
          title: '埋点监控',
          icon: 'icon-keshihuamaidian',
          link: '/event-tracking/'
        }
      ],
      active: this.$router.history.current.path
    }
  }
}
</script>

<style scoped lang="less">
  .menu{
    width: 100%;
    border-radius: 10px 0 0 10px;
    margin-left: -2px;
    background: #4F5364;
    height: 100%;
    text-align: center;
  }
  .logo{
    margin-top: 8px;
    width: 44px;
    height: 44px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    background: #F86C52;
    .iconfont{
      top: 11px;
      position: relative;
      font-size: 30px;
      &:before{
        color: #fff;
      }
    }
  }
  .list{
    font-size: 12px;
    margin-top: 50px;
    color: #fff;
    li{
      z-index: 10;
      cursor: pointer;
      margin-bottom: 14px;
      height: 34px;
      line-height: 34px;
      margin-left: 5px;
      border-radius: 20px 0 0 20px;
      position: relative;
      a{
        display: inline-block;
        width: 100%;
        height: 100%;
      }
      .tips{
        display: none;
        padding: 0px 14px;
        border-radius: 16px;
        white-space: nowrap;
        line-height: 28px;
        position: absolute;
        left: 60px;
        top: 50%;
        margin-top: -16px;
        background: rgba(79, 83, 100, .9);
        color: #fff;
      }
      &:hover{
        .tips{
          display: inline-block;
        }
      }
      &.active{
        background: #fff;
        border-left: 2px solid #24262E;
        .iconfont:before{
          color: #4F5364;
        }
      }
      a:hover{
        text-decoration: none;
      }
    }
    .iconfont{
      font-size: 24px;
      &:before{
        color: #fff;
        opacity: .8;
      }
      &.icon-xingnengceshi{
        font-size: 22px;
      }
      &.icon-ajax{
        font-size: 19px;
      }
      &.icon-keshihuamaidian{
        font-size: 24px;
      }
    }
  }
</style>
