<template>
  <div class="main-container">
    <section class="header">
      <SelectPort />
    </section>
    <section class="app">
      <div class="menu-box"><Nav /></div>
      <div class="main-box">
        <div class="main-port-list" style="display: none;">
          <ul>
            <li>fe-h-pc</li>
            <li>fe-msk-pc</li>
            <li>fe-mskh-pc</li>
            <li>fe-mskclt-pc</li>
            <li>fe-clt-pc</li>
            <li>fe-c-pc</li>
            <li>fe-rpo-pc</li>
            <li>fe-lpt-pc</li>
          </ul>
        </div>
        <router-view />
      </div>
    </section>
  </div>
</template>

<script>
  import Nav from '@components/Nav'
  import SelectPort from '@components/SelectPort'
  export default {
    name: 'Breadcrumb',
    components: {Nav, SelectPort},
    props: ['port']
  }
</script>

<style scoped lang="less">
  .main-container{
    height: 100%;
  }
  .header{
    margin-bottom: 8px;
  }
  .app{
    width: 1200px;
    min-height: calc(100% - 30px);
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
  }
</style>
