<template>
  <article class="box">
    <div class="box-space">
      <Breadcrumb :data="path" />
      <section class="header-box">
        <div class="info">
          <aside class="text-gray">2018-06-22 16:05</aside>
          <div class="title">
            <a href="https://h.liepin.com/resumemanage/showmytalentlist">/resumemanage/showmytalentlist</a>
          </div>
          <div class="info-list">
            <dl class="row">
              <dt>报错信息 : </dt>
              <dd>Uncaught QuotaExceededError: Failed to execute 'setItem' on 'Storage': Setting the value of 'conncetJson' exceeded the quota.</dd>
            </dl>
            <dl>
              <dt>现次数 :</dt>
              <dd>10021</dd>
            </dl>
            <dl>
              <dt>用户数 :</dt>
              <dd>103213</dd>
            </dl>
            <dl>
              <dt>Dns耗时 :</dt>
              <dd>20ms</dd>
            </dl>
            <dl>
              <dt>Tcp耗时 :</dt>
              <dd>10ms</dd>
            </dl>
            <dl>
              <dt>Request耗时 :</dt>
              <dd>30ms</dd>
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
      <SubMenu :data="subMenuItems" :active="subMentActive" />
      <section class="timeline" v-if="userbehavior">
        <dl>
          <dt></dt>
          <dd>
            <table>
              <tr>
                <td colspan="2">
                  <span class="label">#body</span>
                  <span class="label">.wrap.box</span>
                  <span class="label">.main</span>
                  <span class="label">@job-manage</span>
                </td>
              </tr>
              <tr>
                <th>event :</th>
                <td>click</td>
              </tr>
              <tr>
                <th>element :</th>
                <td>
                  div<span class="text-warning">[class=wrap box]</span>>div<span class="text-warning">[class=main]</span>>section<span class="text-warning">[class=…s=title]</span>>ul>li<span class="text-warning">[class=,data-selector=job-manage]</span>>a
                </td>
              </tr>
              <tr>
                <th>time :</th>
                <td>2018-06-25 10 :25 :13 :543</td>
              </tr>
            </table>
          </dd>
        </dl>
        <dl>
          <dt></dt>
          <dd>
            <table>
              <tr>
                <th>event :</th>
                <td>click</td>
              </tr>
              <tr>
                <th>element :</th>
                <td>div[class=wrap box]>div[class=main]>section[class=…s=title]>ul>li[class=,data-selector=job-manage]>a</td>
              </tr>
              <tr>
                <th>time :</th>
                <td>2018-06-25 10 :25 :13 :543</td>
              </tr>
            </table>
          </dd>
        </dl>
        <dl>
          <dt></dt>
          <dd>
            <table>
              <tr>
                <th>event :</th>
                <td>click</td>
              </tr>
              <tr>
                <th>element :</th>
                <td>div[class=wrap box]>div[class=main]>section[class=…s=title]>ul>li[class=,data-selector=job-manage]>a</td>
              </tr>
              <tr>
                <th>time :</th>
                <td>2018-06-25 10 :25 :13 :543</td>
              </tr>
            </table>
          </dd>
        </dl>
        <dl>
          <dt></dt>
          <dd>
            <aside>
              <a href="javascript:;" class="btn btn-warning">查看详细</a>
            </aside>
            <table>
              <tr>
                <th>type :</th>
                <td>ajax</td>
              </tr>
              <tr>
                <th>method :</th>
                <td>post</td>
              </tr>
              <tr>
                <th>url :</th>
                <td>h.liepin.com/job/getnewapplyhjoblist4home.json</td>
              </tr>
              <tr>
                <th>time :</th>
                <td>2018-06-25 10:25:13:543</td>
              </tr>
            </table>
          </dd>
        </dl>
        <dl class="active">
          <dt></dt>
          <dd>
            <aside>
              <a href="javascript:;" class="btn btn-warning">查看详细</a>
            </aside>
            <table>
              <tr>
                <th>ReferenceError : </th>
                <td>
                  <p>fwfqweq is not defined</p>
                  <p>at HTMLElement.&gt;anonymous&lt; (home.js:352)</p>
                  <p>at HTMLElement.dispatch (jquery-1.7.1.min.js:3)</p>
                  <p>at HTMLElement.i (jquery-1.7.1.min.js:3)</p>
                </td>
              </tr>
            </table>
          </dd>
        </dl>
      </section>

      <section class="section-box resource-box" v-if="resources">
        <div class="resource-load">
          <table class="table">
            <thead>
              <tr>
                <th>url</th>
                <th class="text-center" width="100">耗时</th>
                <th class="text-center" width="80">大小</th>
                <th class="text-center" width="80">状态</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>https://concat.lietou-static.com/fe-h-pc/v5/static/js/loader.838a2c5d.js</td>
                <td class="text-center">
                  <ProgressBar type="info" html="75ms" value="25%" />
                </td>
                <td class="text-center">1.9KB</td>
                <td class="text-center">200</td>
              </tr>
              <tr>
                <td>https://concat.lietou-static.com/fe-h-pc/v5/static/js/stat.003286da.js</td>
                <td class="text-center">
                  <ProgressBar type="info" html="105ms" value="35%" />
                </td>
                <td class="text-center">1.9KB</td>
                <td class="text-center">200</td>
              </tr>
              <tr>
                <td>https://concat.lietou-static.com/fe-h-pc/v5/static/js/jquery-1.7.1.min.c7e0488b.js</td>
                <td class="text-center">
                  <ProgressBar type="info" html="125ms" value="55%" />
                </td>
                <td class="text-center">1.9KB</td>
                <td class="text-center text-warning">404</td>
              </tr>

            </tbody>
          </table>
        </div>
      </section>
    </div>
    <aside class="aside-user-list">
      <div class="search">
        <Search />
      </div>
      <div class="list">
        <ul>
          <li class="more">more</li>
          <li class="active">
            <a href="javascript:;">
              <p title="fac9ecfb615530881a667e00ad0d9493">用户ID: fac9ecfb6155... </p>
              <p>Chrome/63.0.3239.108  Mac OS X 10_13_1</p>
              <p>北京     2018-06-22 16:50</p>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <p title="fac9ecfb615530881a667e00ad0d9493">用户ID: fac9ecfb6155... </p>
              <p>Chrome/63.0.3239.108  Mac OS X 10_13_1</p>
              <p>北京     2018-06-22 16:50</p>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <p title="fac9ecfb615530881a667e00ad0d9493">用户ID: fac9ecfb6155... </p>
              <p>Chrome/63.0.3239.108  Mac OS X 10_13_1</p>
              <p>北京     2018-06-22 16:50</p>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <p title="fac9ecfb615530881a667e00ad0d9493">用户ID: fac9ecfb6155... </p>
              <p>Chrome/63.0.3239.108  Mac OS X 10_13_1</p>
              <p>北京     2018-06-22 16:50</p>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <p title="fac9ecfb615530881a667e00ad0d9493">用户ID: fac9ecfb6155... </p>
              <p>Chrome/63.0.3239.108  Mac OS X 10_13_1</p>
              <p>北京     2018-06-22 16:50</p>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </article>
</template>

<script>
  import Breadcrumb from '@components/Breadcrumb'
  import Search from '@components/Search'
  import SubMenu from '@components/SubMenu'
  import ProgressBar from '@components/ProgressBar'

  export default {
    name: 'JsDetails',
    components: {Breadcrumb, Search, SubMenu, ProgressBar},
    data(){
      return {
        userbehavior: true,
        resources: false,
        subMentActive: 'userbehavior',
        subMenuItems: [
          {
            title: '用户行为',
            name: 'userbehavior',
            link: ()=> {
              this.userbehavior = true;
              this.resources = false;
              this.subMentActive = 'userbehavior';
            }
          },
          {
            title: '资源加载',
            name: 'resources',
            link: ()=> {
              this.userbehavior = false;
              this.resources = true;
              this.subMentActive = 'resources';
            }
          }
        ],
        path: [
          {
            title: '错误监控',
            url: '/'
          },
          {
            comp: 'port'
          },
          {
            title: 'js-details'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .box{ display:flex; height: 100%; }
  .box-space{ flex: 1; position: relative;}
  .search{padding: 15px 10px; background: #4F5364;}
  .aside-user-list{
    overflow-y: auto;
    min-height: 100%;
    .list{
      width: 300px;
      //height: 100%;
      border-left: 4px solid #eee;
      position: relative;
      .more{
        position: absolute;
        border: none;
        bottom: 0;
        right: 0;
        background: #F86C52;
        color: #fff;
        border-radius: 12px 0 0 0px;
        line-height: 18px;
        padding: 0 5px 1px 10px;
        cursor: pointer;
      }
      li{
        border-bottom: 1px solid #eee;
        padding: 10px 10px 10px 15px;
        a{color: #2D2F3C;}
        &:last-child{
          //border-bottom: none;
        }
        &.active{
          border-left: 4px solid #4F5364;
          position: relative;
          margin-left: -4px;
          &:before{
            content: '';
            position: absolute;
            left: 0;
            top: calc(50% - 6px);
            width:0px; height:0px; line-height:0px;
            border: 6px solid transparent;
            border-left-color: #4F5364;
          }
        }
      }
    }
  }
  .header-box{
    display: flex;
    margin-bottom: 20px;
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
          dt{margin-right: 5px; white-space: nowrap;}
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
      width: 180px;
      text-align: center;
      margin-left: 20px;
      background: #eee;
      border-radius: 10px;
    }
  }
  .timeline{
    border-left: 4px solid #F86C52;
    padding-left: 26px;
    margin-left: 5px;
    border-radius: 8px;
    margin-top: 30px;
    dl{
      position: relative;
      margin-bottom: 20px;
      &:after{
        content: '';
        width: 10px;
        height: 10px;
        position: absolute;
        top: calc(50% - 5px);
        left: -35px;
        overflow: hidden;
        border-radius: 50%;
        background: #fff;
        border: 2px solid #F86C52;
      }
      &.active{
        color: #F86C52;
        dd{
          border: 4px solid #F86C52;
        }
        table{
          th{
            width: 106px;
          }
        }
      }
      dt{}
      dd{
        border-radius: 10px;
        border: 1px solid #eee;
        padding: 10px;
        position: relative;
        aside{
          position: absolute;
          top: 10px;
          right: 12px;
        }
        table{
          th{
            text-align: right;
            padding-right: 5px;
            font-weight: 100;
            width: 60px;
          }
          th, td{
            vertical-align: top;
          }
          .label{
            background: #F86C52;
            border-radius: 5px;
            color: #fff;
            padding: 0 5px 1px 5px;
            float: left;
            margin-right: 10px;
            margin-bottom: 10px;
          }
          i{
            margin: 0 8px;
          }
        }
      }
    }
  }
</style>