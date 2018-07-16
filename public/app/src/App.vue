<template>
  <div class="app">
    <div class="menu-box"><Nav /></div>
    <div class="main-box"><router-view /></div>
  </div>
</template>

<script>
  import Nav from '@components/Nav'
  export default {
    name: 'Breadcrumb',
    components: {Nav},
    props: ['port']
  }
</script>

<style scoped lang="less">
  .app{
    width: 1200px;
    //min-height: calc(100% - 60px);
    min-height: 100%;
    display: flex;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin: 0 auto 30px;
    background: #fff;
  }
  .menu-box{
    width: 60px;
  }
  .main-box{
    flex: 1;
    //padding: 20px 28px 30px 28px;
  }
</style>
