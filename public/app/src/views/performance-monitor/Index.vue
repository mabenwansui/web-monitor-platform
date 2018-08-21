<template>
  <div class="box-space">
    <Breadcrumb :data="path" />
    <div class="main">
      <article class="article">
        <div class="charts-list">
          <dl class="screen">
            <dt></dt>
            <dd><router-link to="/performance-monitor/fe-pc-h/page-list">首屏时间</router-link></dd>
          </dl>
          <dl class="resource">
            <dt></dt>
            <dd><router-link to="/performance-monitor/fe-pc-h/resource-list">资源加载时间</router-link></dd>
          </dl>
          <dl class="ajax">
            <dt></dt>
            <dd><router-link to="/js-monitor/js-list/fe-h-pc">ajax性能</router-link></dd>
          </dl>
          <dl class="pageload">
            <dt></dt>
            <dd><router-link to="/js-monitor/js-list/fe-h-pc">整页加载时间</router-link></dd>
          </dl>
        </div>
      </article>
      <aside class="aside">
        <section class="section-box">
          <div class="title">访问平均时间</div>
          <div class="list">
            <ul>
              <li>
                <div class="text">
                  h.liepin.com
                  <div class="aside">4.2s</div>
                </div>
                <div class="pre" style="width: 100%"></div>
              </li>
              <li>
                <div class="text">
                  clt.liepin.com
                  <div class="aside">1s</div>
                </div>
                <div class="pre" style="width: 28%"></div>
              </li>
              <li>
                <div class="text">
                  c.liepin.com
                  <div class="aside">2.3s</div>
                </div>
                <div class="pre" style="width: 55%"></div>
              </li>
              <li>
                <div class="text">
                  msk.liepin.com
                  <div class="aside">1.3s</div>
                </div>
                <div class="pre" style="width: 30%"></div>
              </li>
              <li>
                <div class="text">
                  lpt.liepin.com
                  <div class="aside">3.5s</div>
                </div>
                <div class="pre" style="width: 70%"></div>
              </li>
            </ul>
          </div>
        </section>
      </aside>
    </div>
  </div>
</template>
<script>
  import Breadcrumb from '@components/Breadcrumb'
  import SubMenu from '@components/SubMenu'
  import {charts} from '@common'

  export default {
    name: 'performance-monitor',
    components: {Breadcrumb, SubMenu},
    data(){
      return {
        path: [
          {
            title: '性能监控',
            url: '/'
          },
          {
            title: 'h.liepin.com'
          }
        ]
      }
    },
    mounted(){
      charts.performanceMonitorCharts(document.querySelector('.screen dt'));
      charts.performanceMonitorCharts(document.querySelector('.ajax dt'));
      charts.performanceMonitorCharts(document.querySelector('.resource dt'));
      charts.performanceMonitorCharts(document.querySelector('.pageload dt'));
    }
  }
</script>
<style scoped lang="less">
  .main{
    display: flex;
    .article{
      flex: 1;
    }
    &>.aside{
      width: 210px;
      margin-left: 30px;
      .list{
        margin-top: 20px;
        li{
          cursor: pointer;
          position: relative;
          height: 22px;
          background: #4F5364;
          border-radius: 5px;
          overflow: hidden;
          margin-bottom: 10px;
          color: #fff;
          &:hover{
            opacity: .8;
          }
          &.active{
            color: #fff;
            .pre{
              background: #F86C52;
            }
            &:before{
              border-right-color: #fff;
            }
          }
          &:before{
            content: "";
            display: block;
            position: absolute;
            z-index: 2;
            width:0px; height:0px; line-height:0px;
            top: 50%;
            left: 2px;
            margin-top: -3px;
            border: 3px solid transparent;
            border-right-color: #fff;
          }
          .text{
            margin: 0 10px 0 15px;
            line-height: 20px;
            position: relative;
            z-index: 2;
            .aside{
              position: absolute;
              right: 0;
              top: 0;
              height: 100%;
            }
          }
          .pre{
            top: 0;
            left: 0;
            content: '';
            position: absolute;
            height: 100%;
            width: 30%;
            background: #F86C52;
          }
        }
      }
    }
  }

  .charts-list{
    display: flex; flex-flow: row wrap;
    margin-bottom: -50px;
    dl{
      width: 380px;
      margin: 0 50px 60px 0;
      &:nth-child(2n){
        margin-right: 0;
      }
      dt{
        width: 100%;
        height: 250px;
      }
      dd{
        text-align: center;
        font-size: 14px;
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