<template>
  <div class="box-space">
    <Breadcrumb :data="path" />
    <div class="charts-list">
      <dl class="fe-h-pc">
        <dt></dt>
        <dd class="filter-bar">
          <SelectUI :data="[
            {title: '1天前', value: '1'},
            {title: '2天前', value: '2'},
            {title: '3天前', value: '3'},
            {title: '4天前', value: '4'},
            {title: '5天前', value: '5'},
            {title: '6天前', value: '6'},
            {title: '7天前', value: '7'},
          ]" />
          <a href="javascript:;" class="btn iconfont icon-close-circle"></a>
        </dd>
        <dd><router-link to="/js-monitor/js-list/fe-h-pc">FE-H-PC</router-link></dd>
      </dl>
      <dl class="fe-c-pc">
        <dt></dt>
        <dd class="filter-bar">
          <SelectUI :data="[
            {title: '1天前', value: '1'},
            {title: '2天前', value: '2'},
            {title: '3天前', value: '3'},
            {title: '4天前', value: '4'},
            {title: '5天前', value: '5'},
            {title: '6天前', value: '6'},
            {title: '7天前', value: '7'},
          ]" />
          <a href="javascript:;" class="btn iconfont icon-close-circle"></a>
        </dd>
        <dd><router-link to="/js-monitor/js-list/fe-h-pc">FE-C-PC</router-link></dd>
      </dl>
      <dl class="add">
        <dt></dt>
      </dl>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from '@components/Breadcrumb'
  import SelectUI from '@components/SelectUI'
  import {charts} from '@common'

  export default {
    name: 'Index',
    components: {Breadcrumb, SelectUI},
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
    display: flex; flex-flow: row wrap; margin-bottom: -20px;
    .add{
      cursor: pointer;
      background: #F2F2F2;
      border-radius: 10px;
      transform: scale(.8);
      height: 270px;
      dt{
        &:before,
        &:after{
          content: '';
          background: #F86C52;
          overflow: hidden;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%)
        }
        &:before{
          width: 100px;
          height: 6px;
        }
        &:after{
          width: 6px;
          height: 100px;
        }
      }
    }
    dl{
      width: 510px;
      margin: 0 30px 30px 0;
      position: relative;
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
        &.filter-bar{
          position: absolute; top: 15px; right: 35px;
          .btn{
            font-weight: normal;
            margin-left: 20px;
            width: auto;
            font-size: 20px;
            position: relative;
            top: 3px;
            color: #999;
            &:hover{
              color: #4A90E2;
            }
          }
        }
      }
    }
  }
</style>