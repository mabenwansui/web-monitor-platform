<template>
  <div class="box-space">
    <Breadcrumb :data="path" />
    <SubMenu type="performanceMonitor" active="firstscreenlist" />
    <SearchBar />

    <table class="table">
      <thead>
        <tr>
          <th>访问页面</th>
          <th width="100" class="text-center">访问次数</th>
          <th width="100" class="text-center">耗时</th>
          <th width="100" class="text-center">超时率</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <router-link to="/performance-monitor/fe-h-pc/page-details">/job/showaddpage/</router-link>
          </td>
          <td class="text-center">
            <ProgressBar type="success" html="10231" value="55%" />
          </td>
          <td class="text-center">
            <ProgressBar type="info" html="12ms" value="%" />
          </td>
          <td class="text-center">5%</td>
        </tr>
        <tr>
          <td>
            <router-link to="/performance-monitor/fe-h-pc/page-details">/search/getConditionItem/</router-link>
          </td>
          <td class="text-center">
            <ProgressBar type="success" html="10231" value="25%" />
          </td>
          <td class="text-center">
            <ProgressBar type="info" html="10ms" value="45%" />
          </td>
          <td class="text-center">3%</td>
        </tr>
      </tbody>
    </table>
    <!--
      <SubMenu :active="resourceTabActive" :data="resourceTab" />
    -->
  </div>
</template>
<script>
  import Breadcrumb from '@components/Breadcrumb'
  import SubMenu from '@components/SubMenu'
  import SearchBar from '@components/SearchBar'
  import ProgressBar from '@components/ProgressBar'
  import SelectUI from '@components/SelectUI'
  export default {
    name: 'performance-monitor-ResourceList',
    components: {Breadcrumb, SubMenu, SearchBar, ProgressBar, SelectUI},
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
    }
  }
</script>
<style scoped lang="less">

</style>