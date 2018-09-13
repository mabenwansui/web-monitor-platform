<template>
  <article class="box">
    <div class="box-space">
      <Breadcrumb :data="path" />
      <section class="header-box">
        <div class="info">
          <aside class="text-gray">2018-06-22 16:05</aside>
          <div class="title"><a href="#">/resumemanage/showmytalentlist</a></div>
          <table>
            <tr>
              <th>报错信息 : </th>
              <td>Uncaught SyntaxError: Unexpected token o in JSON at position 1</td>
            </tr>
            <tr>
              <th>出现次数 :</th>
              <td>10021</td>
            </tr>
          </table>
        </div>
      </section>
      <section class="timeline">
        <dl>
          <dt></dt>
          <dd>
            <table>
              <tr>
                <th>event :</th>
                <td>鼠标点击</td>
              </tr>
              <tr>
                <th>element :</th>
                <td>div[class=wrap box]>div[class=main]>section[class=…s=title]>ul>li[class=,data-selector=job-manage]>a>ul>li[class=,data-selector=job-manage]>a</td>
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
                <td>鼠标点击</td>
              </tr>
              <tr>
                <th>element :</th>
                <td>div[class=wrap box]>div[class=main]>section[class=…s=title]>ul>li[class=,data-selector=job-manage]>a>ul>li[class=,data-selector=job-manage]>a</td>
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
                <td>鼠标点击</td>
              </tr>
              <tr>
                <th>element :</th>
                <td>div[class=wrap box]>div[class=main]>section[class=…s=title]>ul>li[class=,data-selector=job-manage]>a>ul>li[class=,data-selector=job-manage]>a</td>
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
    </div>
  </article>
</template>

<script>
  import Breadcrumb from '@components/Breadcrumb'
  import Search from '@components/Search'
  export default {
    name: 'UserDetails',
    components: {Breadcrumb, Search},
    data(){
      return {
        path: [
          {
            title: '错误监控',
            url: '/'
          },
          {
            comp: 'port'
          },
          {
            title: 'ajax-details'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .box{ display:flex; height: 100%; }
  .box-space{ flex: 1; }
  .search{padding: 15px 10px; background: #4F5364;}
  .aside-user-list{
    overflow-y: auto;
    min-height: 100%;
    .list{
      width: 300px;
      height: 100%;
      border-left: 4px solid #eee;
      li{
        border-bottom: 1px solid #eee;
        padding: 10px 10px 10px 15px;
        &:last-child{
          border-bottom: none;
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
    margin-bottom: 40px;
    .info{
      flex: 1;
      padding: 14px 16px;
      border: 4px solid #eee;
      border-radius: 10px;
      position: relative;
      table{
        th{text-align: right; padding-right: 5px; font-weight: normal;}
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
        }
      }
    }
  }
</style>