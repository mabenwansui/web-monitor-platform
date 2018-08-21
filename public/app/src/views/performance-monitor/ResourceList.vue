<template>
  <div class="box-space">
    <Breadcrumb :data="path" />
    <SubMenu type="performanceMonitor" active="resource" />
    <SearchBar />

    <div class="box">
      <div class="map"></div>

    </div>
    <!--
      <SubMenu :active="resourceTabActive" :data="resourceTab" />
      <table class="table">
        <thead>
          <tr>
            <th>资源路径</th>
            <th width="100" class="text-center">类型</th>
            <th width="100" class="text-center">耗时</th>
            <th width="100" class="text-center">大小</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><router-link to="/performance-monitor/fe-h-pc/page-details">concat.lietou-static.com/fe-h-pc/v5/static/js/loader.js</router-link></td>
            <td class="text-center">
              <ProgressBar type="info" html="12s" value="75%" />
            </td>
            <td class="text-center">js</td>
            <td class="text-center">
              29k
            </td>
          </tr>
          <tr>
            <td><router-link to="/performance-monitor/fe-h-pc/page-details">concat.lietou-static.com/fe-h-pc/v5/js/common/header.js</router-link></td>
            <td class="text-center">
              <ProgressBar type="info" html="10s" value="45%" />
            </td>
            <td class="text-center">js</td>
            <td class="text-center">
              29k
            </td>
          </tr>
        </tbody>
      </table>
    -->
  </div>
</template>
<script>
  import Breadcrumb from '@components/Breadcrumb'
  import SubMenu from '@components/SubMenu'
  import SearchBar from '@components/SearchBar'
  import ProgressBar from '@components/ProgressBar'
  export default {
    name: 'performance-monitor-ResourceList',
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