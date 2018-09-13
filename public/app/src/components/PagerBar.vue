<template>
  <div class="pagerbar">
    <a href="javascript:;" class="active">1</a>
    <a href="javascript:;">2</a>
    <a href="javascript:;">3</a>
    <a href="javascript:;">4</a>
    <a href="javascript:;">5</a>
  </div>
</template>
<script>
  export default {
    name: 'PagerBar'
  }
</script>
<style scoped lang="less">
  .pagerbar{
    margin-top: 20px;
    text-align: center;
    color: #24262E;
    a{
      &.active{
        color: #fff;
        background: #F86C52;
        border-color: #F86C52;
      }
      &:hover{
        border-color: #F86C52;
      }
      display: inline-block;
      line-height: 22px;
      padding: 0 8px;
      margin: 0 5px;
      color: #232323;
      border: 1px solid #F5F5F5;
      border-radius: 50%;
    }
  }
</style>