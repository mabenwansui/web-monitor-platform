<template>
  <div class="box-space">
    <Breadcrumb :data="path" />
    <div class="main">
      <article>
        <div class="map"></div>
      </article>
      <aside class="aside">
        <section class="section-box">
          <div class="title">全国省份</div>
          <div class="info">
            <ul>
              <li>北京 <aside>3s</aside></li>
              <li>上海 <aside>1s</aside></li>
              <li>天津 <aside>2s</aside></li>
              <li>深圳 <aside>4s</aside></li>
            </ul>
          </div>
        </section>
      </aside>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from '@components/Breadcrumb'
  import {charts} from '@common'

  export default {
    name: 'dns-monitor',
    components: {Breadcrumb},
    data(){
      return {
        path: [
          {
            title: 'DNS'
          }
        ]
      }
    },
    mounted(){
      charts.map(document.querySelector('.map'));
    }
  }
</script>

<style lang="less" scoped>
  .main{
    display: flex;
    article{
      flex: 1;
      .map{
        height: 650px;
      }
    }
    .aside{
      width: 180px;
      margin-left: 30px;
      .section-box{
        .info{
          margin-top: 15px;
        }
      }
    }
  }
</style>