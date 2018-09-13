<template>
  <div class="box-space">
    <Breadcrumb :data="path" />
    <div class="section">
      <article>
        <div class="filter">
          <span class="domain-text">选择域名 :</span>
          <SelectUI :data="[{title: 'concat.lietou-static.com', value: 'concat.lietou-static.com'}]" />

          <span class="domain-text" style="margin-left: 60px;">类型 :</span>
          <SelectUI :data="[{title: '平均加载时间', value: 'agv'}]" />
        </div>
        <div class="map"></div>
      </article>
      <aside class="aside">
        <section class="section-box">
          <div class="title">全国地区</div>
          <div class="list">
            <ul>
              <li>
                <div class="text">
                  北京
                  <div class="aside">4.2s</div>
                </div>
                <div class="pre" style="width: 100%"></div>
              </li>
              <li>
                <div class="text">
                  天津
                  <div class="aside">1s</div>
                </div>
                <div class="pre" style="width: 28%"></div>
              </li>
              <li>
                <div class="text">
                  上海
                  <div class="aside">2.3s</div>
                </div>
                <div class="pre" style="width: 55%"></div>
              </li>
              <li>
                <div class="text">
                  重庆
                  <div class="aside">1.3s</div>
                </div>
                <div class="pre" style="width: 30%"></div>
              </li>
              <li>
                <div class="text">
                  河北
                  <div class="aside">3.5s</div>
                </div>
                <div class="pre" style="width: 70%"></div>
              </li>
              <li>
                <div class="text">
                  北京
                  <div class="aside">4.2s</div>
                </div>
                <div class="pre" style="width: 100%"></div>
              </li>
              <li>
                <div class="text">
                  天津
                  <div class="aside">1s</div>
                </div>
                <div class="pre" style="width: 28%"></div>
              </li>
              <li>
                <div class="text">
                  上海
                  <div class="aside">2.3s</div>
                </div>
                <div class="pre" style="width: 55%"></div>
              </li>
              <li>
                <div class="text">
                  重庆
                  <div class="aside">1.3s</div>
                </div>
                <div class="pre" style="width: 30%"></div>
              </li>
              <li>
                <div class="text">
                  河北
                  <div class="aside">3.5s</div>
                </div>
                <div class="pre" style="width: 70%"></div>
              </li>
              <li>
                <div class="text">
                  北京
                  <div class="aside">4.2s</div>
                </div>
                <div class="pre" style="width: 100%"></div>
              </li>
              <li>
                <div class="text">
                  天津
                  <div class="aside">1s</div>
                </div>
                <div class="pre" style="width: 28%"></div>
              </li>
              <li>
                <div class="text">
                  上海
                  <div class="aside">2.3s</div>
                </div>
                <div class="pre" style="width: 55%"></div>
              </li>
              <li>
                <div class="text">
                  重庆
                  <div class="aside">1.3s</div>
                </div>
                <div class="pre" style="width: 30%"></div>
              </li>
              <li>
                <div class="text">
                  河北
                  <div class="aside">3.5s</div>
                </div>
                <div class="pre" style="width: 70%"></div>
              </li>
            </ul>
          </div>
        </section>
      </aside>
    </div>
    <div class="section">
      <section class="section-box">
        <div class="title">曲线图</div>
      </section>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from '@components/Breadcrumb'
  import SelectUI from '@components/SelectUI'
  import {charts} from '@common'

  export default {
    name: 'dns-monitor',
    components: {Breadcrumb, SelectUI},
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
  .filter{
    padding-bottom: 30px;
    font-size: 14px;
    .domain-text{margin-right: 10px;}
  }
  .section{
    display: flex;
    article{
      flex: 1;
      .map{
        height: 650px;
      }
    }
    &>.aside{
      width: 180px;
      margin-left: 30px;
      .section-box{
        .info{
          margin-top: 15px;
        }
      }

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
</style>