<template>
  <div :class="{
    container: true,
    clearfix: true,
    active
  }">
    <section class="list">
      <div class="title">
        选择域名
        <input type="text" class="text" placeholder="域名" />
      </div>
      <!-- 按常用进行排序 最常用的排在前面 -->
      <ul>
        <li><a @click="choose" href="#" class="active">h.liepin.com</a></li>
        <li><a @click="choose" href="#">msk.liepin.com</a></li>
        <li><a @click="choose" href="#">msk-h.liepin.com</a></li>
        <li><a @click="choose" href="#">rpo.lietou.com</a></li>
        <li><a @click="choose" href="#">lpt.liepin.com</a></li>
        <li><a @click="choose" href="#">clt.liepin.com</a></li>
        <li><a @click="choose" href="#">ats.liepin.com</a></li>
        <li><a @click="choose" href="#">pro.lietou.com</a></li>
        <li><a @click="choose" href="#">pro.lietou.com</a></li>
        <li><a @click="choose" href="#">pro.lietou.com</a></li>
        <li><a @click="choose" href="#">pro.lietou.com</a></li>
        <li><a @click="choose" href="#">pro.lietou.com</a></li>
        <li><a @click="choose" href="#">pro.lietou.com</a></li>
        <li><a @click="choose" href="#">pro.lietou.com</a></li>
        <li><a @click="choose" href="#">pro.lietou.com</a></li>
        <li><a @click="choose" href="#">pro.lietou.com</a></li>
      </ul>
    </section>
    <section class="port-bar">
      <div class="port-btn" @click="clickHandle">
        <i class="iconfont icon-xiala"></i>h.liepin.com
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    name: 'SelectPort',
    data(){
      return {
        list: [
          {
            name: 'H',
            domain: 'http://h.liepin.com'
          }
        ],
        active: false
      }
    },
    methods: {
      choose(){
        this.active = false;
      },
      clickHandle(){
        this.active = !this.active;
      }
    }
  }
</script>
<style scoped lang="less">
  .container{
    width: 100%;
    position: relative;
    &.active{
      .list{height: auto;}
      .port-btn{
        background: #4F5364;
        i{
          transform: rotate(180deg);
        }
      }
    }
  }
  .title{
    padding: 8px 0 8px 40px;
    background: #F86C52;
    font-size: 14px;
    input{
      border: none; margin-left: 10px;
      font-size: 12px;
      border-radius: 20px;
      height: 28px;
      padding-left: 12px;
      width: 200px;
    }
  }
  .list{
    height: 0px; overflow: hidden; background: #4F5364; color: #fff;
    ul{
      display: flex;
      flex-wrap: wrap;
      padding: 10px 30px;
      li{
        line-height: 28px;
        margin: 8px 10px;
        a{
          display: inline-block;
          color: #fff;
          font-size: 14px;
          border-radius: 16px;
          padding: 0 10px;
          background: #2D2F3C;
          &.active,
          &:hover{
            background: #F86C52;
          }
        }
      }
    }
  }
  .port-btn{
    float: right;
    line-height: 18px;
    padding: 0 10px 3px 6px;
    color: #fff;
    cursor: pointer;
    font-size: 12px;
    border-radius: 0 0 10px 10px;
    background: #F86C52;
    user-select: none;
    i{
      transition: all .3s ease-out;
      display: inline-block;
      position: relative;
      margin-right: 2px;
      top: 2px;
    }
  }
  .port-bar{
    width: 1200px;
    margin: 0 auto;
  }
</style>