<template>
  <div class="box-space">
    <Breadcrumb :data="path" />
    <div class="charts-list">
      <dl class="fe-h-pc">
        <dt></dt>
        <dd><router-link to="/js-monitor/js-list/fe-h-pc">FE-H-PC</router-link></dd>
      </dl>
      <dl class="fe-c-pc">
        <dt></dt>
        <dd><router-link to="/js-monitor/js-list/fe-h-pc">FE-C-PC</router-link></dd>
      </dl>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from '@components/Breadcrumb'
  import {charts} from '@common'

  export default {
    name: 'Index',
    components: {Breadcrumb},
    data(){
      return {
        path: [
          {
            title: '错误监控'
          }
        ]
      }
    },
    mounted(){
      charts.jsMonitorCharts(document.querySelector('.fe-h-pc dt'));
      charts.jsMonitorCharts(document.querySelector('.fe-c-pc dt'));
    }
  }
</script>

<style lang="less" scoped>
  .charts-list{
    display: flex; flex-flow: row wrap;
    dl{
      width: 510px;
      margin: 0 30px 60px 0;
      &:nth-child(2){
        margin-right: 0;
      }
      dt{
        width: 100%;
        height: 300px;
      }
      dd{
        text-align: center;
        font-weight: bold;
        font-size: 16px;
        margin-top: -20px;
        position: relative;
        z-index: 10;
        a{
          display: inline-block;
          width: 100%;
          height: 100%;
          &:hover{
            text-decoration: none;
          }
        }
      }
    }
  }
</style>