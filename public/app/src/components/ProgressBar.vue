<template>
  <span :class="'progress '+color">
    <span class="text">{{html}}</span>
    <span class="bar" :style="val"></span>
  </span>
</template>
<script>
  export default {
    name: 'ProgressBar',
    props: ['html', 'value', 'type'],
    computed: {
      color(){
        return this.type || 'default';
      },
      val(){
        return `width:${this.value}`
      }
    }
  }
</script>
<style scoped lang="less" >
  .progress{
    width: 100%;
    background: #F5F5F5;
    height: 16px;
    display: block;
    border-radius: 14px;
    overflow: hidden;
    position: relative;
    &.error{
      .bar{background: #E08F81;}
    }
    &.light{
      .bar{background: #6AE0E0;}
    }
    &.warning{
      .bar{background: #FEC584;}
    }
    &.info{
      .bar{background: #82B5FC;}
    }
    &.success{
      .bar{background: #C5ECB0;}
    }
    &.mystery{
      .bar{background: #C49AE8;}
    }
    &.default{
      color: #fff;
      background: #4F5364;
      .bar{background: #F86C52;}
    }

    .text{position: absolute; width: 100%; line-height: 16px; left: 0;}
    .bar{
      display: block;
      height: 100%;
      background: #F86C52;
    }
  }
</style>