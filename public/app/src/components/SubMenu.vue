<template>
  <section class="submenu">
    <ul>
      <li :class="active==='js' ? 'active' : ''">
        <router-link to="/js-monitor/js-list/fe-h-pc">js错误</router-link>
      </li>
      <li :class="active==='ajax' ? 'active' : ''">
        <router-link to="/js-monitor/ajax-list/fe-h-pc">ajax错误</router-link>
      </li>
      <li>
        <router-link to="/">用户</router-link>
      </li>
      <li>
        <router-link to="/">埋点</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Nav',
  props: ['active'],
  data(){
    //console.log(this.$router.params);
    return {

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
