<template>
  <div class="box-space">
    <Breadcrumb :data="path" />
    <SubMenu type="performanceMonitor" active="page" />
    <SearchBar />
    <!--<p>时间倒序 平均用时越长排位越靠前</p>-->
    <table class="table">
      <thead>
        <tr>
          <th>访问页面</th>
          <th width="100" class="text-center">访问次数</th>
          <th width="100" class="text-center">白屏加载</th>
          <th width="100" class="text-center">首屏加载</th>
          <th width="100" class="text-center">资源加载</th>
          <th width="100" class="text-center">整页加载</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><router-link to="/performance-monitor/fe-h-pc/page-details">/job/showaddpage/</router-link></td>
          <td class="text-center">
            <ProgressBar type="success" html="10231" value="75%" />
          </td>
          <td class="text-center">
            <ProgressBar type="warning" html="0.9s" value="35%" />
          </td>
          <td class="text-center">
            <ProgressBar type="info" html="5s" value="45%" />
          </td>
          <td class="text-center">
            <ProgressBar type="mystery" html="10s" value="25%" />
          </td>
          <td class="text-center">
            <ProgressBar type="light" html="12s" value="75%" />
          </td>
        </tr>
        <tr>
          <td><router-link to="/performance-monitor/fe-h-pc/page-details">/search/getConditionItem/</router-link></td>
          <td class="text-center">
            <ProgressBar type="success" html="10231" value="45%" />
          </td>
          <td class="text-center">
            <ProgressBar type="warning" html="0.9s" value="65%" />
          </td>
          <td class="text-center">
            <ProgressBar type="info" html="5s" value="25%" />
          </td>
          <td class="text-center">
            <ProgressBar type="mystery" html="10s" value="65%" />
          </td>
          <td class="text-center">
            <ProgressBar type="light" html="10s" value="45%" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import Breadcrumb from '@components/Breadcrumb'
  import SubMenu from '@components/SubMenu'
  import SearchBar from '@components/SearchBar'
  import ProgressBar from '@components/ProgressBar'
  export default {
    name: 'performance-monitor-PageList',
    components: {Breadcrumb, SubMenu, SearchBar, ProgressBar},
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
            title: '页面性能'
          }
        ]
      }
    }
  }
</script>
<style scoped lang="less">

</style>