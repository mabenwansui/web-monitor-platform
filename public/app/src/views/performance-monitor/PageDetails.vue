<template>
  <article class="box">
    <div class="box-space">
      <Breadcrumb :data="path" />
      <section class="header-box">
        <div class="info">
          <aside class="text-gray">2018-08-16 16:40 到 2018-08-17 16:40</aside>
          <div class="title">
            <a href="https://h.liepin.com/resumemanage/showmytalentlist">/resumemanage/showmytalentlist</a>
          </div>
          <div class="info-list">
            <dl class="row text-gray">
              <dt><i class="iconfont icon-Page" title="来源"></i></dt>
              <dd title="来源">https://passport.liepin.com/h/account?default=1&url=https://h.liepin.com/</dd>
            </dl>
            <dl>
              <dt>访问数 :</dt>
              <dd>10021</dd>
            </dl>
            <dl>
              <dt>pc访问数 :</dt>
              <dd>93213</dd>
            </dl>
            <dl>
              <dt>移动端访问数 :</dt>
              <dd>3213</dd>
            </dl>
            <dl>
              <dt>用户数 :</dt>
              <dd>103213</dd>
            </dl>
            <dl>
              <dt>内存占用 :</dt>
              <dd>10M</dd>
            </dl>
            <dl>
              <dt>白屏时间 :</dt>
              <dd>100ms</dd>
            </dl>
            <dl>
              <dt>DomReady耗时 :</dt>
              <dd>200ms</dd>
            </dl>
            <dl>
              <dt>OnLoad耗时 :</dt>
              <dd>300ms</dd>
            </dl>
          </div>
        </div>
      </section>

      <section class="section-box-flex">
        <section class="section-box">
          <div class="title">浏览器内核占比</div>
          <div class="chart browser-chart"></div>
        </section>
        <section class="section-box">
          <div class="title">操作系统占比</div>
          <div class="chart system-chart"></div>
        </section>
        <section class="section-box bar-chart">
          <div class="title">渲染性能</div>
          <div class="chart render-chart"></div>
        </section>
      </section>

      <section class="section-box load-chart">
        <div class="title">各节点加载时间</div>
        <div class="pageload-chart"></div>
      </section>

      <section class="section-box resource-box">
        <div class="title">静态资源加载</div>
        <div class="resource-load">
          <SubMenu :active="resourceTabActive" :data="resourceTab" />
          <table class="table">
            <thead>
              <tr>
                <th>url</th>
                <th class="text-center" width="200">耗时</th>
                <th class="text-center" width="80">大小</th>
                <th class="text-center" width="80">类型</th>
                <th class="text-center" width="80">版本号</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>https://concat.lietou-static.com/fe-h-pc/v5/static/js/loader.js</td>
                <td class="text-center">
                  <ProgressBar type="warning" html="75ms" value="25%" />
                </td>
                <td class="text-center">1.9KB</td>
                <td class="text-center">js</td>
                <td class="text-center">c5adr1rt</td>
              </tr>
              <tr>
                <td>https://concat.lietou-static.com/fe-h-pc/v5/css/common/common.css</td>
                <td class="text-center">
                  <ProgressBar type="info" html="150ms" value="50%" />
                </td>
                <td class="text-center">17.9KB</td>
                <td class="text-center">css</td>
                <td class="text-center">eada21rt</td>
              </tr>
              <tr>
                <td>https://concat.lietou-static.com/fe-passport-pc/v5/static/images/logo.png</td>
                <td class="text-center">
                  <ProgressBar type="success" html="300ms" value="100%" />
                </td>
                <td class="text-center">17.9KB</td>
                <td class="text-center">img</td>
                <td class="text-center">eada21rt</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </article>
</template>
<script>

/*
  事件数量
  dom数量
  以及加载时间
*/

  import Breadcrumb from '@components/Breadcrumb'
  import SubMenu from '@components/SubMenu'
  import ProgressBar from '@components/ProgressBar'
  import {charts} from '@common'
  export default {
    name: 'performance-monitor-PageDetails',
    components: {Breadcrumb, SubMenu, ProgressBar},
    data(){
      return {
        path: [
          {
            title: '性能监控',
            url: '/'
          },
          {
            comp: 'port'
          },
          {
            title: '详细'
          }
        ],
        resourceTab: [
          {
            title: 'All',
            name: 'all',
            link(){

            }
          },
          {
            title: 'Js',
            name: 'js',
            link(){

            }
          },
          {
            title: 'Css',
            name: 'css',
            link(){

            }
          },
          {
            title: 'Img',
            name: 'img',
            link(){

            }
          },
          {
            title: '第三方资源',
            name: 'other',
            link(){

            }
          },
          {
            title: '时间线',
            name: 'chart',
            link(){

            }
          }
        ],
        resourceTabActive: 'all'
      }
    },
    mounted(){
      charts.pageloadCharts(document.querySelector('.pageload-chart'));
      charts.browserCharts(document.querySelector('.browser-chart'));
      charts.systemCharts(document.querySelector('.system-chart'));
      charts.pageRenderCharts(document.querySelector('.render-chart'));
    }
  }
</script>

<style scoped lang="less">
  .box{ display:flex; height: 100%; }
  .box-space{ flex: 1; }
  .pageload-chart{
    width: 100%;
    height: 260px;
  }
  .section-box-flex{
    display: flex;
    justify-content: center;
    .section-box{
      flex: 1;
      .chart{
        width: 300px;
        height: 250px;
        margin-top: 30px;
      }
    }
    .bar-chart{
      width: 400px;
      .chart{
        width: 400px;
        height: 330px;
        margin-top: -15px;
      }
    }
  }
  .load-chart{
    margin-top: -20px;
  }
  .resource-box{
    margin-top: 60px;
  }
  .pageload-chart{margin-top: 20px;}
  .resource-load{margin-top: 20px;}

  .header-box{
    display: flex;
    margin-bottom: 40px;
    .info{
      flex: 1;
      padding: 14px 16px;
      border: 4px solid #eee;
      border-radius: 10px;
      position: relative;
      .info-list{
        display: flex;
        flex-wrap: wrap;
        dl{
          display: flex; width: 33%; margin-bottom: 5px;
          dt{
            margin-right: 5px;
            .iconfont{position: relative; left: -2px; top: 1px;}
          }
          &.row{
            width: 100%; margin-bottom: 10px;
          }
        }
      }
      .title{
        margin-bottom: 10px;
        font-size: 14px;
      }
      aside{
        position: absolute;
        right: 16px;
      }
    }
    .aside{
    }
  }
</style>