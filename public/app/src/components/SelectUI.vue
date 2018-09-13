<template>
  <div :class="{
      'select-ui': true,
      active: isDrop
    }">
    <input type="hidden" name="" />
    <div class="select-head" @click.stop="drop">
      {{data[0].title}}
      <div class="arrow"><i class="iconfont icon-xiala"></i></div>
    </div>
    <div class="select-info">
      <ul>
        <li v-for="(item, index) in data" :key="index" @click.stop="event=> {clickHandle(event, item)}">{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'SelectUI',
    props: ['data', 'select'],
    methods: {
      drop(){
        this.isDrop = true;
      },
      documentEventFunc(){
        this.isDrop = false;
      },
      clickHandle(){
        //this.select(item);
      }
    },
    mounted(){
      document.addEventListener('click', this.documentEventFunc, false);
    },
    destroyed(){
      document.removeEventListener('click', this.documentEventFunc, false);
    },
    data(){
      return {
        isDrop: false
      }
    }
  }
</script>

<style scoped lang="less">
  .select-ui{
    display: inline-block;
    position: relative;
    font-size: 12px;
    font-weight: normal;
    text-align: left;
    &.active{
      z-index: 10;
      .select-info{display: block;}
      .select-head{
        border-radius: 5px 5px 0 0;
      }
    }
    .select-head{
      border: 1px solid #eee;
      border-radius: 5px;
      box-shadow: 0 0 2px rgba(0, 0, 0, .1);
      line-height: 28px;
      padding: 0 30px 0 10px;
      position: relative;
      cursor: pointer;
      background: #fff;
    }
    .arrow{
      position: absolute;
      top: 1px;
      right: 0;
      i{padding: 0 8px; margin: 0;}
    }
    .select-info{
      width: 100%;
      display: none;
      position: absolute; left: 0; margin-top: 0px;
      background: #fff;
      border: 1px solid #eee;
      border-top: none;
      padding: 5px 0;
      li{
        cursor: pointer;
        padding: 0 10px;
        line-height: 26px;
        &:hover{
          color: #fff;
          background: #5897FF;
        }
      }
    }
  }
</style>