<template>
  <div class="pagerbar">
    <a href="javascript:;">
      加载更多
      <small><em>1</em> / 1100</small>
    </a>
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
        background: #F86C52;
        color: #fff;
        small{
          color: #fff;
          em{color: #fff;}
        }
      }
      display: inline-block;
      line-height: 22px;
      padding: 8px 30px;
      margin: 0 5px;
      color: #232323;
      border: 1px solid #eee;
      border-radius: 4px;
      font-size: 14px;
      small{
        font-size: 12px;
        color: #8B8B8B;
        margin-left: 14px;
        em{
          color: #F86C52;
        }
      }
    }
  }
</style>