<template>
  <form action="">
    <section class="serach">
      <div class="filter">
        <a href="javascript:;" class="active">今天</a>
        <a href="javascript:;">1天</a>
        <a href="javascript:;">2天</a>
        <a href="javascript:;">3天</a>
        <a href="javascript:;">7天</a>
        <span class="time">
          <input type="text" :placeholder="time" class="text"> <i>⎯⎯</i>
          <input type="text" :placeholder="time" class="text">
        </span>
      </div> 
      <aside>
        <Search :submit="submit" placeholderInfo="grep aaa | grep -v bbb | grep -B n -A n ccc | grep -or 3ms -or 5ms" />
      </aside>
    </section>
  </form>
</template>
<script>
  import Search from './Search'
  import {formatDate} from '../common'
  export default {
    name: 'SearchFilter',
    components: {Search},
    data(){
      return {
        time: formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss')
      }
    },
    methods: {      
      submit(){   //arguments = event,value
        
      }
    }
  }
</script>
<style lang="less">
  .serach{
    display: flex;
    justify-content: space-between;  
    margin-bottom: 20px;
    aside{width: 530px;}
  }
  .filter{
    line-height: 30px;
    .text{width: 138px;}
    .time{margin-left: 5px;}
    i{margin: 0 8px;}
    a{
      line-height: 20px;
      color: #232323; display: inline-block; margin-right: 8px; padding: 0 8px;
      border-radius: 20px;
      &.active{
        color: #fff;
        background: #F86C52;
      }
    }
  }
</style>