<template>
  <div class="box-space">
    <Breadcrumb :data="path" />
    <SubMenu type="jsMonitor" active="user" />
    <SearchBar placeholderInfo="用户ID" />
    <div class="header-info">
      <table>
        <tr>
          <td width="106">
            <img src="//image0.lietou-static.com/img/5ad45df0e4b0269dafa717a002c.jpg" class="photo" />
          </td>
          <td>
            <aside class="aside text-gray">最后登录时间: 2018-08-31 18:23:11</aside>
            <p>用户ID: fac9ecfb615530881a667e00ad0d9493</p>
            <p class="text-gray">用户姓名: 巩彦超 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 邮箱: gongyanchao@liepin.com</p>
            <p class="text-gray">当前所在地: 北京</p>
          </td>
        </tr>
      </table>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>错误信息</th>
          <th width="110" class="text-center">
            <SelectUI :data="[{title: 'all'}, {title: 'js'}, {title: 'ajax'}]" />
          </th>
          <th width="150" class="text-center">时间</th>
          <th width="90" class="text-center">出现次数</th>
          <th width="90" class="text-center">用户数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <router-link to="/js-monitor/fe-h-pc/user-details/123">
              <p class="title">ReferenceError: unknownVariable is not defined</p>
              <div class="sub-info">
                <p class="text-gray sub-bar"><span>url: h.liepin.com/resumemanage/showmytalentlist</span></p>
                <p class="text-gray sub-bar"><span>file: https://concat.lietou-static.com/fe-msk-pc/v5/static/js/loader.js</span></p>
                <p class="text-gray sub-bar">
                  <span class="mr">row:1 </span>
                  <span class="mr">col:1032131</span>
                </p>
              </div>
            </router-link>
          </td>
          <td class="text-center">js</td>
          <td class="text-center">2018-06-22 16:05</td>
          <td class="text-center">9105</td>
          <td class="text-center">1100</td>
        </tr>
        <tr>
          <td>
            <router-link to="/js-monitor/fe-h-pc/user-details/123">
              <p class="title">status: 200 | Uncaught SyntaxError: Unexpected token o in JSON at position 1</p>
              <div class="sub-info">
                <p class="text-gray sub-bar"><span>url: h.liepin.com/resumemanage/showmytalentlist</span></p>
                <p class="text-gray sub-bar"><span>page: msk.liepin.com/mskjob/addmskjob/</span></p>
              </div>
            </router-link>
          </td>
          <td class="text-center">ajax</td>
          <td class="text-center">2018-06-22 16:05</td>
          <td class="text-center">9105</td>
          <td class="text-center">1100</td>
        </tr>
        <tr>
          <td>
            <router-link to="/js-monitor/fe-h-pc/user-details/123">
              <p class="title">ReferenceError: unknownVariable is not defined</p>
              <div class="sub-info">
                <p class="text-gray sub-bar"><span>url: h.liepin.com/resumemanage/showmytalentlist</span></p>
                <p class="text-gray sub-bar"><span>file: https://concat.lietou-static.com/fe-msk-pc/v5/static/js/loader.js</span></p>
                <p class="text-gray sub-bar">
                  <span class="mr">row:1 </span>
                  <span class="mr">col:1032131</span>
                </p>
              </div>
            </router-link>
          </td>
          <td class="text-center">js</td>
          <td class="text-center">2018-06-22 16:05</td>
          <td class="text-center">9105</td>
          <td class="text-center">1100</td>
        </tr>
      </tbody>
    </table>
    <PagerBar />
  </div>
</template>

<script>
  import Breadcrumb from '@components/Breadcrumb'
  import SubMenu from '@components/SubMenu'
  import SearchBar from '@components/SearchBar'
  import Loading from '@components/Loading'
  import PagerBar from '@components/PagerBar'
  import SelectUI from '@components/SelectUI'
  export default {
    name: 'UserList',
    components: {Breadcrumb, SubMenu, SearchBar, Loading, PagerBar, SelectUI},
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
            title: 'js-list'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .title{
    font-size: 14px;
    line-height: 24px;
  }
  .header-info{
    border: 1px solid #eee;
    border-top: 4px solid #F86C52;

    padding: 18px 25px;
    border-radius: 6px;
    //background: #E4E8FB;
    margin-bottom: 20px;
    table{
      width: 100%;
      td{
        line-height: 24px;
      }
      .aside{
        float: right;
      }
      .photo{
        width: 80px;
        height: 80px;
        overflow: hidden;
        border: 2px solid #4F5364;
        border-radius: 50%;
        vertical-align: middle;
      }
    }
  }

  .sub-bar{
  }


</style>
