<template>
  <div class="box-space">
    <Breadcrumb :data="path" />
    <div class="header-btn-bar">
      <a href="javascript:;" class="btn btn-warning">申请追踪码</a>
    </div>
    <div class="search-bar clearfix">
      <aside class="aside"><Search placeholderInfo="追踪码 | 名称" /></aside>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th width="150">追踪码</th>
          <th width="170">名称</th>
          <th>描述</th>
          <th width="150">创建时间</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <router-link to="/event-tracking/list/">fe12930218</router-link>
          </td>
          <td>
            <router-link to="/event-tracking/list/">IM长链接统计</router-link>
          </td>
          <td>IM长链接统计IM长链接统计IM长链接统计IM长链接统计IM长链接统计</td>
          <td>2018-09-28 11:31</td>
        </tr>
        <tr>
          <td>
            <router-link to="/event-tracking/list/">fe12930218</router-link>
          </td>
          <td>
            <router-link to="/event-tracking/list/">IM长链接统计</router-link>
          </td>
          <td>IM长链接统计IM长链接统计IM长链接统计IM长链接统计IM长链接统计</td>
          <td>2018-09-28 11:31</td>
        </tr>
        <tr>
          <td>
            <router-link to="/event-tracking/list/">fe12930218</router-link>
          </td>
          <td>
            <router-link to="/event-tracking/list/">IM长链接统计</router-link>
          </td>
          <td>IM长链接统计IM长链接统计IM长链接统计IM长链接统计IM长链接统计</td>
          <td>2018-09-28 11:31</td>
        </tr>

      </tbody>
    </table>
    <PagerBar />
  </div>
</template>
<script>
  import Breadcrumb from '@components/Breadcrumb'
  import SubMenu from '@components/SubMenu'
  import Search from '@components/Search'
  import Loading from '@components/Loading'
  import PagerBar from '@components/PagerBar'
  export default {
    name: 'EventTracking',
    components: {Breadcrumb, SubMenu, Search, Loading, PagerBar},
    data(){
      return {
        path: [
          {
            title: '埋点监控'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .box-space{
    position: relative;
    .header-btn-bar{
      position: absolute;
      top: 19px;
      right: 30px;
      .btn{
        padding: 6px 15px;
      }
    }
  }
  .title{
    font-size: 14px;
    line-height: 24px;
  }
  .search-bar{
    margin-bottom: 20px;
    .aside{
      width: 100%;
      //float: right;
    }
  }
</style>
