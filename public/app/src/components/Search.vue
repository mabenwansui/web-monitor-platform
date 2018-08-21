<template>
  <div class="search-box">
    <i class="iconfont icon-sousuo"></i>
    <input type="text" v-model="input" class="text" :placeholder="placeholderInfo">
    <input type="button" class="search-btn" @click="submitHandler" value="搜索">
  </div>
</template>

<script>
  export default {
    name: 'Search',
    props: ['placeholderInfo', 'submit'],
    data(){
      return {
        input: ''
      }
    },
    methods: {
      submitHandler(event){
        this.submit(event, this.input);
      }
    }
  }
</script>

<style scoped lang="less">
  .search-box{
    width: 100%;
    position: relative;
    .text{
      width: 100%;
      padding-right: 50px;
      padding-left: 30px;
    }
    .iconfont{
      position: absolute;
      left: 8px;
      top: 6px;
      color: #ccc;
    }
    .search-btn{
      position: absolute;
      top: 0px;
      right: 0;
      background: #F86C52;
      color: #fff;
      border: none;
      height: 30px;
      padding: 0 10px;
      border-radius: 0 10px 10px 0;
    }
  }
</style>