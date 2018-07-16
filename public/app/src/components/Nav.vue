<template>
  <section class="menu">
    <div class="logo">
      <i class="iconfont icon-monitor"></i>
    </div>
    <div class="list">
      <ul>
        <li class="active">
          <router-link class="iconfont icon-jiankong" to="/"></router-link>
        </li>
        <li>
          <router-link class="iconfont icon-xingnengceshi" to="/"></router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Nav'
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
      cursor: pointer;
      margin-bottom: 14px;
      height: 34px;
      line-height: 34px;
      margin-left: 5px;
      border-radius: 20px 0 0 20px;
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
    }
  }
</style>
